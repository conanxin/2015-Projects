# Redaction Log — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

| # | Timecode (UTC) | Speaker turn id | Trigger category                                            | Original token (placeholder)   | Replacement token (placeholder) | Reason                                                                     |
| - | -------------- | --------------- | ----------------------------------------------------------- | ------------------------------ | ------------------------------ | -------------------------------------------------------------------------- |
| 1 | `[HH:MM:SS.mmm]` | `[N-Turn-NN]`   | Third-party named individual                                | `[真名占位]`                  | `[相对化名 1]`                  | Per `interview-boundaries.md` § 1                                          |
| 2 | `[HH:MM:SS.mmm]` | `[N-Turn-NN]`   | Precise phone / email / address / ID                        | `[手机占位]`                  | `[联系方式]`                     | Per `11-sensitive-content-and-redaction.md` § "Verbatim audit"             |

(Every row in the real V0.4B+ log will follow the same 6-column shape: timecode, turn id, category, original token, replacement, reason. This fixture intentionally does **not** put any real or identifiable token in any row.)

## Process guarantees

1. No row in the log may contain a real name, real phone, real email, real ID, or real address — verification at Gate 4 (narrator review).
2. The log is append-only: every correction is a new row that references the corrected row number.
3. The log itself lives at Level 1 (`oral-history-working/OH-2026-900/redaction-log.md`) in real projects. This Level-2 fixture is a placeholder shape only.
