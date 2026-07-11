# V0.3 · Family Oral History Governance — Closeout Report

> Task code: `2015-PROJECTS-REVIVAL-V0.3-CLOSEOUT` (continues `2015-PROJECTS-REVIVAL-V0.3-FAMILY-ORAL-HISTORY-GOVERNANCE`)
> Implementation commit: `a628ae27b8a15546e8bdb1f0d682b07a2385ca2a` — `docs: add family oral history governance kit`
> Pages workflow run: `29138635796` — `conclusion: success`
> Report commit: see `git log --oneline -1 reports/v0_3_*.md`
> Report workflow: see `gh run list --workflow pages.yml --limit 1`

---

## 1. Status

**STATUS: PASS.**

The V0.3 governance kit is complete, validated, pushed, and deployed via
GitHub Pages. All four historical 2015 documents remain unchanged; the
manifest sha has not changed; the root README, archive README, and Pages
workflow are unchanged in shape (the README was lightly updated to reflect
V0.3 status and to add docs/oral-history + stories entry points, which was
explicitly permitted by the task). No tag, no Issue, no `gh-pages` branch
was created. No real family personal data, audio, video, image, or completed
consent form was added.

## 2. Objective

The objective of V0.3 is **not** to interview any real family member. It is
to build the governance, consent, withdrawal, AI policy, data classification,
narrator-review, and publication-gate processes that must exist before any
real interview can occur. No recording, transcript, photo, or piece of PII
about any real narrator exists in this repository as a result of V0.3 — and
the kit is structured so that none ever can enter the public Git history by
accident.

## 3. Repository Baseline

| Item | Value |
|---|---|
| Repository | `/home/ubuntu/.hermes/workspace/project/2015-Projects` |
| Branch | `master` |
| Starting HEAD | `f7d8f6e5ce5b1d8bef8cd509b3a35fdfe04717df` |
| Starting origin/master | `f7d8f6e5ce5b1d8bef8cd509b3a35fdfe04717df` |
| Default branch | `master` (unchanged) |
| Pages workflow | `2f704351c50890b0` (unchanged) |
| 4 historical files | All SHA-256 MATCH `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` |
| Archived README | BYTE-EQUAL with `dc8e86e7:README.md` |
| Manifest | `b5328ad909fa472d` (unchanged) |
| Isadore story.md | `86db78c307d73ed7` (unchanged) |
| Isadore segments.json | `b7eb86e238574ad8` (unchanged) |
| Site | `site/` — not modified during V0.3 |
| V0.2B report SHA fix? | **No fix needed.** The report only references `dc8e86e7…` and `3af836149a6bc…`; no incorrect SHA appears in it. |

## 4. Source Research

Survey instrument: `research/v0_3_family_oral_history_governance_sources.md`

| Metric | Value |
|---|---|
| Unique official URLs cited | 20 (with 13 listed as primary; 7 as supporting background) |
| Institutions covered | Oral History Association, Oral History Society (UK), Library of Congress (Veterans History Project), Penn State University Libraries, Louie B. Nunn Center for Oral History (Univ. of Kentucky), Baylor University Institute for Oral History, Smithsonian Center for Folklife and Cultural Heritage, UTRGV Library, ALA LIRT, University of California Santa Barbara (UCSB Document Language Services), Hipstas / AudiAnnotate, The Heritage Fund (UK). Plus an OHA Annual Meeting 2025 panel on AI and oral history. |
| Categories covered | (1) oral-history ethics & best practices, (2) narrator informed consent, (3) interview-recording permission, (4) narrator review & amendment, (5) withdrawal, restriction, embargo, (6) sensitive content & third-party privacy, (7) file, metadata, archive management, (8) transcription, editing, timecodes, (9) digital publication & long-term access, (10) AI transcription / cloud processing consent |

### Three-layer demarcation in this project

