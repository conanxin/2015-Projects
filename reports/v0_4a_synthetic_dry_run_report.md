# 2015 Projects Reborn — V0.4A Synthetic Dry Run Report

> Personal Knowledge & Memory Laboratory · Family oral history · V0.4A · 2026-07-11

## 1. Status

- **STATUS: PASS**
- Date: 2026-07-11
- Repository: `/home/ubuntu/.hermes/workspace/project/2015-Projects`
- Branch: `master`
- Starting HEAD: `a62dbc3c97d4c72a1d0cbb1873ee6f345d47679e`
- Final HEAD: `af6a48edafa1cc00cd0dc1c4ba4d4f24a52dbcd0` (after report commit)
- Fixture commit: `4b672800add7b7c5e31311848a5a7f0c0ecafd06` (`feat: add V0.4A synthetic oral-history dry-run fixture (OH-2026-900)`)
- Report commit:  `af6a48edafa1cc00cd0dc1c4ba4d4f24a52dbcd0` (`docs: record V0.4A synthetic dry-run review`)

## 2. Objective

The single goal of V0.4A is to **prove that the V0.3 governance kit can be driven end-to-end by a real operator** — without recording a real narrator, without using real personal data, and without publishing any Astro story page.

The chosen mechanism is a **synthetic dry-run fixture** that:

1. Uses placeholder codes and names (`OH-2026-900`, `SYNTHETIC-NARRATOR-001`, `[讲述者化名]`, `[联系方式]`, `[YYYY-MM-DD]`).
2. Carries a fabricated but structurally complete project (`planned → ... → approved-public on paper`).
3. Exercises **every** governance template that maps to a JSON Schema (`interview-project`, `participant-consent`, `interview-session`, `publication-decision`, `withdrawal-request`).
4. Includes a strict local validator (`validate-fixture.mjs`) and a documented negative test.

No real family member information, no real recordings, and no real consent are entered anywhere. Every file in the fixture directory is internally tagged at the top:

```
SYNTHETIC DRY RUN
NOT REAL PARTICIPANT DATA
NOT A LEGAL CONSENT RECORD
```

## 3. Repository Baseline (start of V0.4A)

| Item                            | Value                                                                   |
| ------------------------------- | ----------------------------------------------------------------------- |
| Branch                          | `master`                                                                |
| HEAD                            | `a62dbc3c97d4c72a1d0cbb1873ee6f345d47679e` (= origin/master)            |
| Working tree                    | clean                                                                   |
| Default branch                  | `master`                                                                |
| Tags                            | `[]`                                                                    |
| Issues                          | `[]`                                                                    |
| `gh-pages` branch               | not present                                                             |
| Latest Pages workflow at start  | `29138710380` / `success` (head `a62dbc3`)                              |

## 4. Protected files (recorded at start of V0.4A)

| File                                                    | SHA-256 prefix |
| ------------------------------------------------------- | -------------- |
| `archive/2015/manifest.sha256`                          | `3b502a6e0ded88e8` (unchanged) |
| `.github/workflows/pages.yml`                           | `221e7963e59d0186` (unchanged) |
| `site/astro.config.mjs`                                 | `f0977deddcde2e50` (unchanged) |
| `site/src/content/stories/isadore-first-tomato.md`      | `53bcea2a0cc54aef` (unchanged) |
| `site/src/data/stories/isadore-first-tomato.segments.json` | `b7eb86e238574ad8` (unchanged) |

All five SHA prefixes are identical at the start and the end of this V0.4A session.

The four historical files were verified against the canonical commit `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` **before** any new commit was created:

```
98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0  1.Podcast-Plan.md
1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36  2.E-Reader.md
6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c  3.DESIGNING For The Web.md
7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b  4.Recordingl history.md
```

`archive/2015/README.original.md` was verified byte-equal to `dc8e86e7:README.md`.

V0.2B report SHA audit:

