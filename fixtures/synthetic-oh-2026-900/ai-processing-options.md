# AI Processing Options — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file is a 1:1 mirror of `docs/oral-history/templates/ai-processing-options.md`, filled with placeholder values so we can verify the template can actually be filled. Each option's default state is **denied unless the narrator explicitly says yes**.

## Decision matrix

| # | Option                                                                                  | Default | Allowed levels                              | Schema field                 |
| - | --------------------------------------------------------------------------------------- | ------- | ------------------------------------------- | ---------------------------- |
| 1 | Local-only AI transcription (e.g. whisper.cpp, faster-whisper)                          | allowed | L0 → L1                                     | `aiTranscriptionLocal`       |
| 2 | Local-only AI timecode / closed caption generation                                       | allowed | L0 → L1                                     | `aiTimecodeLocal`            |
| 3 | Local-only AI summary                                                                  | allowed | L1 → L2                                     | `aiSummaryLocal`             |
| 4 | Cloud AI summary (e.g. MiniMax-M3, Anthropic, OpenAI)                                   | denied  | L1 only with explicit consent + log         | `aiSummaryCloud`             |
| 5 | Cloud AI named-entity extraction                                                        | denied  | L1 only with explicit consent + log         | `aiNamedEntityExtraction`    |
| 6 | Local-only machine translation                                                          | allowed | L1 → L2                                     | `aiTranslationLocal`         |
| 7 | Voice cloning of narrator's voice for synthetic speech                                   | denied  | NEVER without explicit consent + audit log | `voiceCloningConsented`      |
| 8 | Training of any speech, text, or multimodal model on this material                      | denied  | NEVER without explicit consent + audit log  | `modelTrainingConsented`    |

## For each option the narrator was asked, the answer in this dry run is

| #  | Narrator chose (placeholder)                                                            |
| -- | --------------------------------------------------------------------------------------- |
| 1  | `[ √ 允许 / □ 拒绝 ]`                                                                  |
| 2  | `[ √ 允许 / □ 拒绝 ]`                                                                  |
| 3  | `[ √ 允许 / □ 拒绝 ]`                                                                  |
| 4  | `[ □ 拒绝 (default) / √ 允许 ]` — if allowed, must list model + prompt + audit reason  |
| 5  | `[ □ 拒绝 (default) / √ 允许 ]` — if allowed, must list model + prompt + audit reason  |
| 6  | `[ √ 允许 / □ 拒绝 ]`                                                                  |
| 7  | `[ □ 拒绝 (default) / √ 允许 ]`                                                        |
| 8  | `[ □ 拒绝 (default) / √ 允许 ]`                                                        |

## Audit log fields required whenever option #4 / #5 / #7 / #8 is `allowed`

When a cloud AI option or a training/voice-cloning option is enabled, the **`ai-processing-audit-log.schema.json`** field set must be filled **per call**:

- `timestamp` (ISO 8601 UTC)
- `tool` (e.g. `MiniMax-M3 / cloud-summary`)
- `modelVersion` (e.g. the literal model string from the API)
- `inputLevel` (`L0` | `L1`)
- `outputLevel` (`L1` | `L2`)
- `promptHash` (sha256 of the system+user prompts)
- `redactionApplied` (`true` | `false`)
- `operatorInitials` (placeholder: `[OP]`)

These audit rows are stored at Level 1 (`oral-history-working/OH-2026-900/ai-audit/`). They are **never** published at Level 3 unless the narrator explicitly consents to a release form that includes them.