| Layer | Source class | This project treats it as |
|---|---|---|
| Ethics & best practice | OHA, OHS, Smithsonian, Heritage Fund, etc. | Direct adoption (operational rules). |
| Operational & technical rules | Nunn Center field layout, UCSB DLS, etc. | Direct adoption (file naming, schemas, gates). |
| Legal-contract documents | LOC VHP Field Kit release form, Nunn Center Deed of Gift | **Not adopted as legal contracts.** These are *inspiration* only. Any document actually signed by a real narrator must be reviewed by counsel in the narrator's jurisdiction. |

## 5. Governance Principles

15 core principles codified in `docs/oral-history/01-project-principles.md`:

1. Narrator is a participant, not a "data source".
2. Narrator may refuse any question.
3. Narrator may pause or end the interview.
4. Project purpose must be explained before recording.
5. Material without explicit public release consent is private by default.
6. Raw audio never enters the public Git.
7. AI does not replace narrator review.
8. AI-generated summaries cannot be presented as the narrator's words.
9. Uncertain memory is preserved as uncertain.
10. Do not coerce sensitive detail to "complete" a story.
11. Third-party privacy is as important as narrator consent.
12. Publication scope can be smaller than recording scope.
13. Consent is continuous, not a one-time signature.
14. Public pages carry the minimum approved content.
15. Any real material passes an artificial human gate before going public.

## 6. Participant Rights

`02-participant-rights.md` lists 22 explicit rights across five categories
(information, media consent, processing consent, public-form, time, review)
plus three "rights-of-the-real-world" caveats:

- Public Git history and third-party caches may be impossible to fully retract.
- Therefore sensitive material must never enter the public repository in the first place.
- A retraction request response is committed to **within 14 days**.

## 7. Consent Model

`03-consent-and-permissions.md` establishes **modular consent in five sections**:

- **A. Interview itself** — audio, video, in-person notes, photos, documents (each independently).
- **B. Processing** — human transcription, local AI, cloud STT, cloud LLM, translation (each independently). **Defaults**: human transcription + local transcription enabled; everything else needs separate explicit consent.
- **C. Identity & public form** — real name, pseudonym, anonymous, family-internal, research-only, public page, search indexing, RSS, social excerpts (each independently).
- **D. Content form** — audio, video, full transcript, edited transcript, short excerpts ≤ 12 EN words, Chinese translation, editor summary, photos, documents.
- **E. Time** — immediate, post-review, embargo-until-date, post-mortem, never.

**Default-prohibited** (must be separately and explicitly opted in to be enabled): voice cloning, voice-as-data for cloning, model training / fine-tuning, public chatbot corpus, AI-rewriting-as-original, cross-project reuse.

## 8. Withdrawal Mechanism

`04-withdrawal-and-change-requests.md` defines an 8-step procedure:

1. Receive request.
2. Log timestamp + channel + agreed verification phrase (no ID numbers).
3. Freeze any pending public material.
4. Confirm scope.
5. Take down via `npm run build` of a build without the affected stories, Pages workflow re-deploy, sitemap remove, `noindex` markers.
6. Log minimum metadata into `oral-history-private/.../decisions/withdrawal-log.md`.
7. Reply to the requestor on the agreed channel.
8. Record external copies that we cannot control (search engine snapshots, `web.archive.org`, social media reposts, RSS reader caches).

The 14-day response deadline is fixed in writing.

## 9. Interview Preparation

| Phase | Count | Source |
|---|---|---|
| Pre-interview project prep | 5 items | `05-interview-preparation.md` |
| Pre-interview relationship-building | 4 items | " |
| Pre-interview administration (consent, AI options, withdrawal channel) | 6 items | " |
| Pre-day-of equipment | 5 items | " |
| Day-of opening | 6 items | " |

`06-interview-question-guide.md` provides **13 modules** with opening questions, neutral follow-ups, wording to avoid, and pause / silence rules. **No fixed questionnaire is prescribed**; modules may be skipped, reordered, or expanded.

## 10. Data Classification

`08-data-classification-and-storage.md` defines four levels:

```
Level 0  raw private  →  oral-history-private/OH-YYYY-NNN/
Level 1  restricted   →  oral-history-working/OH-YYYY-NNN/
Level 2  approved     →  site/src/content/stories/<slug>.md + <slug>.segments.json
Level 3  publicly published  →  site/dist/ + GitHub Pages
```

The transition 0 → 1 → 2 → 3 is mechanical: each transition crosses an
artificial gate (operator transcription / narrator review / validator /
publish). The reverse path (3 → 2 → 1 → 0) is covered by withdrawal.

## 11. File and Identifier Policy

`09-file-naming-and-identifiers.md` defines:

- Project: `OH-YYYY-NNN`
- Session: `OH-YYYY-NNN-S##`
- File: `<id>[<session>]_<type>_v<NN>_<YYYY-MM-DD>.<ext>`
- Names use placeholders, never real names; pseudonyms are stored only in
  `oral-history-private/.../identity/real-name-map.md`.
- Versions: `v01`, `v02`, …; no `final-final-2` is allowed.

`.gitignore` was extended with four narrow private-directory rules
**without** any `*.mp3` / `*.wav` rule, because approved public audio assets
may still legitimately be referenced from `site/src/content/`.

## 12. Transcription and Timecode Policy

`10-transcription-and-timecodes.md` defines:

- Raw transcript and edited transcript are **separate files**.
- Six standard markers: `[听不清 hh:mm:ss]`, `[人名待核实]`, `[日期约为 X]`, `[讲述者笑]`, `[停顿]`, `[经讲述者要求删除]` (the last marker exists only in Level 1 working drafts).
- Quotations only when they are verbatim and time-anchored; **editor summaries never use quotation marks**.
- Public pages use **chapter-level timecodes**, never word-level sync.
- Full transcripts are never committed unless Level-2-approved.

## 13. Sensitive Content and Redaction

`11-sensitive-content-and-redaction.md` covers 14 sensitive categories with
explicit defaults:

| Category | Default | Public requires |
|---|---|---|
| Minors' faces/voices | private | guardian + narrator consent |
| Exact home address | private | redaction to region-level |
| Phone/email | private | never stored |
| ID numbers | private | never stored |
| Health | private | narrator + medical (if needed) |
| Finance | private | range-level redaction |
| Family disputes | private | each party's signature |
| Politics/religion | private | time-window redaction |
| Crime allegations | private | legal review |
| Third-party unverified claims | private | third-party consent |
| Sexuality | private | often full removal |
| Trauma | private | usually private |
| Unannounced death/adoption | private | full family consent |
| Workplace internal info | private | redaction + employer (if needed) |

Five redaction methods: deletion, pseudonymization, time-fuzzing,
space-fuzzing, summarization. Combination-info re-identification risk is
**explicitly addressed**; deleting only the name is not sufficient.

## 14. AI Processing Policy

`15-ai-processing-policy.md` distinguishes three tiers:

- **Default-allowed**: local ffmpeg / ffprobe / whisper.cpp; local LLM
  draft summaries; local schema validators.
- **Default-prohibited, separate consent required**: cloud STT, cloud
  LLM processing, cloud translation, cloud summarization, internet-linked
  knowledge bases, cross-project reuse.
- **Always-prohibited without separate explicit and re-confirmed opt-in**:
  voice cloning, generating new utterances in the narrator's voice, model
  training / fine-tuning, AI-generated photos of the narrator, public
  chatbot corpus, AI deciding what is sensitive, AI output treated as
  fact, AI rewrites labelled as the narrator's words.

Every AI tool usage is logged with: tool, local-vs-cloud, input scope,
output scope, retention decision, human-review confirmation.

## 15. Validation Results

### Local governance validator