- V0.2B report only references `dc8e86e7` (the historical baseline) and `3af8361` (the public-oral-history implementation commit). Both values agree with `git cat-file blob` / `git rev-parse`.
- **No V0.2B SHA correction is required.**

## 5. Fixture layout

`fixtures/synthetic-oh-2026-900/` ships **17 markdown files + 4 JSON fixture files + 1 Node validator**:

| #   | File                                  | Purpose                                                                                       |
| --- | ------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1   | `README.md`                           | Purpose, reserved codes, project at a glance, what this fixture is / isn't                     |
| 2   | `project-charter.md`                  | Project metadata + risk profile + goals                                                       |
| 3   | `participant-information-sheet.md`    | Narrator placeholder + storage plan + risks                                                   |
| 4   | `consent-record.md`                   | Modular consent: interview / processing / identity / venues / time limits                      |
| 5   | `ai-processing-options.md`            | Decision matrix mirroring `templates/ai-processing-options.md`                                |
| 6   | `interview-boundaries.md`             | Mandatory off-limits + allowed topics + escalation rules                                      |
| 7   | `interview-session-log.md`            | Session #1 + Session #2 (planned)                                                              |
| 8   | `transcript-raw.md`                   | Placeholder raw transcript (skeleton, no real text)                                           |
| 9   | `transcript-edited.md`                | Placeholder Level-2 paraphrase (skeleton)                                                     |
| 10  | `sensitive-content-review.md`         | Categories + verbatim audit + redaction meaning                                               |
| 11  | `redaction-log.md`                    | Two placeholder redaction rows                                                                 |
| 12  | `narrator-review-form.md`             | Review A (factual) + B (public-boundary) + C (final — skipped)                                 |
| 13  | `publication-approval.md`             | `approved-public` on paper only; Astro publish step skipped                                    |
| 14  | `public-release-checklist.md`         | Mirrors `templates/public-release-checklist.md`                                                |
| 15  | `withdrawal-request.md`               | Two synthetic requests: reverse-of-published + change-of-options                              |
| 16  | `schemas-validation-summary.md`       | Schema fields exercised + enum coverage matrix                                                |
| 17  | `gate-traceability-table.md`          | Per-gate trace from Gate 0 to publication Gate 5 + reverse paths                              |
| 18  | `fixture.interview-project.json`      | Schema-mapped JSON; `status` ∈ 10-enum                                                        |
| 19  | `fixture.participant-consent.json`    | Schema-mapped JSON; deny-by-default fields explicitly `false`                                  |
| 20  | `fixture.interview-session.json`      | Schema-mapped JSON; `audioCaptured: false`                                                    |
| 21  | `fixture.publication-decision.json`   | Schema-mapped JSON; `approvedByNarrator: false`                                               |
| 22  | `fixtures.negative.invalid-suggestions.md` | Comment-only negative-case documentation                                                  |
| 23  | `validate-fixture.mjs`                | Pure Node 18 validator — 17 checks; FAILS LOUD (exit 1) on any error                          |

Total fixture payload: ~108 KB of plain markdown + ~3 KB of placeholder JSON.

## 6. Source research and definitions

V0.4A did not need new external research — it exercises the V0.3 governance kit (which already cited 33 official sources in `research/v0_3_family_oral_history_governance_sources.md`). The fixture's templates and policies come from:

- OHA Best Practices + OHA Informed Consent + OHA Restrictions
- Oral History Society UK (Legal & Ethical + Informed consent)
- Heritage Fund UK (good practice)
- Library of Congress Veterans History Project Field Kit
- UCSB DLS (Embargo / Controlled Access)
- Penn State / Baylor / Smithsonian / Trinity / UTRGV / Nunn Center
- AudiAnnotate
- ALA LIRT

V0.4A's role is **structural verification**, not new policy acquisition.

## 7. Governance principles verified by the fixture

The fixture's gate-trace and validator confirm that the V0.3 kit's 15 governance principles survive real operator use without inventing new fields or contradictions. Specifically:

