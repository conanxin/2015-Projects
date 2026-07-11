# Sensitive Content Review — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file mirrors `docs/oral-history/11-sensitive-content-and-redaction.md`. It is the bridge between `transcript-edited.md` and `narrator-review-form.md`.

## 1. Sensitive categories inventory

| Category                                                          | Present in this fixture? | Action taken                                            |
| ----------------------------------------------------------------- | ------------------------ | ------------------------------------------------------- |
| Third-party named individual                                       | `no` (placeholder only)  | n/a (would re-identify third parties)                  |
| Precise location, address, phone, email, or ID                    | `no` (placeholder only)  | n/a (would disclose contact)                           |
| Medical detail about a living person                              | `no`                     | n/a                                                     |
| Sexual orientation, gender identity, religion, political affiliation | `no`                  | n/a                                                     |
| Minor's name or image                                             | `no`                     | n/a                                                     |
| Currently-litigated dispute                                       | `no`                     | n/a                                                     |
| Workplace NDA / non-disparagement content                         | `no`                     | n/a                                                     |
| Distress / suicidal / self-harm content                           | `no`                     | n/a (would trigger pause & defer-to-witness)            |

## 2. Verbatim audit

The fixture deliberately uses a single paraphrase-pattern placeholder, no verbatim sentence. If the dry run later produces a real V0.4B draft with quoted material, the rules are:

- Verbatim quoting requires an explicit field in `consent-record.md` § 5 (`fullTranscriptPublic`).
- Each verbatim quote is checked against the related `redaction-log.md` row.
- Verbatim quotes that mention third parties even indirectly are not allowed at Level 3.

## 3. What "redaction" really means (mirror of policy `11`)

Redaction is **not** "delete the name". It is the substitution cycle:

1. Detect — find a sensitive token in the transcript.
2. Classify — which category from the table above.
3. Replace — substitute `[相对化名 N]`, `[联系方式]`, `[日期]`, `[住址]`, etc.
4. Log — record before/after in `redaction-log.md`.
5. Verify — cross-check with `interview-boundaries.md`.
6. Sign-off — narrator signature in `narrator-review-form.md`.

## 4. AI-assisted detection caveat

The fixture's `ai-processing-options.md` keeps `aiNamedEntityExtraction` (cloud) at default `denied`. The operator may run a local-only NER pass (`aiTimecodeLocal` or a local regex pre-check) but the canonical redactor is a human reviewing the placed markers.
