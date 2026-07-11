# Narrator Review — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

The narrator review has **three layers**, matching `docs/oral-history/12-narrator-review.md`. Each layer is a separate check.

## Review A — Factual correction (Level 1 → Level 2 gate)

| Question                                                                                                | Narrator answer (placeholder) |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Are the places, dates, file names, commit SHAs, and external URLs in this draft **factually correct**?  | `[ √ 是 / □ 否，请说明 ]`     |
| Are the paraphrases in `transcript-edited.md` a fair representation of what was said?                    | `[ √ 是 / □ 否，请说明 ]`     |
| Are all third-party mentions either absent or replaced with `[相对化名 N]`?                              | `[ √ 是 / □ 否，请说明 ]`     |
| Are all sensitive categories from `sensitive-content-review.md` § 1 either absent or fully redacted?     | `[ √ 是 / □ 否，请说明 ]`     |

## Review B — Public-boundary correction (Level 2 → Level 2 release-candidate gate)

| Question                                                                                                | Narrator answer (placeholder) |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Do the public-display choices in `consent-record.md` § 4 still match what I want published?             | `[ √ 是 / □ 否 ]`             |
| Are the publication-venue choices in `consent-record.md` § 5 still what I want published?              | `[ √ 是 / □ 否 ]`             |
| Are the AI-processing audit expectations in `ai-processing-options.md` consistent with what I want?      | `[ √ 是 / □ 否 ]`             |
| Are the time-limit fields (`consentValidUntil`, `reviewIntervalMonths`) still appropriate?              | `[ √ 是 / □ 否 ]`             |

## Review C — Final pre-publication sign-off (Gate 5 → Astro publish)

| Question                                                                                                | Narrator answer (placeholder) |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| I have read the final Astro page text, the public-safe paraphrase, and the title.                      | `[ √ 是 / □ 否 ]`             |
| The audio (if any) at the public level matches the audio option I chose.                                | `[ √ 是 / □ 否 ]`             |
| The release date and the indexable / corpora flags match my choices.                                    | `[ √ 是 / □ 否 ]`             |
| I approve this exact text for publication under the chosen venues.                                      | `[ √ 是 / □ 否 ]`             |
| I understand re-publication requires another Review C.                                                   | `[ √ 已知 / □ 请说明 ]`       |

## Sign-off (placeholder only)

- Narrator signature: `[手写签名扫描或电子签名留空 — 占位]`
- Date of sign-off: `[YYYY-MM-DD]`
- Next step: `publication-approval.md`
