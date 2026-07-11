# Public Release Checklist — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file is a 1:1 copy of `docs/oral-history/templates/public-release-checklist.md`, ticked only where truly applicable to a Level-2 synthetic fixture. The publish step itself is **skipped**.

| # | Check                                                                                                                            | Required    | Tick (placeholder) |
| - | -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| 1 | Project metadata (`project-charter.md`) complete                                                                                | required    | `[ √ ]`            |
| 2 | Participant information sheet reviewed                                                                                          | required    | `[ √ ]`            |
| 3 | Modular consent (`consent-record.md`) complete & valid against `participant-consent.schema.json`                              | required    | `[ √ ]`            |
| 4 | AI processing options (`ai-processing-options.md`) reflect consent                                                              | required    | `[ √ ]`            |
| 5 | Boundaries (`interview-boundaries.md`) respected                                                                                 | required    | `[ √ ]`            |
| 6 | All session logs (`interview-session-log.md`) saved                                                                             | required    | `[ √ ]`            |
| 7 | Raw + edited transcripts saved & timecode-correct                                                                                | required    | `[ √ ]`            |
| 8 | `sensitive-content-review.md` completed                                                                                          | required    | `[ √ ]`            |
| 9 | `redaction-log.md` matches `sensitive-content-review.md`                                                                       | required    | `[ √ ]`            |
| 10 | Narrator Review A (factual) + B (public-boundary) ticked                                                                       | required    | `[ √ ]`            |
| 11 | Narrator Review C (final) ticked by narrator                                                                                    | required    | `[ □ — skipped by design in this dry run ]` |
| 12 | `publication-approval.md` mirrors `publication-decision.schema.json`                                                            | required    | `[ √ ]`            |
| 13 | Status field equals one of the 10 enum values                                                                                   | required    | `[ √ — status = planned → ... → approved-public on paper ]` |
| 14 | `04-withdrawal-and-change-requests.md` flow tested via `withdrawal-request.md`                                                  | required    | `[ √ ]`            |
| 15 | No real audio / video / photo in the public repo                                                                                 | hard-block  | `[ √ ]`            |
| 16 | No real names / phones / emails / addresses / IDs in the public repo                                                            | hard-block  | `[ √ ]`            |
| 17 | No real signatures in the public repo                                                                                           | hard-block  | `[ √ ]`            |

## Block level

- All **required** rows in this fixture are ticked because they are *template-shape* checks against the dry-run material.
- All **hard-block** rows are also ticked because no real personal material exists.
- The **publish step itself** is intentionally skipped; that is the entire point of "dry run" in `OH-2026-900`.
