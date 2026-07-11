# Interview Boundaries — OH-2026-900 (SYNTHETIC)

> **SYNTHETIC DRY RUN — NOT REAL PARTICIPANT DATA — NOT A LEGAL CONSENT RECORD**

## 1. Mandatory off-limits topics for this narrator

Each interview must enforce these even if the interviewer is the narrator themselves:

- Any living relative's private medical, financial, or relationship details.
- Any currently-litigated dispute.
- Any currently-ongoing police / government investigation.
- Any workplace disagreement under NDA or non-disparagement clause.
- Real names, real phone numbers, real addresses, real government IDs — replace with placeholders such as `[相对化名]`.

## 2. Allowed topics (this dry run)

Only topics derived from the public `2015-Projects` repository are allowed.

| Allowed topic                                                | Source of fact (already public)               |
| ------------------------------------------------------------ | --------------------------------------------- |
| The four 2015 idea files: `1.Podcast-Plan.md`, `2.E-Reader.md`, `3.DESIGNING For The Web.md`, `4.Recordingl history.md` | GitHub `conanxin/2015-Projects` at `dc8e86e7` |
| The V0.1A/B/C revival milestones + Astro site + GitHub Pages | V0.1A/B/C commits `4d68c42` / `14972fe` / `3253236` / `c95e1d1` |
| The V0.2B public oral history pilot (Isadore Samet, NPS EI-87) | V0.2B commits `3af8361` / `f7d8f6e` |
| The V0.3 governance kit                                       | V0.3 commit `a628ae2`                         |

The narrator must not introduce off-public-repo personal history.

## 3. Sensitive-content escalation rules (mirror of `11-sensitive-content-and-redaction.md`)

| Trigger                                                                            | Required action                                                              |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Narrator mentions a living third party by name                                     | Stop, replace with `[相对化名 N]` in transcript; never publish the real name. |
| Narrator mentions a precise address, phone, email, or ID                           | Stop, redact to `[联系方式]` / `[住址]`; never publish.                       |
| Narrator expresses distress or fatigue                                              | Pause for at least 60 seconds; offer to defer to another session.            |
| Narrator changes a previous consent decision mid-interview                         | Apply immediately to remaining session; record a `withdrawal-or-change-request.md`. |

## 4. Drift guardrails for the interviewer-self case

When the interviewer and the narrator are the same person, a single human still must:

- Pause at the end of each pre-defined module (see `interview-question-guide.md`).
- Write a one-line emotional check in `interview-session-log.md` after each module.
- Apply redaction even if the narrator-self "doesn't feel like" redacting.
- Schedule, not stream: there is no live-broadcast release path.
