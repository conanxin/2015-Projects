# Gate Traceability — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This table is a per-gate trace of the V0.3 governance kit, written only against the synthetic `OH-2026-900` dry run. It is the **single evidence** that the gate definitions in `docs/oral-history/13-publication-gates.md` are operational, not aspirational.

| Gate | Gate definition (1 line)                                                          | Required artefact(s)                                             | Status in this dry run    | Evidence in repo                              |
| ---- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------- | --------------------------------------------- |
| 0    | Project exists in `planned` state, charter drafted, no third-party privacy yet      | `project-charter.md`                                             | `reached`                 | `project-charter.md`                          |
| 1    | Modular consent signed, AI options made, private storage ready                     | `participant-information-sheet.md`, `consent-record.md`, `ai-processing-options.md` | `reached`                 | three matching files in this fixture          |
| 2    | Boundary briefing done, session logged before recording start                      | `interview-boundaries.md`, `interview-session-log.md` (S001 row) | `reached`                 | both files in this fixture                    |
| 3    | Recording captured & preserved at Level 0                                            | (skipped in dry run — `audioCaptured=false` in `interview-session-log.md`) | `not-applicable (synthetic)` | explicit placeholder in session log        |
| 4    | Raw transcript at Level 1; AI processing audit log appended if used                 | `transcript-raw.md`                                              | `reached (skeleton)`      | `transcript-raw.md` (no real text by design)  |
| 5    | Edited transcript at Level 2; sensitive-content & redaction log complete           | `transcript-edited.md`, `sensitive-content-review.md`, `redaction-log.md` | `reached (skeleton)`      | three matching files in this fixture          |
| 6    | Narrator Review A (factual) + B (public-boundary) approved                         | `narrator-review-form.md` Review A+B rows                        | `reached`                 | `narrator-review-form.md`                     |
| 7    | Narrator Review C (final) approved                                                  | `narrator-review-form.md` Review C row                            | `skipped by design`       | unchecked row in `narrator-review-form.md`    |
| 8    | `publication-approval.md` mirrors `publication-decision.schema.json`; status `approved-public` (or `approved-private` / `embargoed`) | `publication-approval.md`                                       | `reached (on paper)`      | `publication-approval.md`                     |
| 9    | Public release checklist fully ticked; Astro publish step run                      | `public-release-checklist.md`, `site/src/content/stories/...` entry | `skipped by design`       | checklist rows ticked, no Astro publish       |
| 10   | (Withdrawable) Reverse path traceable back from any public release                 | `withdrawal-request.md` W01                                      | `reached (on paper)`      | `withdrawal-request.md` reverses a paper-only approval without an existing Astro page |
| 11   | (Change-of-options) AI / venue / identity flags can be updated without a new project | `withdrawal-request.md` W02                                      | `reached`                 | `withdrawal-request.md` W02 retroactively disallows `aiTranslationLocal` |

> Note on numbering: this trace uses 0..11 to mirror both the V0.3 policy `13-publication-gates.md` (six forward gates 0–5) and the additional reverse/change gates exercised here (W01, W02). The schema's 10-enum `status` field is sufficient to express every reachable state in this trace without inventing new fields.

## Observations for V0.4B

1. **Forward gates** (`planned → approved-public`) cover Gate 0–5 plus two pre-publication reviews. No contradictions found.
2. **Reverse path** from `approved-public` → `withdrawn` is **traceable** even without a real public page, because the trace lives in markdown, not in the Astro site.
3. **Change-of-options** can be expressed as a `withdrawalRequest` whose `requestType` is `change-options`, again without inventing fields.
4. The Gate-4 audit ("AI processing audit log") is **only triggered** in real projects; this dry run skips it because no AI processing was actually performed.
5. The narrator-review three-layer (A/B/C) does not over-constrain small projects: Review A and B can be combined for projects with a single narrator; only Review C remains a separate final step.

## Open questions surfaced for V0.4B

- Do we need a Gate "6" for "**never to be published**" (a permanent `closed` status)? Schema's `closed` covers it; but a policy paragraph in `13-publication-gates.md` may want to cite the option explicitly.
- The publish step is technically external to the governance kit (it is the Astro site). Should `13-publication-gates.md` add a one-paragraph "publish executor checklist" pointing at `site/scripts/validate-story-data.mjs`?
- Withdrawal events currently require a manual hand-edit. We could add a `withdrawal-decision.schema.json` later, mirroring `publication-decision.schema.json`. Out of scope for V0.4B.