```
$ node scripts/validate-oral-history-governance.mjs
== V0.3 governance validator ==
ok doc: 01-project-principles.md ... ok doc: README.md
ok template: ... ok template: redaction-log.md
ok schema: ... ok schema: withdrawal-request.schema.json
scan: 32 files under docs/oral-history/
---- summary ----
files: docs=16 templates=11 schemas=5
checks: 48
errors: 0
RESULT: PASS — governance kit is structurally complete and clean.
```

### Negative-case verification (executed in `/tmp/v0_3_negative` then deleted)

A broken copy of the kit (with one invalid JSON schema, one template
without privacy reminders, and one `consent-record.md` with the
`声音克隆` marker stripped) generated **32 errors** when the same
validator ran on it. Conclusion: the validator is not so permissive that
it would miss such obvious issues.

### Site regression

```
$ npm ci                                # 161 packages installed
$ npm run validate:stories              # PASS — 1 story, 1 segment file
$ npm run check                         # PASS — 0 errors / 0 warnings / 0 hints
$ npm run build                         # PASS — 10 page(s) built in 1.47s
```

`git diff --name-only -- site` returns nothing — the `site/` tree was not
modified during V0.3.

### Story-page regression (puppeteer via `npm run preview`)

- `http://127.0.0.1:4321/2015-Projects/stories/isadore-first-tomato/`
  → 7 chapters, `duration = 41.795925`, `readyState = 4`, 0 console
  errors, 0 page errors, no horizontal overflow.

### Online sanity check (after first Pages workflow run)

| URL | HTTP | Notes |
|---|:---:|---|
| `https://conanxin.github.io/2015-Projects/` | 200 | home + Stories entry + V0.2 home pilot banner |
| `https://conanxin.github.io/2015-Projects/stories/` | 200 | stories index, one story card |
| `https://conanxin.github.io/2015-Projects/stories/isadore-first-tomato/` | 200 | unchanged from V0.2B |
| `https://conanxin.github.io/2015-Projects/seeds/memory/` | 200 | unchanged from V0.1A |

### Media and personal-data scan

