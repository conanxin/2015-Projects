# Edited Transcript — OH-2026-900 Session #1 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file is the **published-candidate Level-2 version** of `transcript-raw.md`. For the dry run, it contains only the **shape** of the artefact, never real text. Every line below is a placeholder until a real V0.4B dry run completes.

## 1. Schema fields

This transcript references `transcript-edited.schema.json` (extension of `interview-session.schema.json`). Fields used in this fixture:

| Schema field         | Value (placeholder)                                       |
| -------------------- | --------------------------------------------------------- |
| `transcriptId`       | `OH-2026-900-T01-edited`                                  |
| `sourceSessionId`    | `OH-2026-900-S001`                                        |
| `redactionCount`     | `[NN]`                                                    |
| `uncertainMarkers`   | `[NN]`                                                    |
| `reviewStatus`       | `awaiting narrator review`                                |
| `approvedByNarrator` | `false`                                                   |

## 2. Body (placeholder text — must remain empty)

```
[Timecode placeholder]  [Speaker: N]  [≤ 1 sentence public-safe paraphrase]
[Timecode placeholder]  [Speaker: I]  [≤ 1 sentence follow-up]
```

A real V0.4B draft would paraphrase, never quote verbatim, until Gate 4 explicitly authorises verbatim quoting.

## 3. Shape rules (to be tested against `10-transcription-and-timecodes.md`)

- Maximum line length: `[NN chars per line — 占位]`.
- Maximum words per public-safe paraphrase: `[60 — 占位]`.
- Number of `[?]` markers must equal `uncertainMarkers` above.
- Timecodes are HH:MM:SS.mmm UTC ISO 8601 — not elapsed seconds.

## 4. Why paraphrases not quotes

The public release path (`13-publication-gates.md`) defaults to **paraphrase** unless the narrator explicitly authorises verbatim. This protects against accidental re-identification of third parties and against voice-mimicry attacks.
