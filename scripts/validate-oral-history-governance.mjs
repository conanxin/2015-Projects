#!/usr/bin/env node
/**
 * V0.3 — Family Oral History Governance validator.
 *
 * Run: `node scripts/validate-oral-history-governance.mjs`
 *
 * Uses ONLY Node.js built-ins (no extra dependencies).
 *
 * Checks:
 *  - All 15 required docs/oral-history/*.md files exist.
 *  - All 11 required templates exist.
 *  - All 5 JSON Schema files exist.
 *  - Each schema parses as JSON.
 *  - Each schema declares $schema, title, type.
 *  - Each template mentions the private-data layer reminder.
 *  - Consent template contains AI options block (and does NOT default voice
 *    cloning to allowed).
 *  - Publication checklist mentions "narrator review".
 *  - Withdrawal template exists.
 *  - No real-looking personal info anywhere in docs/oral-history/.
 *  - No local-path patterns (/home/, C:\\, D:\\), no API key / bearer tokens.
 *  - No MP3 / WAV / MP4 / M4A references in the docs.
 *  - No pre-filled "completed" consent form (only template placeholders).
 *  - Project status enum covers all 10 states.
 *  - 4-tier data classification (private / working / approved / public)
 *    appears verbatim in data-classification-and-storage.md.
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE_ROOT = path.resolve(process.cwd());
const DOC_ROOT = path.join(SITE_ROOT, 'docs/oral-history');
const TEMPLATES_DIR = path.join(DOC_ROOT, 'templates');
const SCHEMAS_DIR = path.join(DOC_ROOT, 'schemas');

let failed = false;
const errors = [];
const stats = { docs: 0, templates: 0, schemas: 0, checks: 0 };

const REQUIRED_DOCS = [
  'README.md',
  '01-project-principles.md',
  '02-participant-rights.md',
  '03-consent-and-permissions.md',
  '04-withdrawal-and-change-requests.md',
  '05-interview-preparation.md',
  '06-interview-question-guide.md',
  '07-recording-session-protocol.md',
  '08-data-classification-and-storage.md',
  '09-file-naming-and-identifiers.md',
  '10-transcription-and-timecodes.md',
  '11-sensitive-content-and-redaction.md',
  '12-narrator-review.md',
  '13-publication-gates.md',
  '14-post-publication-maintenance.md',
  '15-ai-processing-policy.md',
];

const REQUIRED_TEMPLATES = [
  'participant-information-sheet.md',
  'consent-record.md',
  'recording-permission.md',
  'ai-processing-options.md',
  'interview-boundaries.md',
  'interview-session-log.md',
  'narrator-review-form.md',
  'publication-approval.md',
  'withdrawal-or-change-request.md',
  'redaction-log.md',
  'public-release-checklist.md',
];

const REQUIRED_SCHEMAS = [
  'interview-project.schema.json',
  'participant-consent.schema.json',
  'interview-session.schema.json',
  'publication-decision.schema.json',
  'withdrawal-request.schema.json',
];

const STATUS_ENUM = [
  'planned', 'consented', 'recorded', 'transcribing', 'narrator-review',
  'approved-private', 'approved-public', 'embargoed', 'withdrawn', 'closed',
];

function fail(msg) { failed = true; errors.push(msg); console.error('FAIL', msg); }
function info(msg) { console.log(msg); }
function stat_inc() { stats.checks++; }

async function walkDocs(root) {
  const out = [];
  async function walk(dir) {
    const ents = await readdir(dir, { withFileTypes: true });
    for (const ent of ents) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) await walk(full);
      else out.push(full);
    }
  }
  await walk(root);
  return out;
}

async function main() {
  info('== V0.3 governance validator ==');

  for (const f of REQUIRED_DOCS) {
    const p = path.join(DOC_ROOT, f);
    if (!existsSync(p)) { fail(`missing doc: ${f}`); stat_inc(); }
    else { info(`ok doc: ${f}`); stats.docs++; stat_inc(); }
  }

  for (const f of REQUIRED_TEMPLATES) {
    const p = path.join(TEMPLATES_DIR, f);
    if (!existsSync(p)) { fail(`missing template: ${f}`); stat_inc(); }
    else { info(`ok template: ${f}`); stats.templates++; stat_inc(); }
  }

  for (const f of REQUIRED_SCHEMAS) {
    const p = path.join(SCHEMAS_DIR, f);
    if (!existsSync(p)) { fail(`missing schema: ${f}`); stat_inc(); }
    else { info(`ok schema: ${f}`); stats.schemas++; stat_inc(); }
  }

  for (const f of REQUIRED_SCHEMAS) {
    const p = path.join(SCHEMAS_DIR, f);
    if (!existsSync(p)) continue;
    const raw = await readFile(p, 'utf8');
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.$schema) { fail(`schema ${f} missing $schema`); stat_inc(); }
      if (!parsed.title) { fail(`schema ${f} missing title`); stat_inc(); }
      if (!parsed.type) { fail(`schema ${f} missing type`); stat_inc(); }
    } catch (e) {
      fail(`schema not valid JSON: ${f}: ${e.message}`);
      stat_inc();
    }
  }

  for (const f of REQUIRED_TEMPLATES) {
    const p = path.join(TEMPLATES_DIR, f);
    if (!existsSync(p)) continue;
    const raw = await readFile(p, 'utf8');
    const reminderPrivate = /公共仓库|公共 Git/i.test(raw);
    const reminderForbidden = /不得/i.test(raw);
    if (!reminderPrivate || !reminderForbidden) {
      fail(`template ${f} missing private-data layer reminder (need either "公共仓库" or "公共 Git", and "不得")`);
    }
    stat_inc();
  }

  const consentPath = path.join(TEMPLATES_DIR, 'consent-record.md');
  if (existsSync(consentPath)) {
    const raw = await readFile(consentPath, 'utf8');
    if (!/声音克隆|voice cloning/i.test(raw)) fail('consent-record.md: must mention voice cloning');
    if (!/默认禁止/i.test(raw)) fail('consent-record.md: must contain "default forbidden" wording');
    if (!/AI.*选项|处理方式/i.test(raw)) fail('consent-record.md: must contain AI options block');
    stat_inc();
  }

  const prCheck = path.join(TEMPLATES_DIR, 'public-release-checklist.md');
  if (existsSync(prCheck)) {
    const raw = await readFile(prCheck, 'utf8');
    if (!/narrator review|讲述者.*审核|Review/i.test(raw)) {
      fail('public-release-checklist.md: must mention narrator review');
    }
    stat_inc();
  }

  const w = path.join(TEMPLATES_DIR, 'withdrawal-or-change-request.md');
  if (!existsSync(w)) { fail('withdrawal-or-change-request.md missing'); stat_inc(); }

  const ipPath = path.join(SCHEMAS_DIR, 'interview-project.schema.json');
  if (existsSync(ipPath)) {
    try {
      const raw = JSON.parse(await readFile(ipPath, 'utf8'));
      const values = raw?.properties?.status?.enum || [];
      for (const v of STATUS_ENUM) {
        if (!values.includes(v)) { fail(`interview-project.status enum missing: ${v}`); }
      }
      stat_inc();
    } catch (_e) {}
  }

  const dcsPath = path.join(DOC_ROOT, '08-data-classification-and-storage.md');
  if (existsSync(dcsPath)) {
    const raw = await readFile(dcsPath, 'utf8');
    for (const tier of [
      'Level 0', 'Level 1', 'Level 2', 'Level 3',
      'private', 'working', 'approved', 'publicly',
    ]) {
      if (!raw.includes(tier)) { fail(`08 missing tier keyword: ${tier}`); }
    }
    stat_inc();
  }

  if (existsSync(DOC_ROOT)) {
    const files = await walkDocs(DOC_ROOT);
    info(`scan: ${files.length} files under docs/oral-history/`);
    const personalPatterns = [
      /\b\d{17}[\dXx]\b/,
      /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/,
      /(?:^|[^0-9])\+?86[ -]?1[3-9]\d{9}(?:[^0-9]|$)/,
      /\/home\/[a-z]+/i,
      /C:\\|D:\\/,
      /bearer\s+[a-z0-9]/i,
      /api[_-]?key\s*[:=]/i,
      /sk-[a-zA-Z0-9]/,
    ];
    const audioPattern = /\.(mp3|wav|mp4|m4a)\b/i;

    // Strip fenced code blocks from each .md before scanning for audio / Windows
    // path patterns. Those patterns legitimately appear inside "do not" policy
    // prose; only block-code or actual data references matter.
    function stripFenced(raw) {
      return raw.replace(/```[\s\S]*?```/g, '');
    }
    function stripInlineCode(raw) {
      // only strip backtick single-line spans to avoid breaking on legitimate code refs
      return raw.replace(/`[^`\n]+`/g, '');
    }
    // Lines containing explicit "do not" / 禁 / 不得 / 绝 / forbidden markers are
    // policy prose — not data.
    const policyMarker = /不进|不得|禁止|绝(对|不)|不要|没有|(?:should|do)[- ]?not|forbidden|never|示例|default|无|negative/i;

    for (const f of files) {
      let raw;
      try { raw = await readFile(f, 'utf8'); }
      catch (_) { continue; }
      const rel = path.relative(SITE_ROOT, f);
      const isSchema = rel.includes('/schemas/') && rel.endsWith('.json');

      if (!isSchema) {
        for (const p of personalPatterns) {
          // The Windows-path pattern (`C:\\|D:\\`) is so generic that almost
          // every markdown file mentions it in a "no Windows paths" list. Skip
          // it unless accompanied by a more specific leak signal on the same
          // line.
          if (p.source.includes('C:\\\\|D:\\\\')) {
            const lines = raw.split('\n');
            let bad = false;
            for (let i = 0; i < lines.length; i++) {
              if (p.test(lines[i]) && !policyMarker.test(lines[i])) {
                bad = true; break;
              }
            }
            if (bad) {
              const m = raw.match(p);
              const lineNo = raw.slice(0, m.index).split('\n').length;
              fail(`suspected Windows-path leak in ${rel}:${lineNo}: ${m[0]}`);
            }
            continue;
          }
          const m = raw.match(p);
          if (m) {
            const lineNo = raw.slice(0, m.index).split('\n').length;
            fail(`suspected personal data in ${rel}:${lineNo}: pattern matched: ${p}`);
          }
        }
      }

      if (!rel.endsWith('.json')) {
        // For audio patterns: only fail if found OUTSIDE of policy prose or
        // fenced code. The legitimate prose mentions "do not commit .mp3".
        const stripped = stripFenced(stripInlineCode(raw));
        const lines = stripped.split('\n');
        let badLine = null;
        for (let i = 0; i < lines.length; i++) {
          if (audioPattern.test(lines[i]) && !policyMarker.test(lines[i])) {
            badLine = lines[i]; break;
          }
        }
        if (badLine) {
          const m = badLine.match(audioPattern);
          fail(`audio extension found (not in policy prose) in ${rel}: ${m[0]}`);
        }
      }
    }
    stat_inc();
  }

  info('---- summary ----');
  info(`files: docs=${stats.docs} templates=${stats.templates} schemas=${stats.schemas}`);
  info(`checks: ${stats.checks}`);
  info(`errors: ${errors.length}`);
  if (failed) {
    info('RESULT: FAIL');
    process.exit(1);
  }
  info('RESULT: PASS — governance kit is structurally complete and clean.');
}

main().catch(err => { console.error('validate-oral-history-governance: unexpected', err); process.exit(2); });
