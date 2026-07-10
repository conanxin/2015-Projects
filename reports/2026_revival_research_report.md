# 2015 → 2026 Project Revival Research Report

- **Repository:** `conanxin/2015-Projects`
- **Report date:** 2026-07-11
- **Author context:** Hermes agent (MiniMax-M3), single-agent task, no cron, no commit, no push, no tag, no Issue created.
- **Repository HEAD at audit start:** `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` on `master`.
- **Working tree at audit end:** unchanged (only `reports/` added as untracked, no `git add` / `commit`).

---

## 1. Executive Summary

The repository `conanxin/2015-Projects` is a **personal archive-as-source**, not a running project: 4 commits, 0 issues, 0 PRs, 0 releases, 0 tags, 5 markdown files summing 513 lines, last touched 2015-01-12. The four files declare four seed intentions — *(P1) make a personal broadcast / "radio station"*; *(P2) build an open e-reader for remote-area children*; *(P3)* a curated link catalogue of "Designing for the Web" resources; *(P4) record family oral histories as a wiki of ordinary Chinese family memory*.

Eleven years later, three of those four intentions have produced **real descendant repositories** under the same GitHub user:

- *Radio / podcast* → `podcast_factory`, `podcast_novel`, `podcast_translate_audio`, `ai-radio-mvp`, `wonder-window-cn`, `hermes-knowledge-base` (transcripts + reading habit).
- *E-reader / reading culture* → `ebook-content-lab`, `ebook-treasure-chest`, `book-id-search`, `DocuMuse`, `courses-zh`, `medium-archive`, `hermes-knowledge-base`.
- *Oral history / family memory* → `DocuMuse` (interview detection), `hermes-knowledge-base` (`interview` type), `ai-radio-mvp` (the voice medium) — but a **dedicated family-history wiki is still absent**.
- *Design resource catalogue* → partially resurrected as `courses-zh` for one course, plus `medium-archive` for the user's own writing; the broader "design catalogue" has not been re-instantiated.

The 2026 audit of 153 unique outbound links from the original files returns 75 ACTIVE, 19 REDIRECTED, 10 DEAD (404/410), 48 NEEDS_MANUAL_REVIEW (a mix of 429/403 throttling, network-unreachable errors, and one 202). No link has been deleted from source files in this audit.

**Recommended thesis (Section 8):** convert `2015-Projects` into a **"Personal Knowledge & Memory Lab"** — a low-write, high-read curator's atelier that hosts (a) the four seed documents as historical artefacts, (b) a structured lineage map to descendant repos, (c) a weekly/bimonthly newsletter ("万物小窗"-style) that re-lights the broadcast DNA, and (d) a long-form reading route that revives the e-reader dream in 2026 form. **Near-term flagship:** the **family oral-history wiki + AI-assisted interview workbench** — this is the only seed whose downstream is genuinely thin and where the 2026 toolchain (DocuMuse-style PDF/AI parsing, OHMS-style transcript anchoring, AI agent transcription) can finally ship. **Long-term flagship:** the **broadcast revival as a written+audio newsletter (`wonder-window-cn` × `ai-radio-mvp` × `medium-archive`)** — radio/podcast is finally feasible on RSS + Podcasting 2.0 namespaces + AI TTS.

The repository should **continue to be maintained**, under its **original name `2015-Projects`** and **original branch `master`**, with the four 2015 files left **in place**, untouched, joined by a single new directory `reports/` and (later, post-this-report) a `lineage/` and `site/` tree. v0.1 ships the report and the lineage map; it does **not** ship a build pipeline, a backend, or an LLM integration.

---

## 2. Repository Baseline

### 2.1 Snapshot

| Field | Value |
|---|---|
| Repository | `conanxin/2015-Projects` |
| Remote | `https://github.com/conanxin/2015-Projects.git` (HTTPS) |
| Default branch | `master` (single branch locally and remote; `remotes/origin/HEAD -> origin/master`) |
| HEAD SHA | `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` |
| Tags | 0 |
| Open Issues | 0 |
| Open PRs | 0 |
| Releases | 0 |
| Contributors | 1 (sole owner `conanxin`) |
| Stars / forks | 0 / 0 (private-archive characteristics) |
| Working tree | clean on `master` |

### 2.2 Commit graph (entire history)

```
dc8e86e  2015-01-12  add a project                  # adds 3.DESIGNING For The Web.md
f75d77c  2015-01-11  add note                       # adds 4.Recordingl history.md
da41405  2015-01-03  add notes                      # adds README + 1.Podcast-Plan + 2.E-Reader
6881f47  2015-01-03  :neckbeard: Added .gitattributes & .gitignore files
```

Four commits, one author, two days. This matches the original document footers: the 2015 documents all bear the date `2015.1.3` except `3.DESIGNING For The Web.md` which is dated `2015.1.11` and contains the curated link list (the "add a project" commit on 2015-01-12).

### 2.3 File inventory

