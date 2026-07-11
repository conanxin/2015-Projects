# Withdrawal / Change Request — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

This file exercises **`04-withdrawal-and-change-requests.md`** and **`withdrawal-request.schema.json`**. Two requests are simulated: one **withdrawal-of-published** (severity 3) and one **change-of-options** (severity 1). Both demonstrate that the workflow can reverse a public release back to a private embargo in principle — even though no Astro page exists for this fixture.

## Request 1 — Withdrawal of a published candidate

| Field                       | Value (placeholder)                                                          |
| --------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                 | `OH-2026-900-W01`                                                            |
| `requestType`               | `withdraw-published`                                                         |
| `requestedAt`               | `[YYYY-MM-DDTHH:MM:SSZ]`                                                     |
| `requestedBy`               | `[OP-self]` (placeholder; in real projects: narrator code)                   |
| `scope`                     | `publication-decision:OH-2026-900-PUB-01` (the synthetic "approved-public" entry) |
| `reasonCategory`            | `placeholder — synthetically simulate: re-evaluation of voice-cloning risk`  |
| `requiredByDate`            | `[YYYY-MM-DD]`                                                               |
| `withdrawalContactMethod`   | `[email / phone / in-person — 占位]`                                        |
| `decision`                  | `pending`                                                                    |

### Reverse trace (per policy `04`)

1. Identify all places where the candidate was "approved-public": `publication-approval.md` row only.
2. Because `approved-public` was on paper but the Astro publish step was skipped, the reverse trace is a no-op on the public site: `site/src/content/stories/` does **not** contain a page for `OH-2026-900`.
3. Update `publication-approval.md` `decision` field to `withdrawn` (no longer "approved-public").
4. Update the canonical status enum value via `publication-decision.schema.json` → `withdrawn`.
5. Append a new `gate-traceability-table.md` row: row `W01` → `Embargo → Withdrawn`.
6. Notify: in a real project, e-mail the operator + the editor on file; in this dry run, both roles resolve to `[OP-self]`.
7. Commit: in a real project, a `git revert` of the publish commit. Here, no publish commit exists, so the action is to revert `publication-approval.md` to its prior state (`approved-private` enum) and to log that the publish was never executed.

### What the policy `04` says the public repo should be able to do

- Add a tombstone page at the previous URL explaining the withdrawal, in the narrator's words.
- Provide an archived snapshot (for transparency research) under controlled access.
- Never silently delete a public release: even a withdrawal must leave a trace.

## Request 2 — Change of options mid-flow

| Field              | Value (placeholder)                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `requestId`        | `OH-2026-900-W02`                                                                            |
| `requestType`      | `change-options`                                                                              |
| `changeSummary`    | Disallow `aiTranslationLocal` retroactively for Session #1 outputs.                          |
| `appliesTo`        | `OH-2026-900-S001` outputs (Level 1)                                                         |
| `effectOnStatus`   | revert `aiTranslationLocal` outputs to "human-only translation" flag                          |
| `decision`         | `applied`                                                                                    |

This row demonstrates that a change-of-options is **additive** (a new audit row in `ai-processing-options.md` is preferred over silent deletion of the original decision) and does not require a public-revert. Cross-reference `gate-traceability-table.md` row `W02`.

## Both requests prove

- The withdrawal flow has a defined reverse path even when no public publication has occurred.
- The change-of-options flow works without requiring a new project code.
- A `withdrawn` enum value exists in `interview-project.schema.json`'s `status` field; it is reached by writing one row, not by inventing new fields.
