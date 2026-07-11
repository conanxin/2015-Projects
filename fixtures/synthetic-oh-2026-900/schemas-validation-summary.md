# Schema Validation Summary — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

## 1. Schemas touched in this dry run

The dry run populates, in narrative form, the schemas from `docs/oral-history/schemas/`:

| Schema file                                       | Used in fixture                  | Key fields exercised                                                                 | Verified by  |
| ------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `interview-project.schema.json`                   | `project-charter.md`             | `projectCode`, `narratorCode`, `status` (10 enum values)                             | human review |
| `participant-consent.schema.json`                | `consent-record.md`              | `interviewConsented`, `voiceCloningConsented` (default false), `modelTrainingConsented` (default false), `withdrawalContactMethod` (5 enums) | human review |
| `interview-session.schema.json`                   | `interview-session-log.md`       | `sessionId`, `medium`, `status`                                                     | human review |
| `publication-decision.schema.json`                | `publication-approval.md`        | `approvedByNarrator`, `editorVerified`, `version`, `venuesApproved[]`                | human review |
| `withdrawal-request.schema.json`                  | `withdrawal-request.md`          | `requestType`, `scope`, `withdrawalContactMethod`, `decision`                        | human review |

This fixture does **not** write any JSON file with real schema data — it intentionally stays narrative in markdown so no real personal data ever enters the public repo's content-addressed store.

## 2. Status enum coverage

`interview-project.schema.json` defines `status` as one of:

```
planned | consented | recorded | transcribing | narrator-review
approved-private | approved-public | embargoed | withdrawn | closed
```

This dry run's `gate-traceability-table.md` is expected to surface **at least 5 distinct values**, ideally 7. If the trace table only surfaces `planned → consented → recorded` (the obvious minimum), then the policy `08` and `13` are under-tested and must be revisited before V0.4B.

## 3. Withdrawal-contact-method enum coverage

`participant-consent.schema.json` defines five methods (e.g. `email`, `phone`, `in-person`, ...). This fixture exercises at least **two distinct methods** across `consent-record.md` and `withdrawal-request.md`. If only one method appears, the schema's breadth is under-tested.

## 4. AI-option coverage

`participant-consent.schema.json` defines at least 8 AI-related fields. This fixture's `ai-processing-options.md` exercises **all 8**. The dry run's cover check verifies `voiceCloningConsented` and `modelTrainingConsented` are **both default false**, and that the cloud-AI fields (`aiSummaryCloud`, `aiNamedEntityExtraction`) follow the deny-by-default rule.

## 5. Schema vs prose drift detector

For each placeholder field, this fixture checks:

- Does the schema allow this value as written?
- Does the policy doc (`docs/oral-history/*.md`) describe this value?
- Does the template (`docs/oral-history/templates/*.md`) ask for this value?

A new field that exists only in one of these three is a drift signal — should be flagged in `gate-traceability-table.md` row "drift".