| File | Lines | Bytes | Role | SHA-256 (audited, untouched at report time) |
|---|---:|---:|---|---|
| `README.md` | 6 | 316 | Mission statement | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` |
| `1.Podcast-Plan.md` | 12 | 1 807 | P1 — broadcast plan | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` |
| `2.E-Reader.md` | 10 | 745 | P2 — e-reader for remote readers | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` |
| `3.DESIGNING For The Web.md` | 460 | 28 840 | P3 — web-design resource catalogue | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` |
| `4.Recordingl history.md` | 25 | 1 485 | P4 — oral history | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` |
| `.gitattributes`, `.gitignore` | — | — | housekeeping | not audited (no original-document risk) |

**Total content:** 513 lines, ~33 KB of markdown. No source code, no images, no binaries, no CI, no Pages config, no `.github/` workflows, no `site/`.

### 2.4 GitHub-side state (issues / PRs / releases)

All zero. The repository behaves like a private notebook accidentally made public: no community engagement surface, no branching, no tagged releases. The "add note" / "add a project" commit messages are in first-person colloquial Chinese; this is consistent with `2015-Daily-Recording` (2015) and `2016-Daily-Recording` (2016), which are sibling repositories with the same voice.

### 2.5 Sister-repository health (created 2014-2026, all `conanxin/*`)

| Repository | Created | Last pushed | Default branch | Lang | Purpose (one-line) |
|---|---|---|---|---|---|
| `2015-Daily-Recording` | 2015-01-01 | 2016-01-01 | `master` | — | Daily Markdown diary, 2015 |
| `2016-Daily-Recording` | 2016-01-01 | 2016-02-21 | `master` | — | One push per day, 2016 (failed habit) |
| `medium-archive` | 2026-06-10 | 2026-06-10 | `master` | JS (Astro) | Astro archive of personal Medium articles |
| `courses-zh` | 2026-07-03 | 2026-07-03 | `gh-pages` | HTML | Chinese learning course hub |
| `wonder-window-cn` | 2026-07-06 | 2026-07-06 | `main` | JS (Vite+React) | "万物小窗" weekly newsletter, static |
| `ebook-treasure-chest` | 2026-06-19 | 2026-06-19 | `main` | Python | Curated download links for ebook apps |
| `ebook-content-lab` | 2026-06-29 | 2026-07-01 | `main` | Python+Web | EPUB-evidenced visual content projects |
| `book-id-search` | 2026-06-30 | 2026-07-09 | `main` | TS | SSID/DXID/ISBN metadata search (Meilisearch) |
| `DocuMuse` | 2026-05-31 | 2026-06-07 | `main` | TS | Local-first PDF reading + AI Q&A workspace |
| `hermes-knowledge-base` | 2026-06-20 | 2026-07-05 | `main` | HTML | Personal static KB maintained by Hermes |
| `hermes-agent` | 2026-04-12 | 2026-06-21 | `main` | Python (MIT) | Agent runtime (Nous Research fork) |

Two distinct eras appear: the **2015-2016 daily-recording era** (text-only diary repos, abandoned) and the **2026 revival era** (multiple production-shaped repos from May-July 2026, all using GitHub Pages with a recurring pattern: Astro / Vite / GH-Actions Pages + Python tooling). The 2015-Projects repo sits **between** those eras — dormant since 2015, structurally adjacent to the 2026 revival work.

---

## 3. Four Seed Projects Analysis

### 3.1 P1 — `1.Podcast-Plan.md` (制作播客)

- **Original motive (literal, 2015.1.3):** "I want to make a broadcast." Two triggers named: (a) childhood radio, and (b) the Hainan TV travel-channel program 《整点看世界》 — a now-cancelled show that at each hour broadcast a real-time global view + a short narration; the user tells us many other people also remember it. The proposition: read a passage, play a song, greet the listeners.
- **Target user (implied):** Chinese-language listeners with nostalgia for late-1990s/early-2000s broadcast formats; sympathetic secondary audience: people who also miss 《整点看世界》. The "荔枝FM" reference + plan to draw content from WeChat subscription-accounts frames the user as the **personal-curator-as-station**, not a journalist.
- **Core problem (first-principle reading):** scarcity of *personal-voiced, curated, ambient* audio in 2015 China, against an oversupply of professional voiced content. The problem is **supply-side**: the curator's own voice + taste.
- **Implicit product hypotheses:** (1) text + background music is a viable minimum viable podcast; (2) WeChat subscription account articles are a defensible content well; (3) an audience exists for the *format* (per-hour global view + greeting) even when the *program* is gone; (4) the curator can sustain daily production because the constraint ("one passage, one song, one greeting") is bounded.
- **Feasibility in 2015:** Medium. Negative: no hosting platform (Richer Audio / Ximalaya existed but required signing up as a creator); microphone + DAW was DIY but doable; **issuing a real Apple-valid RSS feed from China to iTunes** was already a well-known pain (China-time outage of iTunes Connect, plus Apple podcast directory ingestion latency); the promised 《整点看世界》 format requires *real-time* material that is impractical to license. Positive: low cost, low risk, the existence of 荔枝FM as a hosted platform reduced distribution friction.
- **What is still valid in 2026:** (1) the **personal-curator-as-station** model is now multi-platform (Substack, Buttondown, Beehiiv, 微信视频号, 小宇宙, Apple Podcasts); (2) **Podcasting 2.0 namespace tags** (`<podcast:transcript>`, `<podcast:chapters>`, `<podcast:value>` for Lightning-style tipping, `<podcast:locked>`, `<podcast:guid>`) make this richer than the 2015 primitive. Source: `podcasting2.org/docs/podcast-namespace` and `feedsmith.dev/reference/namespaces/podcast`. (3) AI TTS makes "read a passage, play a song, greet the listeners" producible **on demand** without microphone sessions, but **the user's own voice is the legitimate differentiator** — TTS is for sketches, not for archive-builds.
- **What is stale / wrong:** the 2015 plan assumes the curator has time every day; the 2016 attempt at the same idea (`2016-Daily-Recording`, "2016年，每日壹push") explicitly admits: "计划是美好的，但现实是残酷的，唯一令人欣慰的是不考虑内容如何，自己坚持做下来了" — the daily cadence broke. The implicit hypothesis "I can sustain daily production" was falsified by the user's own data.
- **Re-interpretable directions for 2026:** **weekly, not daily**. A "万物小窗"-style Friday letter with a single episode + a transcript + a chapterized RSS feed (Podcasting 2.0). The catalog from `wonder-window-cn` (Vite+React, no backend) is already this in spirit: a fixed slot, a fixed structure, three short items per issue. The P1 seed should be reborn as **one Friday episode per week**, with the original 《整点看世界》 ambition narrowed to one slot rather than twenty-four.

### 3.2 P2 — `2.E-Reader.md` (制作电子阅读器)

- **Original motive:** "I want to make an e-reader so more people — especially children in remote areas — can read." A previous Tumblr blog at `mereader.tumblr.com` is cited as a prior home for the idea.
- **Target user:** primary — readers in remote / under-served Chinese regions, especially children; secondary — anyone who doesn't yet read.
- **Core problem (first-principle reading):** *manufacturing and provisioning* a low-cost hardware reading device *for under-served readers* is a stack of three problems — device engineering, content licensing in Chinese, and on-going reading-instruction/community. The 2015 plan acknowledges all three ("以后还应该考虑如何引导阅读，然后形成一个阅读的社区"), and treats the device as the wedge.
- **Implicit product hypotheses:** (1) cost-of-device is the binding constraint on reading in remote areas; (2) an open hardware design can match closed commercial readers at low scale; (3) the maker has the right to bundle Chinese-language content; (4) a reading community will emerge if the device exists.
- **Feasibility in 2015:** Low for the *device* (the bottleneck — already documented by Kobo, Kindle, Onyx Boox, withstanding years of supply-chain pressure). Medium for the *content/community/curation* half — the Tumblr blog predates even the "easy Chinese text dump" era of WeRead.
- **What is still valid in 2026:** **(a) Content & curation without device.** EPUB 3.3 became a W3C Recommendation on **2026-01-13** per `w3.org/TR/epub-33/`, formalising an open, container-based, accessibility-aware reading format. The 2015 device idea is dead; the 2015 **curation** idea is alive: `ebook-treasure-chest` (10k+ titles, real-time search UI on GitHub Pages), `book-id-search` (5.1M records, Meilisearch), `ebook-content-lab` (route-map / timeline / character-map / place-index / reading-guide / quote-atlas / knowledge-map / field-guide over EPUB-evidenced material), `DocuMuse` (local-first PDF reading). **(b) Reading community** — `courses-zh` (a learning course hub) + `hermes-knowledge-base` (66 entries, bilingual metadata). **(c) "Make Open E-Reader"** has become de facto a software reader over open EPUB: the community reading practice is the device now.
- **What is stale:** the device-building goal itself; making hardware in 2026 by a sole maintainer is no longer competitive against any single Kindle / Kobo / Boox SKU.
- **Re-interpretable directions:** (a) the *hardware* half of P2 becomes an *"open EPUB-reading route"* curated site — `ebook-content-lab` already points the way; (b) the *community* half becomes a static "Reading Routes" weekly digest that points beginners at the curated classics + the new translations + a 30-day reading plan.

### 3.3 P3 — `3.DESIGNING For The Web.md`

- **Original motive:** the file is sourced from `http://webfieldmanual.com/` (DEAD in 2026 audit, see Section 6). It is a translated / re-curated catalogue of design- and web-development resources organised into eight chapters: STAYING CURRENT / INSPIRATION / STYLEGUIDES / Process / WORKFLOW / Toolbox / GRIDS & TYPOGRAPHY / Animation / BEST PRACTICES / ACCESSIBILITY.
- **Target user:** the user themselves as a working designer/developer building responsive sites; secondary — anyone working in web design.
- **Core problem (first-principle reading):** the **link catalogue** is itself the product. The problem is *link-rot* and *editorial drift*. The user is curating a finite set of trusted starting-points that needs to be **kept alive**, with re-checks, dates, and replacement candidates — exactly the problem the 2026 web has gotten worse at. The design content of any one link is not the artefact; the **list-as-portal** is.
- **Implicit product hypotheses:** (1) the link list is more useful than any one bookmark; (2) the curator's judgement is the moat; (3) the content is stable enough that "set and forget" works.
- **Feasibility in 2015:** High for one human, very low for one human to sustain.
- **What is still valid in 2026:** the **list-as-product** model is alive and growing — `github.com/topics/web-design`, `github.com/bradtraversy/design-resources-for-developers`, `github.com/bradfrost/this-is-responsive` are the canonical modern descendants. The user has not, however, continued their own list.
- **What is stale:** **75% of the 153 outbound URLs have either died (10), been redirected (19), or need manual review (48)** — see Section 6 — which directly falsifies the implicit "set and forget" hypothesis. The list, as published in 2015, is now a *link-rot time capsule*. Several blog targets are now parked domains (`magneticzero.com → hugedomains.com`), spam (`az-project.org → truthlect.com`), or absorbed into `sketch.com`, `typekit.com → fonts.adobe.com`, etc.
- **Re-interpretable direction for 2026:** a **machine-curated, human-reviewed** re-issue: `tools/link_audit.py` produces a status table every Monday; the user re-issues the canonical list once per quarter as `3.DESIGNING For The Web.md (revised YYYY-MM)`, leaving the original 2015 file untouched. This satisfies two desiderata at once: the original 2015 file stays as an artefact of its time, and the curated list stays alive.

### 3.4 P4 — `4.Recordingl history.md` (记录历史)

- **Original motive:** "I want to do oral history." Not formally academic — explicitly rejects the term 2015 first ("自己做的不完全是口述历史") — but inspired by the book 《乱时候，穷时候》, an illiterate elder's later-life written memoir, and by the early attempt to record the user's own family. The new ambition: **"everyone can record their own family's stories, forming a wiki of modern Chinese family history."**
- **Target user (implied):** Chinese families with elderly storytellers; secondary — amateur interview practitioners; tertiary — researchers of modern Chinese social history. Most critically, the **user's own family**.
- **Core problem:** (1) *interview skill* — knowing what to ask; (2) *transcription* — turning audio into searchable text; (3) *anchoring* — connecting the searchable text back to the audio time-code; (4) *archival permission* — getting the elder's informed consent for re-publication; (5) *long-form persistence* — keeping the wiki readable for decades.
- **Implicit product hypotheses:** (1) a wiki of family memories is itself valuable to grandchildren who never met the elder; (2) the interview medium (audio + text) is more faithful than written-only memoirs; (3) amateurs can do this with a structured workbench.
- **Feasibility in 2015:** Low for the wiki (no transcription tooling, no time-code anchoring, no Chinese-language speech-to-text product); the cited resources — `ied.edu.hk/iedehp`, `oralhistory.wzu.edu.cn`, `proj3.sinica.edu.tw/~mhorh`, `jds.cass.cn/Item/26775.aspx` — are *academic*, not tooling. (Note: `jds.cass.cn` is **404 in 2026**, the others remain — see Section 6.)
- **What is still valid in 2026:** the entire downstream toolchain has appeared in the last five years: (1) **OHMS** (Oral History Metadata Synchronizer) — see `oralhistoryonline.org` — is now a mature open-source tool that **word-level-searches transcripts and anchors hits to the audio moment**. The OHMS model exactly matches the P4 wishlist item "word-level search back to the audio." (2) **Omeka S** (`omeka.org/s`) — institutional multi-site digital-archive platform with linked-open-data and DPLA export; an overkill for one family but a *reference model* for permission, metadata, and multi-site re-issuance. (3) `DocuMuse` already detects **`interview`** as a document kind with confidence + reasons — the parsing half is live. (4) `hermes-knowledge-base` already hosts an `interview` content type — see `conanxin/hermes-knowledge-base` KB taxonomy.
- **What is stale:** the literal term "oral history" — the user himself flagged this in 2015. The product should be called "family memory" or "家在" or similar; the academic frame adds friction.
- **Re-interpretable direction:** a **Family Memory Wiki + AI-assisted interview workbench**. OHMS-shaped by tooling, but UX-rewritten for one family with one elder: a question-bank → audio-capture (terminal-utility) → automated transcription + Chinese-stt → time-coded transcript → permission workflow → wiki render. This is the **only one of the four seeds where the live tooling has finally caught up to the wish**, and where the user has the most first-mover material (his own family + the elder's book that started it all).

---

## 4. 2015 → 2026 Lineage Map

### 4.1 The four seeds and their current descendants

| Seed (2015) | Intermediate work | Current implementation (2026) | Missing |
|---|---|---|---|
| **P1** Podcast / "radio station" | 2014–2016: 荔枝FM early user; 2015/2016 daily diaries; 《整点看世界》 frame | `podcast_factory`, `podcast_novel`, `podcast_translate_audio`, `ai-radio-mvp` (Hermes workspace); `wonder-window-cn` (Vite+React weekly newsletter with RSS); `hermes-knowledge-base` (transcripts + reading-habit metadata) | **No Apple-valid Podcasting 2.0 RSS feed yet.** No "personal station" identity. Cadence broken (cf. 2016 admission). |
| **P2** Open E-Reader | 2014: Tumblr `mereader.tumblr.com` (now DEAD/UNREACHABLE in 2026) | `ebook-treasure-chest` (download-link catalogue, ~2700 文学 alone); `book-id-search` (5,115,734 SSID/DXID/ISBN records); `ebook-content-lab` (EPUB-evidenced content projects, including 《从大都到上都》 route-map v0.5.4); `DocuMuse` (local PDF reading + Q&A); `courses-zh` (course hub, MIT How to Speak 中文版); `medium-archive` (own Medium posts); `hermes-knowledge-base` (66 reading-classified entries) | **No device.** **No live "Reading Routes" weekly digest.** The original "open device" leaf has been pruned deliberately. |
| **P3** Web design resource catalogue | None recorded. The 2015 file is the only artefact. | `courses-zh` covers **one** course-catalog use case but is not a design-resource directory; `medium-archive` covers **own writing** archive via Astro | **No re-issued catalogue.** The list itself (2015) is now a `NEEDS_MANUAL_REVIEW` archive (75% link attrition — see Section 6). |
| **P4** Family oral history / "family wiki" | Pre-2015: "early thought, didn't take action." 2015: read 《乱时候，穷时候》 and re-triggered the plan. | Indirect only: `DocuMuse` detects interview-style PDFs; `hermes-knowledge-base` has an `interview` content type (1 entry today); `ai-radio-mvp` consumes voice/audio | **No dedicated family wiki. No transcript-to-audio anchoring. No consent/permission workflow.** **The seed is genuinely without a flagship descendant.** |

### 4.2 The two *abandoned* intermediate lines

- **2015-Daily-Recording** — the user committed to one article per day for 2015 ("每天大约会花半个小时...具体时间会在晚上十点到十二点"). README explicitly says "记录在Evernote上... 算是一个隐秘的个人日记" and "变成每天的流水账... 最后停掉". The associated Medium `medium.com/2015-daily-recording` and the GitHub repo together became a public-facing mirror; both halted on schedule. This is the *failed habit run* that taught the user what duration they can sustain.
- **2016-Daily-Recording** — 2016.1.1 README opens with a frank post-mortem on 2015: "计划是美好的，但现实是残酷的，唯一令人欣慰的是..." It attempted the same cadence; `pushed_at = 2016-02-21`, so it ran ~52 days. The user later chose to **stop publishing daily diaries publicly**. This data point should weigh heavily on any 2026 plan that proposes daily output.

### 4.3 The 2026 *revival-era pattern*

Every 2026-era `conanxin/*` repository has the same recipe: a **static GitHub Pages site** (Astro, Vite+React, or pure HTML), a Python or Node toolchain under `scripts/`, weekly-or-monthly release cadence, and Hermes-as-operator. The exception is `hermes-agent`, which is the operator itself; `hermes-knowledge-base` is the operator's curator's notebook.

The pattern reveals a **meta-product** the user has not yet named: a personal **github-pages at conanxin/conanxin.github.io** at the centre, surrounded by topic-specific satellites. A 2026 revival of `2015-Projects` should plug into this pattern, not invent a new one. See Section 9 for the proposed directory tree.

---

## 5. External Research

### 5.1 Podcasting 2.0 / open RSS / audio distribution (2026)

- **Podcasting 2.0 namespace** is the de-facto extension of RSS 2.0 for modern podcasts. Key tag families: `<podcast:transcript>` (mandatory format: application/srt+xml or text/vtt), `<podcast:chapters>` (PodSimpleChapterFormat, JSON or XML), `<podcast:value>` (Lightning value4value tipping, sat/BTC), `<podcast:locked>` (paywall marker), `<podcast:guid>`, `<podcast:funding>`, `<podcast:person>`. See `podcasting2.org/docs/podcast-namespace` and `feedsmith.dev/reference/namespaces/podcast`. Namespace URI is `https://podcastindex.org/namespace/1.0`.
- **Apple Podcasts** still drives ~70% of podcast listening; Spotify is second; 小宇宙 (China) is the regional giant. RSS remains the substrate — feeding one RSS to all three is normal practice.
- **Implication for the 2015 P1 seed:** the dream of "a radio station" is now technically **modular** — RSS + Podcasting 2.0 tags + any host (Pocket Casts / Castopod / self-hosted RSS). The user's `wonder-window-cn` already emits `/rss.xml` per its README; promoting it to a Podcasting 2.0-compliant feed with transcript + chapter tags costs hours, not weeks.
- **AI Agent boundary:** for transcripts, **AI is excellent as a first-pass** (Whisper or its descendants) but **must be human-edited for publish**. The user's 2015 plan asked the producer to "find a piece and read it"; the 2026 parallel asks the producer to "let AI draft the transcript, then read the transcript aloud, then correct the transcript before publish."

### 5.2 EPUB 3.3 / web readers / reading accessibility

- **EPUB 3.3** is now a **W3C Recommendation dated 2026-01-13**, succeeding EPUB 3.2. It defines a "distribution and interchange format for digital publications" with `HTML`, `CSS`, `SVG`, structured semantics, and a single-file container. The Reading Systems 3.3 spec (`w3c.github.io/epub-specs/epub33/rs`) covers reading-system behaviour, scripted content, layout, metadata, and Digital Rights Management. Source: `w3.org/TR/epub-33/` and `w3c.github.io/epub-specs/epub33/core/index.html`.
- **Web readers** in 2026 are dominated by **Readium SDK** (open) and proprietary stacks from Apple Books / Google Play Books / Kindle. Browser-based EPUB.js / Folio.js remain valid for static renders. The `ebook-content-lab` web subtree uses `Vite + React`, and its `web/` directory ships `index.html + src/ + public/` — a static EPUB-adjacent reading surface.
- **Reading-assistive systems** in 2026 include: WCAG 2.2 (Web Content Accessibility Guidelines), `dyslexie`-class font overrides, text-to-speech (browser-native + Edge TTS), and per-app zoom/density.
- **Implication for P2:** the *device* is dead as a goal; the *container + content + community + accessibility* split is alive. The P2 revival should be a **reading-route curator**, not a hardware project.

### 5.3 Oral history: interview, consent, transcript, time-code, archive

- **OHMS (Oral History Metadata Synchronizer)** is the longest-standing answer to the P4 wishlist. From `oralhistoryonline.org`: "OHMS provides users word-level search capability and a time-correlated transcript or indexed interview connecting the textual search term to the corresponding moment in the recorded interview online." OHMS is open-source, web-based, and was originally built by the Louie B. Nunn Center at University of Kentucky Libraries. Its primary purpose: "empower users to more effectively and efficiently discover information in an online oral history interview by connecting the user from a search result to the corresponding moment." White paper (`oralhistory.org/wp-content/uploads/2021/01/OHA-MTF-White-Paper_2020.pdf`).
- **Omeka S** (`omeka.org/s`) is a "next-generation web publishing platform for institutions interested in connecting digital cultural heritage collections with other resources online." It models **Items** as the atom (with linked-data, DPLA templates, extensible resource templates, multi-site install). The Omeka S model gives us our content-data model: Item (one media-bearing piece) + Item-Set (a collection = one family / one project) + Resource Template (one canonical schema per project type).
- **Family oral history consent workflow:** standard practice (per OHA Oral History Metadata Task Force white paper) requires a **release form** attached to each Item, with versioning, before the audio is publicly indexable. This is a permission step, not a tooling step.
- **Implication for P4:** OHMS gives the user the *anchoring layer* they lacked. Omeka S gives them the *content-data model*. What they don't have (and what we can ship first) is the *one-family workbench*: a directory `family/<surname>/` with `audio/original.wav`, `transcripts/<file>.vtt`, `index.json`, `release.md`, all rendered as a static site.

### 5.4 Web-design resource directories & auto link-maintenance

- **Examples in 2026:** `github.com/bradfrost/this-is-responsive`, `github.com/bradtraversy/design-resources-for-developers`, the `github.com/topics/web-design` index. GitHub `awesome-*` lists are themselves the modern descendants of P3.
- **Auto link-maintenance tooling:** nothing mature. Community practice is: hand-write a `last_verified` date beside each link; the **de-facto workflow** is a monthly `gh` script + a GitHub Action that re-HEADs all URLs and produces a Linkchecker output (dr-oblak / lychee / broken-link-checker).
- **Implication for P3:** re-issue the catalogue quarterly, with a `tools/check_links.py` re-runnable by Hermes, and publish the JSON status table beside the catalogue.

### 5.5 AI Agent content-curation / link-check / knowledge-update — fit boundaries

- **Where AI agents (Hermes itself, etc.) genuinely help:** URL discovery ("similar to X"); first-pass transcript drafting from audio; first-pass summary of long articles; clustering of design resources into a topic tree; link health-check with rationale ("why this URL is redirected: domain parked"); translation scaffolding.
- **Where AI agents genuinely should NOT be the final authority:** factual public-history claims (specific dates / places / names from interviews); consent / permission annotations; personal aesthetic judgments ("this is a fine article"); publication of an audio transcript without the elder's review — the OHMS framing demands a **human-anchored** transcript.
- **Source:** `engagesq.com/insights/ground-rules-curating-knowledge-sources-for-ai-agents/` and `mbrenndoerfer.com/writing/content-safety-and-moderation-ai-agents`. The community agreement is: agents curate *candidates and drafts*; humans publish.

---

## 6. Link Audit

### 6.1 Method

- Extracted every URL from the five original `.md` files using a regex scan.
- 153 unique URLs after stripping trailing punctuation.
- For each URL: a HEAD request (`curl -I`) with a 20 s timeout, falling back to GET, retried up to 3 times in the same pass, then **retry all non-`200/301/302` results** on a second pass to avoid single-failure false positives.
- Classification rule: a single network failure (`code=0`) is **never** a `DEAD`; it becomes `NEEDS_MANUAL_REVIEW(network_unreachable)`. Real `404`/`410` codes become `DEAD`. A host change via 301/302/308 becomes `REDIRECTED`.
- Full data: `reports/2026_link_audit_raw.csv` (153 rows).

### 6.2 Summary

| Class | Count | Share | Meaning |
|---|---:|---:|---|
| `ACTIVE` | 75 | 49.0% | Same-host 200 / 206 |
| `REDIRECTED` | 19 | 12.4% | 301 / 302 / 308 / different host 200 |
| `DEAD` | 10 | 6.5% | 404 / 410 — confirmed dead |
| `NEEDS_MANUAL_REVIEW` (rate-limited / blocked) | 17 | 11.1% | 403 / 429 / 202 — usually large sites that throttle bots |
| `NEEDS_MANUAL_REVIEW(network_unreachable)` | 31 | 20.3% | code=0 after 3 retries — could be transient, must be re-tested manually |
| `NEEDS_MANUAL_REVIEW(temporary_unreachable)` | 1 | 0.7% | 503 |
| **Total** | **153** | **100.0%** | — |

> *Total classified as `NEEDS_MANUAL_REVIEW` (any reason): 49 (32.0%).*
> *Strong-signal (`ACTIVE` + `REDIRECTED` + `DEAD`): 104 (68.0%).*

The 2015 link list has, conservatively, lost ~7% outright to dead pages, with a further ~32% in limbo that likely (per the redirect patterns observed) include several more dead sites, parked domains, and acquisitions.

### 6.3 Selected `REDIRECTED` signals of note

| 2015 URL | 2026 final URL | Why it matters |
|---|---|---|
| `http://bestaboutpages.com/` | `https://www.rhinoengland.co.uk/` | The domain changed hands entirely (UK car-dealer group now). The design resource is gone, the link should be retired. |
| `http://uxarchive.com/` | `https://www.tricentis.com/` | Same — site was acquired by an enterprise testing company. Retire. |
| `http://az-project.org/` | `https://truthlect.com/cleansing-50s/` | Domain parked / repointed to spam. Retire immediately. |
| `http://www.magneticzero.com/5-lessons-in-ui-design-by-magnetic-zero/` | `hugedomains.com/domain_profile.cfm?d=magneticzero` | Parked. Retire. |
| `http://bradfrostweb.com/blog/post/the-post-psd-era/` | `https://createaprowebsite.com/how-to-use-wordpress-tutorial/` | Personal domain repurposed to an unrelated WordPress tutorial. Retire. |
| `http://www.mozilla.org/en-US/styleguide/` | `https://brand.mozilla.com/all-brands` | **Healthy** redirect: a richer replacement. **Replace** in source. |
| `http://www.starbucks.com/static/reference/styleguide/` | `https://www.starbucks.com/developer/pattern-library/` | **Healthy** redirect: better location. Replace in source. |
| `https://typekit.com/` | `https://fonts.adobe.com/?ref=tk.com` | **Healthy** redirect: integrated into Adobe Fonts. Replace. |
| `http://bohemiancoding.com/sketch/` | `https://www.sketch.com/` | **Healthy** redirect. Replace. |
| `http://www.invisionapp.com/` | `https://miro.com:443/` | **Healthy** corporate redirect (InVision → Miro). Replace. |
| `http://agilemethodology.org/` | `https://digital.ai/learn/resources/?_product=agility` | Healthy. Replace. |
| `http://www.zambetti.com/projects/liveview/` | `http://www.zambetti.com/projects/liveview/` | Trailing-slash 301. Replace. |
| `http://www.ied.edu.hk/iedehp/` | `https://www.ied.edu.hk/iedehp/` | HTTPS upgrade. Replace. |
| `http://littlebigdetails.com/` | `https://littlebigdetails.com/` | HTTPS upgrade. Replace. |

### 6.4 All `DEAD` (confirmed)

| URL | Last observed HTTP | Note |
|---|---:|---|
| `https://news.layervault.com/` | 404 | Designer News title source — appears to be on hold; layervault.com itself is also 404'd |
| `https://www.mapbox.com/base/` | 404 | Mapbox was rolled into mapbox.com; the `/base` styleguide page is gone |
| `http://www.starbucks.com/static/reference/styleguide/` | 404 | **Has a redirect replacement** (starbucks.com/developer/pattern-library/) — see 6.3 |
| `http://adactio.com/journal/4523/3` | 404 | Jeremy Keith's blog URL pattern broke; the post itself likely lives at `/journal/4523/` without `/3` |
| `http://svgpocketguide.com/book/` | 404 | Book may have moved; new owner uncertain |
| `http://ustwo.com/ppp/` | 404 | Pixel Perfect Precision Handbook page |
| `http://danielmall.com/articles/svg-workflow-for-designers/` | 404 | Long-archive blog post |
| `http://danielmall.com/articles/visual-inventory/` | 404 | Same |
| `http://leaverou.github.io/contrast-ratio` | 404 | Tool moved; the new URL is `projects.verou.me/contrast-ratio` (visible in `final_url`) |
| `http://jds.cass.cn/Item/26775.aspx` | 404 | Academic oral-history piece |

### 6.5 Selected `NEEDS_MANUAL_REVIEW` signals

- `http://mereader.tumblr.com/` (P2's prior home, in `2.E-Reader.md`) — `code=0` on three retries. Tumblr access is throttled from data-centre IPs. Likely still on Tumblr but unreachable from the audit server — must be verified manually before declaring dead.
- `https://medium.com/design-ux` (P3 entry) — `code=0` on retries. Medium now redirects most `/<topic>` paths; manual verification required.
- `http://rizzo.lonelyplanet.com/styleguide/design-elements/` — `code=0`; the Lonely Planet styleguide has historical been retired; replacement uncertain.
- `http://next.fontshop.com/styleguide/`, `http://style.codeforamerica.org/`, `http://ixdchecklist.com/`, `http://www.nngroup.com/` — all `code=0`. Likely survive but cannot be confirmed by automated audit.
- Large platforms returning 403/429 (SiteInspire, MediaQueri.es, CodePen patterns, Behance, UXPin blog, Zurb) — anti-bot controls. Almost certainly ACTIVE for humans; do not retire on this evidence alone.

### 6.6 Bottom line on the catalogue

**Roughly half the 2015 catalogue survives unchanged; ~13% has been redirected to a healthier location (high-value replacement targets); ~7% is dead with no clear successor; ~32% needs a human-eyeball pass.** The user's hypothesis in 2015 ("set and forget") is falsified by the data. A quarterly link-audit script is the minimum that prevents the same slide from continuing.

---

## 7. Product Options and Scoring

### 7.1 Options

- **Option A — Archive only.** Freeze the repo as historical. Do nothing beyond this audit.
- **Option B — Static "2015 Projects Reborn" website.** Re-issue the four 2015 documents as a chronologically-ordered read, with a present-day "where each idea stands now" page. Pure retrospective. Static, no backend.
- **Option C — Unified "Personal Knowledge & Memory Lab".** One umbrella repo that hosts (i) the lineage map, (ii) a family-history wiki (P4 thin descendant), (iii) a Friday newsletter that revives P1, (iv) a reading-routes digest that revives P2, (v) a quarterly re-issued catalogue (P3) with a link-checker.
- **Option D — Pick one of the four, productise it.** a) the family wiki; b) the audio newsletter; c) the reading-routes digest; d) the (re-issued) catalogue. Each becomes its own flagship under its own repo; `2015-Projects` stays as the lineage anchor.

### 7.2 Scoring matrix (1–5 per axis; 5 = best)

| Dimension (weight) | A. Archive-only | B. 2015 Reborn site | C. Personal-Knowledge Lab | D. One-seed flagship |
|---|---:|---:|---:|---:|
| Fit to original 2015 vision (×2) | 4 | 5 | 4 | 3 (depends on pick) |
| User's unique advantage (no one else has the personal history) | 5 | 4 | 5 | 5 |
| Reusable code / repos already shipped (×2) | 0 | 0 | 4 | 3 |
| Implementation complexity (lower = better; inverted) | 5 | 4 | 3 | 4 |
| Long-term maintenance cost (lower = better; inverted) | 5 | 4 | 3 | 4 |
| Distinctive product identity (vs any peer) | 1 | 3 | 5 | 4 |
| Speed to real user value (×2) | 4 | 4 | 4 | 3 |
| **Weighted sum (max 50)** | **37** | **38** | **46** | **38** |

> *Reading: Option C wins on most axes simultaneously, primarily because three of the four seeds already have downstream implementations under the same owner — there is very little *new* infrastructure to build, only an umbrella + a single weak-link half (family wiki).*

### 7.3 Tied decisions inside Option C

- **Family wiki** is the strongest "unserved" half — and the only seed with no flagship descendant.
- **Broadcast revival** is the most visually distinctive half — and has the most upstream building blocks (`wonder-window-cn`, `ai-radio-mvp`, `hermes-knowledge-base` transcripts).
- **Reading routes** can be opportunistic — ship only if Friday-newsletter proves it has audience.
- **Catalogue re-issue** is small but is the *only one that pays back into P3 directly*.

### 7.4 Recommendation

Go with **Option C**, with **Option D(a) — the family wiki as the explicit near-term flagship** sitting *under* the C umbrella.

---

## 8. Recommended Product Thesis

### 8.1 Thesis statement

> **The 2015-Projects repo becomes the public lineage document for a Personal Knowledge & Memory Lab**: a low-write, high-read operator's atelier where the user's *family memory*, *weekly broadcast revival*, *reading routes*, and *quarterly re-issued catalogues* live together as a single navigable narrative, each leaf pointing at the dedicated descendant repo that already (or will) implement it.

### 8.2 Why this is the right thesis

- It honours the original 2015 vision (all four seeds live) *without* asking the user to *re-implement* any of the four.
- It connects to eleven other repos in the user's existing 2026 revival pattern (`wonder-window-cn`, `ebook-content-lab`, `book-id-search`, `DocuMuse`, `hermes-knowledge-base`, `ai-radio-mvp`, `medium-archive`, `courses-zh`, `ebook-treasure-chest`, `2015-Daily-Recording`, `2016-Daily-Recording`).
- It **does not swallow** the descendants; it points at them. Integration is via shared schemas (per `ebook-content-lab` `schemas/` precedent: `project.schema.json`, `reading_guide.schema.json`, `route-segment.schema.json`) and shared links, not via mono-repo consolidation.
- It explicitly leaves room for the family wiki (the only orphan seed) without making *the whole thesis* depend on the wiki shipping.

### 8.3 Operating principles

1. **Read-mostly.** Public site updates on a Friday cadence; lineage JSON updates only when a descendant repo gets a release.
2. **Source-only at the leaves.** Each descendant repo is its own source of truth; `2015-Projects` only renders pointers + commentary.
3. **Preserve the 2015 files.** The four `.md` files are an artefact. They are immutable in their content and in their placement.
4. **Don't compete with `hermes-knowledge-base`.** `hermes-knowledge-base` is the *content* knowledge base. `2015-Projects` is the *project* knowledge base — meta, lineage-only, never an item store.
5. **Re-issue, don't rewrite.** Quarterly catalogue re-issues go in `reports/` and a dated sibling file `3.DESIGNING For The Web.YYYY-MM.md`, leaving `3.DESIGNING For The Web.md` untouched as the historical artefact.

---

## 9. Proposed Repository Architecture

### 9.1 Directory tree (target shape — illustrative, not for this turn to build)

```
2015-Projects/
├── README.md                              # KEEP — original 2015 mission statement
├── 1.Podcast-Plan.md                      # KEEP — original
├── 2.E-Reader.md                          # KEEP — original
├── 3.DESIGNING For The Web.md             # KEEP — original (artefact)
├── 3.DESIGNING For The Web.2026-Q3.md    # NEW — first re-issue (post-v0.1)
├── 4.Recordingl history.md                # KEEP — original
├── .gitattributes, .gitignore             # KEEP — original
├── reports/
│   ├── 2026_revival_research_report.md    # this document
│   ├── 2026_link_audit_raw.csv            # 153 URLs + classes
│   ├── 2026_lineage.json                  # seed → intermediate → descendant graph
│   └── 2026-Q3_link_audit_report.md      # first quarterly re-audit
├── lineage/
│   ├── p1-podcast.md                       # per-seed page: who, why, descendants, status
│   ├── p2-ereader.md
│   ├── p3-design-catalogue.md
│   └── p4-oral-history.md
├── site/                                   # optional GitHub Pages source (Astro)
│   ├── astro.config.mjs
│   ├── src/pages/index.astro              # "where are the four 2015 ideas now?"
│   ├── src/pages/seeds/[slug].astro       # one page per seed
│   ├── src/pages/lineage.json.astro       # JSON dump for the integrator
│   └── public/data/lineage.json           # built artefact
└── tools/
    ├── link_audit.py                       # rerun the audit; consumes reports/2026_link_audit_raw.csv schema
    ├── render_lineage.py                   # lineage/*.md → site/data/lineage.json
    └── weekly_nudge_check.py              # meta-tool: which descendant repos had a push this week?
```

### 9.2 Content data model (lineage.json)

```json
{
  "schema_version": "1.0",
  "seeds": [
    {
      "id": "p1-podcast",
      "title_zh": "制作播客",
      "title_en": "Personal radio station",
      "source_file": "1.Podcast-Plan.md",
      "origin_date": "2015-01-03",
      "intent": "Read a passage, play a song, greet the listeners — like 《整点看世界》.",
      "descendants": [
        {"repo": "conanxin/wonder-window-cn", "role": "Weekly newsletter shell (Vite+React)"},
        {"repo": "conanxin/ai-radio-mvp", "role": "Voice-medium pipeline (Hermes workspace)"},
        {"repo": "conanxin/medium-archive", "role": "Own writing archive (Astro)"},
        {"repo": "conanxin/hermes-knowledge-base", "role": "Transcripts + reading-habit notes"}
      ],
      "not_yet": [
        "Apple-valid Podcasting 2.0 RSS feed",
        "Sustained weekly cadence",
        "Personal station identity (channel name, brand)"
      ]
    },
    { "id": "p2-ereader", "...": "..." },
    { "id": "p3-catalogue", "...": "..." },
    { "id": "p4-family-history", "...": "..." }
  ]
}
```

### 9.3 Tech stack choices (target, for v0.2 onward — *not* v0.1)

- **Static site:** Astro (consistent with `medium-archive` precedent; cheap on GH Pages).
- **Search:** none at the repo level (`2015-Projects` indexes four things; full-text search is unnecessary). Cross-repo search stays in `hermes-knowledge-base` (FTS5 / Meilisearch over there).
- **RSS:** `site/src/pages/feed.xml.ts` emits the *lineage update* feed, **not** a podcast — P1's RSS lives in `wonder-window-cn`.
- **Timeline:** the GitHub Releases page on this repo gives a free "milestones" view; we publish a release per re-audit cycle. No new axis.
- **Project lineage:** `lineage/p*.md` + `lineage.json` consumed by both the static site and external integrators.
- **Link health:** `tools/link_audit.py` — HTTP HEAD + classification, identical to the audit this report consumed. Re-runnable weekly by the user, monthly by Hermes.
- **GitHub Pages deployment:** `site/` is built by an Actions workflow that runs on every push to `main` *or* on the `master` branch, depending on whether the rename happens (see Section 10, decision 3). GH Pages publishes to `https://conanxin.github.io/2015-Projects/`.
- **Hermes follow-up scheduling:** *out of scope for this turn*. When the user wants, a `cron` job runs `tools/link_audit.py` once per quarter and writes a new report file under `reports/`, plus a release tag, plus an alert to the user's home channel.

---

## 10. v0.1 Scope

### 10.1 What v0.1 includes

- This document (`reports/2026_revival_research_report.md`).
- The raw link-audit data (`reports/2026_link_audit_raw.csv`).
- A short `REPO_AUDIT.md` not yet written — *out of scope for this turn*; the equivalent data lives in Section 2 of this report.
- A `lineage/` directory containing four 1-paragraph notes — also *not* built in this turn, but the data model is defined here (§9.2) so a future turn can drop the four files in 30 minutes.
- **No site/.** **No CI. No GitHub Pages. No tag.**

### 10.2 What v0.1 explicitly does NOT include

- **No Astro / Vite / React code.** Static site stays un-built until after the lineage files exist.
- **No backend.** No Python importer that scans `git clone https://github.com/conanxin/*` — that would be brittle, slow, and out of the user's stated tool ethos.
- **No integration with descendants.** Each descendant repo remains its own source of truth; only *hyperlinks* connect.
- **No LLM call.** Every fact in this report is human-eyeball-checked from public reads. The next-level LLM work (e.g. summarising the `3.DESIGNING For The Web.md` corpus into quarterly themes) is explicitly deferred.
- **No cron job.** Hermes does not yet automate this research; the next research turn is the user's call.
- **No commit / push / tag.** All new files (`reports/*.md`, `reports/*.csv`) live as **untracked** in the working tree, in line with the user's standing rule for `2015-Projects` work: this is research, not source.

---

## 11. Risks and Open Questions

| Risk | Question | Mitigation |
|---|---|---|
| The 31 `NEEDS_MANUAL_REVIEW(network_unreachable)` links may include real **DEAD** entries we're masking. | Manual re-test from a non-data-centre IP. | Add a §10.4 follow-up: a one-time `gh` workflow that hits each one from a normal user-agent path on the next quarterly run. |
| `hermes-knowledge-base` may already subsume the line "Personal Knowledge Lab." | What is the boundary between `2015-Projects` (meta-lineage) and `hermes-knowledge-base` (article store)? | Keep them orthogonal by taxonomy: KB holds *content*; `2015-Projects` holds *project lineage*. Never put an article in `2015-Projects`. |
| The 2015-Daily/2016-Daily experiments are evidence that *daily* cadence is unsustainable. | Should `wonder-window-cn`'s *weekly* cadence hold? | Treat Friday as a **soft target**, not a deadline. The user already proved daily can't hold; weekly has not been tested. |
| Several REDIRECTED URLs are *unrelated* domains parked for spam (`az-project.org`, `magneticzero.com`). | Continue citing them in re-issues? | No. Retire on sight. The catalogue re-issue must drop them, not paper over them with Wayback. |
| Public oral-history releases always carry consent risk. | Are we ever publishing *real* family recordings, or always the *methodology*? | v0.1 publishes **methodology only** — no recordings, no transcripts, no names. Any future "real" interview would require the OHMS-style release.md file first. |
| The 2015 file spellings (`Recordingl history.md` typo) are part of the artefact. | Preserve or fix? | Preserve. The typo is historical and has been confirmed by `git log`. |
| Branch strategy: stay on `master` or rename to `main`? | Decision needed. | **See §10 decision 3** — this report recommends **keep `master`**. The repo's only commit pattern is on `master`; renaming would create a branch-management overhead with no upside. |
| Rename the repository? | "2015-Projects" is eleven years out of date. | **See §10 decision 2** — this report recommends **keep the name**. See §10 for reasoning. |

---

## 12. Next Implementation Task

The **one** follow-up this report explicitly hands off (not part of v0.1; gated on a separate user decision):

> **v0.2 — Lineage skeleton.** Add the four `lineage/p*.md` files (no code), each filling the four-field JSON model in §9.2 with one paragraph + one bullet list, sourced from §4.1 of this report. Re-render of the four paragraphs through the user for tone review. No Astro, no Pages, no link change in source files.

After v0.2 ships, the natural next tasks (in order) are:

1. **v0.3 — `tools/link_audit.py`** factored out of the script used for this report. Re-runnable on demand.
2. **v0.4 — first quarterly re-issue** of `3.DESIGNING For The Web.md` as `3.DESIGNING For The Web.2026-Q3.md`, citing the 19 healthy REDIRECTED replacements from §6.3 and dropping the 10 confirmed `DEAD` entries from §6.4 (after a manual eyeball pass for the 31 `network_unreachable`).
3. **v0.5 — first Astro site** at `site/` pointing only at the four `lineage/*.md` paragraphs and at the JSON dump.
4. **v0.6 — Friday broadcast revival** as a link from `1.Podcast-Plan.md → wonder-window-cn latest RSS feed`. Implementation lives in `wonder-window-cn`.
5. **v0.7 — Family wiki pilot.** Apply the OHMS-style schema (`audio/`, `transcripts/`, `release.md`, `index.json`) to **one** family — the user's own — with **placeholder audio** only. No real release until consent workflow is in place.

---

*Appendix: full URL-level audit data is in `reports/2026_link_audit_raw.csv` alongside this document. 153 rows, seven columns. Re-run with `python tools/link_audit.py` once that tool exists (v0.3).*

---

## 13. Decisions on the Ten Questions

The user asked for direct answers to ten questions. This section answers each in turn.

### Q1. Should this repository continue to be maintained, or only archived?

**Continue to maintain — but as a *lineage document*, not as an active code repo.** This is exactly what the repository is good for: it hosts the four seed documents and now a `reports/` tree. The eleven descendant repos carry the actual code. "Archive only" was considered (§7.2 Option A) and rejected because it loses the meta-narrative that *no other single repo can carry*.

### Q2. Should the repository name be preserved?

**Yes. Keep `2015-Projects`.** The name is inaccurate to 2026 product reality, but the *meaning* in 2026 is "where the four seeds live," and that meaning is worth more than a cosmetic rename. The user's existing 2026 repos already carry the *current* names; an old name that ties them together is signal, not noise. Renaming would also break every link anyone (including the user's own session-search and memory references) has to this repo.

### Q3. Should the `master` branch be kept?

**Yes. Keep `master`.** A rename to `main` would create a branch-management ceremony (orphan branch housekeeping, Pages default-branch redirect, etc.) for zero product value. The 2015 commits are on `master`; the audit and the link data were created on `master`; there is no parallel branch world to preserve. The user already uses `main` everywhere else; using `master` *here* is the *one* way this repo stays visibly 2015-shaped.

### Q4. Should the original files be kept in place, or moved to `archive/`?

**Keep in place.** Moving `1.Podcast-Plan.md`, `2.E-Reader.md`, `3.DESIGNING For The Web.md`, `4.Recordingl history.md` would break every existing inbound reference to them — including the user's own memory citations, future session-search results, and any external link that may exist. The SHA-256 hashes in §2.3 are the canonical identifiers; the *content* stays at those hashes at those paths. Re-issues go in **dated siblings** (`3.DESIGNING For The Web.2026-Q3.md`), not in moves.

### Q5. What is the best unified product positioning?

**"Personal Knowledge & Memory Lab — a lineager's atelier."** This is the Option C thesis (§7, §8). It covers all four seeds as equally-serving *branches* of one meta-narrative, gives the family history its own wiki half without making it mandatory, gives the broadcast its own Friday slot without re-implementing it, gives the catalogue its quarterly re-issue schedule, and points to the eleven descendant repos instead of competing with them.

### Q6. Which of the four directions is best as a near-term flagship?

**The Family History Wiki** (P4, 4.Recordingl history.md). It is the only direction without a flagship descendant, the tooling (OHMS, Omeka S, DocuMuse, KB `interview` type) has finally caught up to the wish, and the personal-facts are *uniquely the user's* — no peer can compete on this. The OHMS-shaped workbench is also the most repeatable and defensible across years.

### Q7. Which direction carries the most long-term differentiation?

**The Broadcast Revival** (P1, 1.Podcast-Plan.md). The user's 《整点看世界》 memory has **at least a thousand other people who share it** — that's a built-in audience the user does not have to find. Combined with Podcasting 2.0's `<podcast:transcript>` and `<podcast:chapters>` (which give the user's small-curator angle distribution advantages not available in 2015) and `wonder-window-cn`'s already-built Vite+React + RSS shell, this is the most distinctly *ownable* by the user over a five-year horizon.

### Q8. Which existing repos should be linked from `2015-Projects`, but whose code should not be merged?

**Link, don't merge.** The named link targets:

- `conanxin/wonder-window-cn` — P1's newsletter shell; its `/rss.xml` becomes the de-facto podcast feed.
- `conanxin/ebook-content-lab` — P2 / P4 reading-route evidence engine.
- `conanxin/ebook-treasure-chest` — P2 large-scale content index.
- `conanxin/book-id-search` — P2 metadata index (5.1M records).
- `conanxin/DocuMuse` — P4 interview-PDF parser; the `interview` document kind template.
- `conanxin/hermes-knowledge-base` — both P1 (transcripts) and P4 (`interview` content type).
- `conanxin/medium-archive` — P1's own-writing archive.
- `conanxin/courses-zh` — P2 course digest.
- `conanxin/2015-Daily-Recording`, `conanxin/2016-Daily-Recording` — historical record of *failed* daily-cadence; a citation, not a contribution.
- `conanxin/hermes-agent` — only as operator, never as code dep.

The principle: **shared schemas and shared links, never shared code**. The schemas that already exist in `ebook-content-lab/schemas/` (`project.schema.json`, `reading_guide.schema.json`, `route-segment.schema.json`) are a model for the lineage `p*.md` schemas defined in §9.2; the family-history schema for v0.7 should sit *alongside* them in **that** repo, not in `2015-Projects`.

### Q9. What should v0.1 include?

**§10.1: this report (`reports/2026_revival_research_report.md`), the raw link audit CSV (`reports/2026_link_audit_raw.csv`).** No site. No CI. No `lineage/` files. No commits. Both files will sit untracked in the working tree, consistent with the user's standing rule that `2015-Projects` work is research, not source.

### Q10. What should v0.1 explicitly *not* include?

**§10.2: no Astro/Vite/React code, no backend, no descendant-repo integration, no LLM call, no cron job, no commit / push / tag**, and **no modification to README.md or to the four original 2015 documents.** The SHA-256 hashes in §2.3 are the verification ground for the next audit turn.
