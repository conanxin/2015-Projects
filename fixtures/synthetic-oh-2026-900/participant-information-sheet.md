# Participant Information Sheet — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**
>
> This is a V0.3 governance kit **template** populated only with placeholder values such as `[讲述者化名]` / `[联系方式]` / `[日期]`. It is not a real consent record. It exists to verify the template can be filled.

## 1. Project

- Project code: `OH-2026-900`
- Topic: 2015 Projects Reborn 演进自我访谈演练
- Type: Operator self-interview dry run

## 2. Narrator (placeholder only)

- Narrator code: `SYNTHETIC-NARRATOR-001`
- Public display name: `[讲述者化名]` (placeholder)
- Pronouns: `[代词]` (placeholder)
- Preferred language: 中文 (zh)
- Contact (private storage only, NEVER enter public Git): `[联系方式：邮箱/手机/IM]` (placeholder)

## 3. What this sheet explains (to be discussed before consent)

- Who is recording and for what purpose.
- What will happen to the recording, transcripts, and derived text.
- Which AI tools may or may not be used on the recording (see `ai-processing-options.md`).
- That consent is modular — narrators can refuse or change each processing option independently.
- That withdrawal is always possible, with three pre-defined severities.
- That nothing will be published until Gate 5 is explicitly approved by the narrator.

## 4. Storage plan (Level 0–3, see `08-data-classification-and-storage.md`)

| Layer | What lives here                                                                | Where                                                   |
| ----- | ------------------------------------------------------------------------------ | ------------------------------------------------------- |
| 0     | Raw recording, raw audio, device-local exports, sealed consent scans          | Local-only: `oral-history-private/OH-2026-900/`        |
| 1     | Working transcripts, draft chapters, narrator-review drafts                   | Local-only: `oral-history-working/OH-2026-900/`        |
| 2     | Approved-for-release but not yet published text, decisions, timecodes         | This `fixtures/synthetic-oh-2026-900/` directory       |
| 3     | Published online, e.g. Astro `/stories/...` page (skipped in this dry run)    | Would live under `site/src/content/stories/` (skipped)  |

## 5. Risks the narrator was informed of

- Even at Level 3, true deletion from the open web is hard; caches and archives may exist.
- Voice cloning and language-model training require **separate, opt-in** consent (see `ai-processing-options.md`) and default to **denied**.
- Third-party privacy: the interviewer must redact names of people not in the project before Gate 5.

## 6. Decision recorded on this sheet (placeholder)

- The narrator has read this sheet: `[√ 是 / □ 否 — 待勾选]`
- Date of explanation: `[YYYY-MM-DD]`
- Next step: `consent-record.md`
