# Interview Session Log — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file uses the **interview-session.schema.json** (`docs/oral-history/schemas/interview-session.schema.json`). Each session has one session-id and one status enum value.

## Session #1

| Field                       | Value (placeholder)                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| sessionId                   | `OH-2026-900-S001`                                                                                   |
| narratorCode                | `SYNTHETIC-NARRATOR-001`                                                                             |
| interviewerCode             | `[OP-self]` (placeholder; in real dry runs this is the operator's own short code)                  |
| startedAt                   | `[YYYY-MM-DDTHH:MM:SSZ]`                                                                             |
| endedAt                     | `[YYYY-MM-DDTHH:MM:SSZ]`                                                                             |
| durationMinutes             | `[NN]`                                                                                               |
| medium                      | `text-only` (no real audio for this dry run)                                                          |
| rawRecordingLocation        | `oral-history-private/OH-2026-900/raw/` (placeholder; **must not exist in the public repo**)         |
| audioCaptured               | `false` (synthetic dry run; explicitly no real audio)                                                |
| transcriptRawLocation       | `oral-history-working/OH-2026-900/transcript-raw.md` (placeholder; **must not exist in this repo**) |
| transcriptEditedLocation    | `fixtures/synthetic-oh-2026-900/transcript-edited.md` (this file in the public repo, synthetic only) |
| emotionallyDifficultTopics  | `[]` (in real sessions: list of topics + pause timestamps; here intentionally empty)                  |
| technicalIssues             | `[无 / 描述 — 占位]`                                                                                  |
| consentChangedDuringSession | `false` (in this dry run; the change-request flow is exercised separately in `withdrawal-request.md`) |
| status (enum)               | `transcribing`                                                                                        |

## Session #2 (planned, not yet executed in this dry run)

| Field                       | Value (placeholder)                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| sessionId                   | `OH-2026-900-S002`                                                                                   |
| status                      | `planned`                                                                                            |
| scheduledFor                | `[YYYY-MM-DD]`                                                                                       |
| plannedModules              | `[redaction calibration, narrator-review rehearsal]` (placeholder list)                              |
| purpose                     | Verify the post-transcription gates (12 Narrator Review; 13 Publication Gates) end-to-end before V0.4B. |

## Cross-session notes

- No real names: confirmed empty by the dry-run checklist.
- No third-party privacy content: confirmed empty by `sensitive-content-review.md`.
- Every change of mind during the session must be captured as a `withdrawal-or-change-request.md` row even if the change is minor.
