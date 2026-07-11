# Synthetic Dry Run OH-2026-900

> **SYNTHETIC DRY RUN**
> **NOT REAL PARTICIPANT DATA**
> **NOT A LEGAL CONSENT RECORD**
>
> This fixture is a self-validation dry run of the V0.3 governance kit. Every field uses placeholder values such as `[讲述者化名]`, `[日期]`, `[联系方式]`. This is **not** an interview record, a real consent form, or evidence that any human participant has agreed to anything.

## Purpose

The single goal of this fixture is to verify that the V0.3 governance kit is usable end-to-end:

1. Templates can be filled (no field gaps, no contradictory required-vs-default).
2. JSON Schemas can express the full workflow (status enums, moduled consent, withdrawal, publication decisions).
3. Gate 0–5 do not contradict or duplicate each other.
4. The withdrawal mechanism has a defined reverse path from public release back to private closure.
5. The public repo can store only Level 2/3 synthetic data; Level 0/1 working artifacts live outside `git`.

This fixture must **never** be presented as a real oral history. It is a structural test, written by the same operator who will later run a real self-interview dry run in V0.4B.

## Reserved identifiers

The codes `OH-2026-900` through `OH-2026-999` are reserved exclusively for:

- Synthetic operator-driven dry runs.
- Automated governance kit regression tests.
- Governance kit documentation examples.

These identifiers must **never** be assigned to a real participant, a real family member, or a real interview session. The first non-synthetic project identifier reserved after V0.4 dry runs is `OH-2026-001`.

## Project at a glance

| Field                         | Synthetic value                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Project code                  | `OH-2026-900`                                                                                                    |
| Interview topic (synthetic)   | How the 2015 Projects Reborn idea evolved from a static idea list into a personal knowledge & memory laboratory. |
| Narrator code                 | `SYNTHETIC-NARRATOR-001`                                                                                         |
| Public display name (example) | `[讲述者化名]` (placeholder; the real dry run in V0.4B will let the operator pick a public name or pseudonym). |
| Channel                       | Synthetic dry-run text transcript; **no real audio captured, no voice cloning generated**.                       |
| Storage level                 | Working draft → Level 2 synthetic-approved-public → **never published to the Astro site**.                        |
| Status field (schema enum)    | `planned → consented → recorded → transcribing → narrator-review → approved-private → approved-public`          |
| Publication gate reached     | Gate 5 (approved-public on paper) — but the publish step is **explicitly skipped** in this dry run.               |
| Withdrawal tested             | Yes — see `withdrawal-request.md` and `gate-traceability-table.md`.                                              |

## What this fixture deliberately does NOT do

- It does **not** use the user's real name, real family members, real contacts, or real biographical facts.
- It does **not** record or simulate the user's voice. No `.mp3` / `.wav` is committed.
- It does **not** publish a `/fixtures/...` Astro page or any live route.
- It does **not** modify `site/`, `.github/workflows/pages.yml`, or the four 2015 original documents.
- It does **not** modify `archive/2015/README.original.md` or `archive/2015/manifest.sha256`.

## What this fixture does verify

- That the V0.3 governance kit is structurally complete and that the dry-run operator can fill every required field without inventing new fields.
- That the validator scripts (`scripts/validate-oral-history-governance.mjs`, `site/scripts/validate-story-data.mjs`) can parse and validate the fixture's synthetic JSON Schemas.
- That the Gate 0–5 implementation, the Level 0–3 data classification, and the withdrawal flow can be traced in plain markdown without external tools.

See the per-file drafts and the trace matrix in this directory for the full dry-run trail.

## Validator script

This directory ships a small Node validator, `validate-fixture.mjs`, that:

- Reads the four JSON fixture files.
- Parses each as JSON.
- Checks that the consent fixture's `voiceCloningConsented`, `modelTrainingConsented`, `aiSummaryCloud`, `aiNamedEntityExtraction` are explicitly marked `false` or carry a paired audit log entry (a placeholder is acceptable).
- Confirms the `interview-project.json` `status` field is one of the ten enum values defined in `interview-project.schema.json`.
- Confirms the `withdrawal-request.md` trace references a real `publication-approval.md` decision id.

Run with:

```sh
node fixtures/synthetic-oh-2026-900/validate-fixture.mjs
```
