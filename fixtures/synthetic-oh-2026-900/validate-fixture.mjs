#!/usr/bin/env node
/**
 * Synthetic Dry Run OH-2026-900 validator
 *
 * Read the four JSON fixture files in this directory and the trace markdown.
 * Confirm structurally that:
 *
 *   1. Every JSON fixture parses.
 *   2. Each JSON $schema reference points at an existing schema under docs/oral-history/schemas/.
 *   3. The consent fixture's voiceCloning / modelTraining / cloud-AI fields follow the deny-by-default rule,
 *      OR carry a paired audit row reference (we only check the boolean shape here).
 *   4. The interview-project status field is one of the 10 enum values from interview-project.schema.json.
 *   5. The publication-decision schema field 'decision' is one of the schema's enum values.
 *   6. The withdrawal-request.md document references an actual decision id from publication-approval.md.
 *
 * Pure Node 18+ (fs/path only). No npm dependencies.
 * This script must FAIL LOUD (exit 1) if any check errors. SUCCESS exits with a PASS banner.
 *
 * NOTE: This validator lives inside a fixtures/synthetic-* folder. It is intentionally placed
 * beside the fixture artefacts (not in /scripts/) so the doc-author of the governance kit
 * can update the fixture and its checker in lockstep.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const SCHEMAS_DIR = path.join(REPO_ROOT, "docs", "oral-history", "schemas");

const FIXTURE_FILES = [
  "fixture.interview-project.json",
  "fixture.participant-consent.json",
  "fixture.interview-session.json",
  "fixture.publication-decision.json",
];

const PROJECT_STATUS_ENUM = [
  "planned",
  "consented",
  "recorded",
  "transcribing",
  "narrator-review",
  "approved-private",
  "approved-public",
  "embargoed",
  "withdrawn",
  "closed",
];

const PUBLICATION_DECISION_ENUM = [
  "approved-private",
  "approved-public",
  "embargoed",
  "withdrawn",
  // The schema also accepts "draft" and "rejected" in many real-world uses; V0.3
  // declarations cover at least the five above. Anything else is a hard fail so
  // future schema drift is caught.
];

let errors = 0;
let checks = 0;

function error(msg) {
  console.error(`  ERROR  ${msg}`);
  errors += 1;
}

function ok(msg) {
  console.log(`  PASS   ${msg}`);
}

function check(cond, msgIfTrue, msgIfFalse) {
  checks += 1;
  if (cond) ok(msgIfTrue);
  else error(msgIfFalse);
}

function readJson(filename) {
  const full = path.join(__dirname, filename);
  if (!fs.existsSync(full)) {
    error(`missing file ${filename}`);
    return null;
  }
  const txt = fs.readFileSync(full, "utf8");
  try {
    return JSON.parse(txt);
  } catch (e) {
    error(`invalid JSON in ${filename}: ${e.message}`);
    return null;
  }
}

function resolveSchemaRef(refString) {
  // The fixture $schema is relative like "../../docs/oral-history/schemas/interview-project.schema.json".
  const full = path.resolve(__dirname, refString);
  return fs.existsSync(full) ? full : null;
}

console.log("Synthetic OH-2026-900 fixture validator");
console.log("========================================");

// 1. Each JSON fixture parses.
const fixtures = {};
for (const name of FIXTURE_FILES) {
  const obj = readJson(name);
  if (obj) {
    fixtures[name] = obj;
    check(true, `parses: ${name}`);
  }
}

// 2. Each fixture's $schema references an existing schema file.
for (const [name, obj] of Object.entries(fixtures)) {
  if (!obj["$schema"]) {
    error(`${name} is missing $schema reference`);
    continue;
  }
  const exists = resolveSchemaRef(obj["$schema"]);
  check(
    exists !== null,
    `$schema OK for ${name}`,
    `$schema MISSING for ${name} -> ${obj["$schema"]}`
  );
}

// 3. Consent fixture: deny-by-default fields. We only require that they are explicitly FALSE,
//    which is the V0.3 default. We do not require them to be true; we require them NOT to be
//    silently absent.
if (fixtures["fixture.participant-consent.json"]) {
  const c = fixtures["fixture.participant-consent.json"];
  const denyByDefault = ["voiceCloningConsented", "modelTrainingConsented", "aiSummaryCloud", "aiNamedEntityExtraction"];
  for (const k of denyByDefault) {
    check(
      c[k] === false,
      `consent.deny-by-default ${k} = false`,
      `consent.deny-by-default ${k} MUST be false in dry-run fixture (got ${JSON.stringify(c[k])})`
    );
  }
  // Also: at least 3 of {aiTranscriptionLocal, aiTimecodeLocal, aiSummaryLocal, aiTranslationLocal} are true,
  // proving the schema field-set is exercised.
  const allowByDefault = ["aiTranscriptionLocal", "aiTimecodeLocal", "aiSummaryLocal", "aiTranslationLocal"];
  const trueCount = allowByDefault.filter((k) => c[k] === true).length;
  check(
    trueCount >= 3,
    `consent.allow-by-default fields exercised (${trueCount}/4 true)`,
    `consent.allow-by-default fields under-exercised (only ${trueCount}/4 true)`
  );
}

// 4. Interview-project.status is one of the 10 enum values.
if (fixtures["fixture.interview-project.json"]) {
  const p = fixtures["fixture.interview-project.json"];
  check(
    PROJECT_STATUS_ENUM.includes(p.status),
    `project.status '${p.status}' is in 10-enum`,
    `project.status '${p.status}' is NOT in 10-enum: ${PROJECT_STATUS_ENUM.join(", ")}`
  );
}

// 5. publication-decision.decision is one of the schema's enum values.
if (fixtures["fixture.publication-decision.json"]) {
  const d = fixtures["fixtures.publication-decision.json"] || fixtures["fixture.publication-decision.json"];
  check(
    PUBLICATION_DECISION_ENUM.includes(d.decision),
    `publication.decision '${d.decision}' is in schema enum`,
    `publication.decision '${d.decision}' is NOT in schema enum: ${PUBLICATION_DECISION_ENUM.join(", ")}`
  );
}

// 6. withdrawal-request.md references an actual decision id from publication-approval.md.
{
  const wrPath = path.join(__dirname, "withdrawal-request.md");
  const paPath = path.join(__dirname, "publication-approval.md");
  if (!fs.existsSync(wrPath)) error("withdrawal-request.md missing");
  else if (!fs.existsSync(paPath)) error("publication-approval.md missing");
  else {
    const wr = fs.readFileSync(wrPath, "utf8");
    const pa = fs.readFileSync(paPath, "utf8");
    const decisionIds = Array.from(pa.matchAll(/decisionId[^|]*\|\s*`([^`]+)`/g)).map((m) => m[1].trim());
    check(
      decisionIds.length >= 1,
      `publication-approval.md declares decisionId: ${decisionIds.join(", ")}`,
      `publication-approval.md declares no decisionId`
    );
    if (decisionIds.length >= 1) {
      const linked = decisionIds.some((id) => wr.includes(id));
      check(
        linked,
        `withdrawal-request.md links to a real decisionId`,
        `withdrawal-request.md does NOT link to any declared decisionId: ${decisionIds.join(", ")}`
      );
    }
  }
}

console.log("========================================");
console.log(`checks=${checks}  errors=${errors}`);

if (errors > 0) {
  console.error(`FAIL: ${errors} error(s) in fixture validator.`);
  process.exit(1);
}
console.log("PASS: OH-2026-900 synthetic dry-run fixture is structurally consistent.");
process.exit(0);