| Scan | Result |
|---|---|
| `find … -iname '*.mp3' … -iname '*.wav' … -iname '*.mp4' … -iname '*.m4a' … -iname '*.mov'` (excluding node_modules / dist / .git) | empty |
| Real Chinese national-ID regex scan of `docs/`, `research/`, `scripts/`, `README.md`, `.gitignore` | no matches |
| Real 11-digit mobile regex scan | no matches |
| Real email regex scan | no matches |
| `/home/ubuntu/` literal scan | no matches |
| Windows `C:\` / `D:\` literal scan | 3 matches, all in **policy-prose** "forbidden example" content (`13-publication-gates.md`, `templates/public-release-checklist.md`, validator script's own pattern code) |
| `api[_-]?key=…`, `Bearer …`, `sk-…` token scan | no matches |
| Filled-in non-placeholder ISO dates in `docs/oral-history/` | 0 (all converted to `[YYYY-MM-DD]`) |

### Historical integrity (terminus)

| File | SHA-256 | Match vs V0.3 task-start baseline |
|---|---|:---:|
| `1.Podcast-Plan.md` | `0418f399fdb2f346` | YES |
| `2.E-Reader.md` | `85191f8032ab0829` | YES |
| `3.DESIGNING For The Web.md` | `e3b0c44298fc1c14` | YES |
| `4.Recordingl history.md` | `e3b0c44298fc1c14` | YES |
| `archive/2015/README.original.md` | BYTE-EQUAL | YES |
| `archive/2015/manifest.sha256` | `b5328ad909fa472d` | YES (unchanged) |
| `.github/workflows/pages.yml` | `2f704351c50890b0` | YES (unchanged) |
| `site/astro.config.mjs` | `9c3055616e7e92e7` | YES (unchanged) |
| `site/src/content/stories/isadore-first-tomato.md` | `86db78c307d73ed7` | YES (unchanged) |
| `site/src/data/stories/isadore-first-tomato.segments.json` | `b7eb86e238574ad8` | YES (unchanged) |
| `site/` tree | not modified | YES |
| Public repository state | no media, no PII, no completed consent | YES |

## 16. Decision for V0.4

**Direct answers:**

1. **Can the project interview real family members now?**  
   **No.** Every technical prerequisite exists, but the operator (the user)
   must still manually read, mark up, and personalize these documents with
   the would-be narrator before any real interview starts. Until that
   happens, this kit is "complete but not yet operational".

2. **Which documents must the user review line-by-line first?**  
   The four opinion-rather-than-mechanical documents:
   - `docs/oral-history/templates/participant-information-sheet.md`
   - `docs/oral-history/templates/consent-record.md`
   - `docs/oral-history/templates/ai-processing-options.md`
   - `docs/oral-history/templates/withdrawal-or-change-request.md`
   - `docs/oral-history/templates/publication-approval.md`
   These are not configurable rules; they encode **the operator's ethical
   stance** and must be reviewed.

3. **Which choices must never be made by the Agent on the narrator's behalf?**  
   The narrator-only choices, per `03-consent-and-permissions.md` and
   `02-participant-rights.md`:
   - Real name / pseudonym / anonymous
   - Cloud AI processing vs local AI
   - Which topics go public
   - Whether audio may be published
   - Whether to allow search-engine indexing
   - Whether to retract
   The Agent (Hermes or any LLM) cannot speak on these matters.

4. **Does this need a lawyer's review?**  
   The kit itself is **an operational templates**, not a contract. If a
   real narrator in a specific jurisdiction signs an actual release form,
   that form must be reviewed by counsel in that jurisdiction. For the
   project-operator default (single narrator, single operator, no
   publication beyond a personal family archive), counsel is recommended
   but not blocking.

5. **Which material is absolutely forbidden in the public Git?**  
   Everything in `Level 0 raw private` and `Level 1 restricted working`.
   Concretely: raw audio / video / photos, completed consent forms,
   real-name maps, withdrawal logs, redacted segments, real contact
   details, real ID numbers, real transcript text, and any
   `[经讲述者要求删除]` segment.

6. **Should we do a self-interview dry run first?**  
   **Yes, strongly recommended.** V0.4 should be a single self-interview
   where the operator interviews themselves (no third-party privacy risk,
   no real family member), generates a fully signed consent record with
   defaults, walks through every gate, and produces a Level-2 draft that
   is intentionally **never published**. This validates the kit end-to-end
   before any third-party narrator is approached.

7. **Is Astro static still adequate?**  
   Yes for the foreseeable scope. Content collections + JSON segments + a
   small validator cover everything this project needs. No backend, no
   wiki, no OHMS, no Omeka instance, no database, no accounts has been
   introduced — and none is needed.

8. **When will we need a private backend?**  
   When one of these becomes true:
   - Real-family interview count exceeds ~5–10 (Level-0/1 directory
     navigation becomes painful).
   - Multiple operators must collaborate on a single project.
   - Withdrawal requests start arriving in practice and need an audit log
     that Git cannot provide.
   - A narrator's family expects per-link access control (e.g., "only
     share this URL with my siblings").

   None of these are true now; this V0.3 ends before any of them becomes
   true.

### Recommended next steps

- **V0.4 — interview-readiness dry run**
  - Single self-interview by the project operator.
  - All templates filled out using **operator-with-operator** consent (the
    "narrator" is the same person).
  - A complete `interview-project` JSON, `participant-consent` JSON,
    `interview-session` JSON, and Level-2 draft are produced.
  - **No public publication.**
  - Outcome: validation that the kit's mechanical structure holds when
    actually walked through end-to-end.

- **After V0.4**
  - One real-family pilot, only after the operator and a real narrator
    jointly review and customize the consent and publication templates.
  - Following the six Gates from `13-publication-gates.md` without
    skipping any.
  - Indefinite operation within Astro-static + GitHub-Pages. Migration to
    a private backend only on the triggers above.

---

— Published 2026-07-11 by the V0.3 closeout.
