# Publication Approval — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file uses the **`publication-decision.schema.json`** fields from `docs/oral-history/schemas/`.

| Field                       | Value (placeholder)                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `decisionId`                | `OH-2026-900-PUB-01`                                                                 |
| `relatedProjectCode`        | `OH-2026-900`                                                                        |
| `relatedSessionIds`         | `["OH-2026-900-S001"]`                                                               |
| `decidedBy`                 | `[OP-self]` (in real V0.4B+ projects: narrator code; here: synthetic placeholder)    |
| `decision`                  | `approved-public (on paper) — but **the publish step is explicitly skipped**`         |
| `decidedAt`                 | `[YYYY-MM-DDTHH:MM:SSZ]`                                                             |
| `approvedByNarrator`        | `false` (Review C not yet ticked; the dry run stops before that)                    |
| `editorVerified`            | `false`                                                                              |
| `version`                   | `v[NN]`                                                                              |
| `venuesApproved`            | `[]` (intentionally empty; publish skip)                                            |
| `searchEngineIndexable`     | `false` (always default in this dry run; explicit later)                            |
| `aiCorporaIndexable`        | `false` (always default in this dry run; explicit later)                            |
| `audioPubliclyReleased`     | `false` (matches the dry-run boundary: no audio)                                    |
| `fullTranscriptPublic`      | `false`                                                                              |
| `expiryAt`                  | `[YYYY-MM-DD or indefinite — placeholder]`                                           |
| `notes`                     | Placeholder only; do not publish from this fixture.                                  |

## What this fixture's Gate 5 actually triggers

This fixture advances to **Gate 5 on paper** so the gate-traceability table is populated, **but the Astro publish step itself is skipped**. The publication URL `https://conanxin.github.io/2015-Projects/stories/...` is **not** generated for `OH-2026-900`.

If V0.4B ever decides to publish the real operator self-interview, it must come from a **new project code** (`OH-2026-001+`), not from this fixture, and must pass a fresh Gate 5 with `approvedByNarrator: true`.