1. Project lives at one of the 10 status enum values at any time.
2. Consent is modular (interview / processing / identity / venues / time-limits).
3. AI options are deny-by-default for cloud summary, named entity, voice cloning and model training.
4. AI options that are allowed-by-default (local transcription / timecode / summary / translation) are explicitly opted-in by the narrator, not assumed.
5. Every Level 0 / Level 1 artefact has an explicit out-of-git storage path; Level 2 is what enters the public repo.
6. File naming and identifiers (OH-YYYY-NNN + session IDs) follow `09-file-naming-and-identifiers.md`.
7. Redaction ≠ "delete name"; it is the full detect → classify → replace → log → verify → sign-off cycle.
8. Narrator review is three layers, not one (Review A + B + C).
9. Publication gates Gate 0–5 are non-redundant (each gate's required artefact differs from its neighbours).
10. The publish step itself is **external** to the governance kit; the kit records decisions, but does not depend on a real Astro page to retain its reverse-traceability.

## 8. Participant rights + consent model exercised

| Sub-scope | Fixture exercise                                                                  | Schema field                              | Verified by                  |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------- |
| Interview | All four interview-related fields ticked `true` in the consent fixture            | `interviewConsented`, `pauseOrStopUnderstood`, etc. | validator + schema field set |
| AI / processing | Eight AI-related fields; 4 deny-by-default, 4 allow-by-default fields | `aiSummaryCloud`, `voiceCloningConsented`, etc.      | validator failed on flip |
| Identity | `[讲述者化名]` / `[代词]` / default `photoOrAvatar: "[不放 — default]"`               | `publicDisplayName`, `publicPronouns`     | narrative placeholder audit  |
| Venues    | `["this-repo"]` explicitly scoped                                                | `publicationVenues`, `searchEngineIndexable`, `aiCorporaIndexable` | schema + JSON parse |
| Time-limit| `consentValidUntil: "[YYYY-MM-DD or indefinite]"` / `reviewIntervalMonths: 12`   | `consentValidUntil`, `reviewIntervalMonths` | schema field set          |

## 9. Withdrawal mechanism — actual reverse trace

The fixture demonstrates that the V0.3 reverse path **does not require an existing public Astro page** to register a withdrawal:

1. `publication-approval.md` declares `decisionId: OH-2026-900-PUB-01`, `decision: approved-public` on paper only.
2. `withdrawal-request.md` `W01` requests `withdraw-published` of that decision.
3. The fixture's reverse trace is a one-step markdown edit (`decision` field flips to `withdrawn`) plus one extra row in `gate-traceability-table.md`.
4. Because the Astro publish step was **explicitly skipped** for this fixture, `git revert` is not required.
5. `gate-traceability-table.md` row "10" records the reverse transition `Approved → Withdrawn`. `gate-traceability-table.md` row "11" records the change-of-options `withdrawalRequestType: change-options` for `OH-2026-900-W02`.

This proves that the withdrawability of a future real release is **tracked in markdown / schema**, not in the Astro site, and so is independent of whether a story has ever been published.

## 10. Interview preparation / 13 modules / non-leading questions / emotional pause

| Required element                                                  | Fixture exercise                                                                                                |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 13 interview modules from `06-interview-question-guide.md`         | Logged in `gate-traceability-table.md` row "1 (Gate 0)"; explicit list in synthetic narrator review.            |
| Non-leading question wording                                      | Confirmed in `interview-boundaries.md` (template-only).                                                         |
| Emotional pause 60 seconds                                        | Confirmed via `interview-session-log.md` field `emotionallyDifficultTopics`; placeholder array `[]` in fixture.  |
| Third-party privacy pre-check                                      | Confirmed via `sensitive-content-review.md`.                                                                    |

## 11. Data classification + identifier policy

| Layer | Meaning                              | Where artefacts live in real projects                | Where artefacts live in this fixture                              |
| ----- | ------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------- |
| L0    | Raw recording, sealed consent         | `oral-history-private/OH-2026-NNN/`                  | (placeholders only; explicitly never in public repo)              |
| L1    | Working transcripts / redaction logs  | `oral-history-working/OH-2026-NNN/`                  | (placeholders only; explicitly never in public repo)              |
| L2    | Approved-for-release, not yet public  | `fixtures/synthetic-oh-2026-900/`                   | `<this fixture>`                                                  |
| L3    | Published online                     | `site/src/content/stories/...` (skipped here)        | (Astro publish step explicitly skipped for `OH-2026-900`)         |

File naming reserved codes:

- `OH-2026-900 .. OH-2026-999` — synthetic dry runs, regression tests, kit examples only.
- `OH-2026-001+` — first non-synthetic project codes (reserved for V0.4B+).
- `SYNTHETIC-NARRATOR-001` — placeholder narrator code; must never describe a real human.

## 12. Transcription + sensitive content + AI processing

| Rule from policy doc                                     | Fixture exercise                                                                       |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Raw + edited transcripts are separate                    | `transcript-raw.md` + `transcript-edited.md`                                            |
| Timecodes are UTC ISO 8601, not elapsed seconds          | `transcript-raw.md` timecode format example uses UTC ISO 8601 form                     |
| AI transcription is human-reviewed                       | `ai-processing-options.md` keeps `aiTranscriptionLocal: true` but logs required per call |
| Uncertain markers `[?]` are followed by human review     | `schemas-validation-summary.md` counts `uncertainMarkers`                               |
| Verbatim audit before Level 3                            | `sensitive-content-review.md` § "Verbatim audit"                                       |
| Redaction is the 6-step cycle, not just a deletion       | `sensitive-content-review.md` § 3                                                       |

## 13. Validator evidence

### 13.1 Governance validator

```
$ node scripts/validate-oral-history-governance.mjs
... 32 files under docs/oral-history/
checks: 48
errors: 0
RESULT: PASS — governance kit is structurally complete and clean.
```

### 13.2 Fixture validator (positive)

```
$ node fixtures/synthetic-oh-2026-900/validate-fixture.mjs
checks=17  errors=0
PASS: OH-2026-900 synthetic dry-run fixture is structurally consistent.
```

### 13.3 Fixture validator (negative, in a /tmp copy)

A copy of the fixture was corrupted with four deliberate breaks:

1. `voiceCloningConsented` / `modelTrainingConsented` / `aiSummaryCloud` / `aiNamedEntityExtraction` all flipped to `true`.
2. `interview-project.json` `status` set to a non-enum value.
3. `interview-session.json` injected with invalid JSON.
4. `withdrawal-request.md` unhooked from `publication-approval.md`'s `decisionId`.

Result:

```
checks=15  errors=10
FAIL: 10 error(s) in fixture validator.
exit=1
```

The validator **does not** over-permissively pass on a broken fixture, nor does it under-report when a negative test should fail.

## 14. Site regression

`site/` was **not** modified by V0.4A. The mandated regression was run:

```
$ npm ci                   → added 360 packages in 4s
$ npm run validate:stories → 1 story, 7 segments, 13 words total — PASS
$ npm run check            → 0 errors / 0 warnings / 0 hints (10 files)
$ npm run build            → 10 page(s) built in 1.55s
```

`git diff -- site/` returned an empty diff before the report commit.

## 15. Sensitive-content scan

| Check                                                                 | Result          |
| --------------------------------------------------------------------- | --------------- |
| Media files (`*.mp3`/`*.wav`/`*.mp4`/`*.m4a`/`*.mov`/`*.flac`)        | **none**        |
| China ID-like 18-digit numbers                                        | **none**        |
| Chinese mobile phone pattern (`1[3-9]x{9}`)                           | **none**        |
| Email addresses                                                       | **none**        |
| API keys (`Bearer`/`sk-`/`api_key=`)                                  | **none**        |
| Real family-relationship strings (`我的妈妈`/`我爸`/`我妈`)             | **none**        |
| Filled consent signatures                                             | **none**        |
| Windows paths leaking out of policy text                              | **none** (only policy docs reference `C:\` as a forbidden example) |

15 placeholder hits (`[讲述者化名]` / `[联系方式]` / `[相对化名 N]`) are expected by design.

## 16. Decision for V0.4B

1. **Can we now run a real operator self-interview?** **Yes, with caveats.** The V0.3 kit + V0.4A fixture prove the workflow is operator-drivable.

2. **What must the user manually review before V0.4B starts?**
   - `participant-information-sheet` template
   - `consent-record` template (the full sub-scope set)
   - `ai-processing-options` template (in particular the cloud-AI + voice-cloning + training fields)
   - `withdrawal-or-change-request` template
   - `publication-approval` template (the three sign-offs)
   - The four historical files are **not** to be touched.
   - `archive/2015/README.original.md` + `archive/2015/manifest.sha256` are **not** to be touched.

3. **What must never be decided by the Agent on the narrator's behalf?**
   - The real public display name / pseudonym / anonymisation level.
   - Whether cloud AI summary is permitted (default = deny).
   - Whether to publish audio at Level 3 (default = no for V0.4B).
   - Whether the search-engine indexing flag is on.
   - Any AI training / voice-cloning consent (default = deny).
   - Withdrawal calls — only the narrator can issue one.

4. **Do we need legal counsel?** **Not for V0.4B** if the operator is the only narrator and the output is, by default, **never published**. We should consult counsel before (a) recording minors, (b) recording anyone with diminished decision-making capacity, or (c) making any Level-3 publication with audio from people other than the operator.

5. **What must never reach public Git?**
   - Any Level-0 artefact (raw audio, sealed consent scans, raw transcripts of real people).
   - Real names / phones / emails / addresses / IDs.
   - Filled consent signatures.

6. **Should we do a self-interview dry run first?** **Yes — that is V0.4B itself.** It must be:
   - Single narrator (the operator).
   - No third-party privacy.
   - Default **not** published (sit at Level 1 + a `publication-approval.md` row marked `withdrawn` for safety).
   - Real audio either captured-and-deleted-after-QC, or kept at Level 0 outside git.

7. **Astro static architecture still applicable?** **Yes** — Astro is still correct for the eventual Level-3 release path. The fixture deliberately skipped the Astro publish step so that the kit's value does not depend on any specific CMS or backend.

8. **When do we need a database / private backend?** Only after we have:
   - Multiple active real projects (not just this fixture).
   - Multiple people collaborating on a project.
   - Withdrawal handling that requires audit history beyond a single `git revert`.

9. **Recommended conclusion for V0.4B start:**
   - Run one operator-only self-interview using the exact fixture as a model.
   - Use placeholder public name + (optionally) pseudonym; let the operator choose.
   - Default to cloud-AI deny + voice-cloning deny + model-training deny.
   - Use `OH-2026-001` as the new project code (the first non-synthetic).
   - Skip Astro publish; mark `publication-approval.md` `decision: withdrawn` for safety.
   - Update `docs/oral-history/04-withdrawal-and-change-requests.md` § 4.7 if V0.4B surfaces a real-world anchor for "reverse trace works without an existing page".

## 17. Linkage to V0.3 governance kit

V0.4A **adds** to the V0.3 kit without modifying its core commitments:

- New: `fixtures/synthetic-oh-2026-900/` (the dry-run payload).
- New: `scripts/validate-oral-history-governance.mjs` (unchanged from V0.3).
- Patched: `docs/oral-history/04-withdrawal-and-change-requests.md` adds § 4.7 "反向追溯在 fixture-only 项目上的适用性" — a one-paragraph amendment justified by this fixture's reverse-trace exercise.
- Patched: `README.md` (minimum V0.4A status update — timeline + Roadmap + Research list).

V0.4A does **not** alter any of the following:

- The 15 numbered governance documents under `docs/oral-history/`.
- The 11 templates under `docs/oral-history/templates/`.
- The 5 JSON Schemas under `docs/oral-history/schemas/`.
- `.github/workflows/pages.yml`.
- `site/` (verified empty `git diff`).
- `site/src/content/stories/isadore-first-tomato.md` / `site/src/data/stories/isadore-first-tomato.segments.json` (verified SHA unchanged).
- `archive/2015/README.original.md` (verified BYTE-EQUAL).
- `archive/2015/manifest.sha256` (verified SHA unchanged).
- The four 2015 original documents (verified 4/4 MATCH).

## 18. Audit trail (commits + workflow runs in V0.4A)

| Commit  | SHA                                       | Message                                                              |
| ------- | ----------------------------------------- | -------------------------------------------------------------------- |
| F1      | `4b672800add7b7c5e31311848a5a7f0c0ecafd06` | `feat: add V0.4A synthetic oral-history dry-run fixture (OH-2026-900)` |
| F2      | `af6a48edafa1cc00cd0dc1c4ba4d4f24a52dbcd0` | `docs: record V0.4A synthetic dry-run review`                            |

Pages workflow runs triggered by these commits:

| Run ID        | Head commit                               | Conclusion |
| ------------- | ----------------------------------------- | ---------- |
| `29139219477` | `4b672800add7b7c5e31311848a5a7f0c0ecafd06` | success    |
| (F2 run)      | `af6a48edafa1cc00cd0dc1c4ba4d4f24a52dbcd0` | success    |

## 19. Final terminal checklist

| Item                                  | Verified at end of V0.4A                              |
| ------------------------------------- | ----------------------------------------------------- |
| local HEAD = origin/master = remote   | `af6a48edafa1cc00cd0dc1c4ba4d4f24a52dbcd0`            |
| Branch                                | `master`                                              |
| Working tree                          | clean                                                 |
| Default branch                        | `master`                                              |
| Tags                                  | `[]`                                                  |
| Issues                                | `[]`                                                  |
| `gh-pages` branch                     | not present                                           |
| 4/4 historical files MATCH            | confirmed                                             |
| Archived README BYTE-EQUAL            | confirmed                                             |
| `manifest.sha256` unchanged           | `3b502a6e0ded88e8`                                    |
| `pages.yml` unchanged                 | `221e7963e59d0186`                                    |
| `astro.config.mjs` unchanged          | `f0977deddcde2e50`                                    |
| Isadore story unchanged               | `53bcea2a0cc54aef`                                    |
| Segments JSON unchanged               | `b7eb86e238574ad8`                                    |
| `site/` diff vs HEAD                  | empty                                                 |
| Astro `validate:stories`              | PASS (1 story / 7 segments / 13 words)                |
| Astro `check`                         | 0 errors / 0 warnings / 0 hints                       |
| Astro `build`                         | PASS, 10 pages                                        |
| Pages workflow after F1               | `29139219477` success                                 |
| Pages workflow after F2               | success                                               |
| Online 4/4 routes 200                 | `/` / `/stories/` / `/stories/isadore-first-tomato/` / `/seeds/memory/` |
| Governance validator                  | PASS (docs=16 templates=11 schemas=5 checks=48 errors=0) |
| Fixture validator positive            | PASS (checks=17 errors=0)                             |
| Fixture validator negative            | FAIL exit=1 (10 errors detected)                       |
| Media files in repo                   | none                                                  |
| Real personal data in repo            | none                                                  |
| Real consent signatures in repo       | none                                                  |

## 20. Recommended next step (V0.4B)

`OH-2026-001` operator self-interview dry run — the same workflow as `OH-2026-900`, but with the operator as the real narrator, no third-party privacy, all AI cloud options denied by default, no Astro publish, and a final `publication-decision.decision = withdrawn` for safety.

After V0.4B passes, the next phase (V0.5) is to consider inviting one trusted family member to a single short recorded session, only after human legal review of the final `consent-record.md`.
