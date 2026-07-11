# Consent Record — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**
>
> This file is a V0.3 template populated with placeholder values. It is **not** a real consent record. The placeholder signature block at the bottom must remain empty unless a future V0.4B+ project requires it (and only after the V0.4B report covers signature storage).

This record is **modular**: the narrator can consent to, refuse, or later change any sub-scope independently. Each sub-scope references its own schema field from `participant-consent.schema.json`.

## 0. Project identifier & narrator

- Project code: `OH-2026-900`
- Narrator code: `SYNTHETIC-NARRATOR-001`
- Public display name (optional placeholder): `[讲述者化名]`
- Storage location of this record (when real): `oral-history-private/consent-records/OH-2026-900_consent_v[NN]_[YYYY-MM-DD].md`

## 1. Sub-scope A — Interview itself

| Question                                                                                                  | Answer (placeholder) | Schema field                          |
| --------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------- |
| I consent to be interviewed about the topic in `project-charter.md`.                                     | `[ √ 是 / □ 否 ]`    | `interviewConsented`                  |
| I understand the recording will be stored at Level 0 (private) and only Level 2+ will be discussed for publication. | `[ √ 是 / □ 否 ]`    | `storageModelUnderstood`              |
| I understand I can pause or stop at any time without giving reasons.                                      | `[ √ 是 / □ 否 ]`    | `pauseOrStopUnderstood`               |
| I understand the interviewer will follow the topics in `interview-boundaries.md`.                         | `[ √ 是 / □ 否 ]`    | `boundariesUnderstood`                |

## 2. Sub-scope B — Processing (AI / transcription / translation)

Each line maps to one field of `ai-processing-options.md` and to one matching field of `participant-consent.schema.json`.

| Processing option                                    | Default    | Narrator chose                  | Schema field                       |
| ---------------------------------------------------- | ---------- | ------------------------------- | ---------------------------------- |
| AI transcription (local-only, e.g. whisper.cpp)      | allowed    | `[ √ 允许 / □ 拒绝 ]`           | `aiTranscriptionLocal`             |
| AI-assisted closed caption / timecode (local-only)   | allowed    | `[ √ 允许 / □ 拒绝 ]`           | `aiTimecodeLocal`                  |
| AI-generated summary (local-only)                    | allowed    | `[ √ 允许 / □ 拒绝 ]`           | `aiSummaryLocal`                   |
| AI-generated summary via cloud API (e.g. MiniMax-M3) | denied     | `[ □ 拒绝 (default) / √ 允许 ]`| `aiSummaryCloud`                   |
| AI named-entity extraction (cloud)                   | denied     | `[ □ 拒绝 (default) / √ 允许 ]`| `aiNamedEntityExtraction`         |
| Machine translation (local-only)                     | allowed    | `[ √ 允许 / □ 拒绝 ]`           | `aiTranslationLocal`               |

## 3. Sub-scope C — Voice cloning & model training (both default to **denied**)

| Option                                                          | Default | Schema field                |
| --------------------------------------------------------------- | ------- | --------------------------- |
| Voice cloning of narrator's voice for synthetic speech outputs  | denied  | `voiceCloningConsented`     |
| Use of narrator's words / audio to train a speech or text model | denied  | `modelTrainingConsented`    |

Both fields must be **explicitly** set to `true` (by an affirmative tick) before any such use. The default behaviour of every system is **deny**.

## 4. Sub-scope D — Identity (public presentation)

| Decision field                                                   | Narrator chose                                | Schema field           |
| ---------------------------------------------------------------- | --------------------------------------------- | ---------------------- |
| Public display name: real name, pseudonym, or initials only      | `[ 真名 / 化名 (default 占位) / 仅首字母 ]`  | `publicDisplayName`    |
| Pronouns to appear on the page                                   | `[代词]`                                       | `publicPronouns`       |
| Photo or avatar on the page                                      | `[ 不放 (default) / 占位图 ]`                 | `photoOrAvatar`        |

## 5. Sub-scope E — Public form & venue

| Decision field                                                   | Narrator chose                            | Schema field                |
| ---------------------------------------------------------------- | ----------------------------------------- | --------------------------- |
| Where may the public release appear? (this repo's site, third-party archive, both, neither) | `[ 仅本站 / 仅第三方 / 两者 / 暂不发布 ]` | `publicationVenues`         |
| May the public release be indexed by search engines?             | `[ √ 是 / □ 否 ]`                         | `searchEngineIndexable`     |
| May the public release appear in AI training corpora?            | `[ √ 是 / □ 否 (default) ]`              | `aiCorporaIndexable`        |
| May the public release include audio?                            | `[ √ 是 / □ 否 (default 占位) ]`         | `audioPubliclyReleased`     |
| May the public release include a verbatim full transcript?       | `[ √ 是 / □ 否 ]`                         | `fullTranscriptPublic`     |

## 6. Sub-scope F — Time limits

| Decision field                                                    | Narrator chose                       | Schema field                  |
| ----------------------------------------------------------------- | ------------------------------------ | ----------------------------- |
| Consent valid until (hard expiry)                                 | `[YYYY-MM-DD]` (or `indefinite`)     | `consentValidUntil`           |
| Review cadence (narrator check-in every X months)                 | `[6 / 12 / 24 / 自定义]`              | `reviewIntervalMonths`        |

## 7. Signature block (placeholder only — must stay empty in this fixture)

- Narrator signature: `[手写签名扫描或电子签名留空 — 占位]`
- Witness signature (if required by local law): `[手写签名扫描 — 占位]`
- Date: `[YYYY-MM-DD]`
- Place: `[城市, 国家]`

When a real V0.4B+ project requires a signature, the signed scan must live at Level 0 (`oral-history-private/consent-records/`). No real signature belongs in this repository.
