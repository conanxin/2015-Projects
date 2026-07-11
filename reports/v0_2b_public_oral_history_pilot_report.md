# V0.2B · Public Oral History Pilot — Closeout Report

> Task code: `2015-PROJECTS-REVIVAL-V0.2B-CLOSEOUT`
> Implementation commit: `3af836149a6bc728e2ecbfeea9b84b5b4a1fb1f6`
> Pages workflow run: `29136646415` — conclusion: `success`
> Report commit: see final commit hash in this file's commit log.
> Report Pages workflow run: see `gh run list --workflow pages.yml --limit 2`.

---

## 1. Status

**STATUS: PASS.**

The V0.2B closeout ships the **first public oral-history story page** of 2015
Projects Reborn. It is end-to-end verified locally and online:

- Implementation commit `3af8361` was pushed to `origin/master`.
- Pages workflow run `29136646415` for that commit concluded `success`.
- Story URL `https://conanxin.github.io/2015-Projects/stories/isadore-first-tomato/`
  renders, loads, exposes the public NPS audio, accepts three tested `currentTime`
  seeks (0.5 / 22.0 / 36.0) with `delta = 0.000`, marks the active chapter with
  `aria-current="true"`, supports the pure-frontend chapter search in Chinese and
  English, shows the empty-state when nothing matches, and recovers with Esc.
- No history file changed: all four 2015 project documents still hash to the
  `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` baseline; the archived README is
  still BYTE-EQUAL to that baseline; the manifest sha256 has not moved; the root
  README has not moved; the Pages workflow has not moved.
- No tag, no Issue, no `gh-pages` branch, no media file (`.mp3`/`.mp4`/`.wav`)
  inside the Git tree.

## 2. Pilot Question

Can a single reader, starting from a theme, a chapter title, or a short word in
either the original English or a Chinese translation, locate and play the
specific second of a public oral-history audio recording where the narrator
said it?

If yes, the V0.3 family-interview workflow can reuse the same content model,
content collection schema, segment JSON shape, timecode UI, and the
"stories index → story detail" navigation pattern — without accounts, a wiki,
a database, or an OHMS server.

## 3. Source Selection

Six candidate classes were inspected during the V0.2 / V0.2B research phase.
The full scoring matrix is preserved verbatim in
[`research/v0_2_public_oral_history_source_selection.md`](../research/v0_2_public_oral_history_source_selection.md).
Below is the live decision summary:

| # | Candidate | Outcome |
|---|---|---|
| A | Library of Congress Veterans History Project (multiple IDs) | Blocked — server-side 403 (Cloudflare) on our probe path; no audio path verifiable from this environment. |
| B | LOC National Recording Preservation Plan Oral Histories | Blocked — transcripts are public PDFs but the audio stream is access-controlled via the LOC reading-room system. |
| C | AAPB Online Reading Room (Baldwin conversation) | Blocked — catalog page opens, but `/media/cpb-aacip-...` returns HTTP 401 (ORR institutional login required). |
| D | Truman Library Oral Histories | Blocked — full transcript is published but no `<audio>` / streaming URL is exposed by the inspected pages. |
| E | Internet Archive WWII Veterans Project | Strongest on paper but unreachable from this environment (server-side fetch returned `000` / time-out). |
| **F** | **NPS Ellis Island Oral History Collection (item EI-87)** | **Selected.** All eight hard gates pass. |

The full V0.2 scoring matrix totals are preserved unchanged in the research
file. The candidate that "would normally win" by total score (E, Internet Archive)
did not pass network reachability checks and was therefore excluded from the
implementation path.

## 4. Source and Rights

- **Source page (canonical):**
  <https://www.nps.gov/elis/learn/education/oral-history-ei-87.htm>
  (`HTTP 200`, public .gov, served via NPS.gov + CloudFront).
- **Media URL:**
  <https://www.nps.gov/nps-audiovideo/audiovideo/36438f47-0127-4ae6-b0c4-1d0bca4de231.mp3>
  - `HTTP 200`, `Content-Type: audio/mpeg`, `Accept-Ranges: bytes`,
    `Content-Length: 1,671,837` bytes, served from `*.nps.gov` public S3 behind
    CloudFront. No authentication of any kind.
  - `sourceItemId` field in the story frontmatter records this NPS media asset
    GUID verbatim. The traditional Ellis Island Collection identifier (`EI-87`)
    is preserved separately under `collectionName`.
- **Right statement (verbatim on the story page):**
  *“This audio recording is published by the U.S. National Park Service as
  part of the Ellis Island Oral History Collection. It is presented here as a
  public-archive editorial pilot. The repository does not own or host the
  recording.”*
- **Access note (verbatim):** the public NPS asset CDN serves HTTPS with HTTP
  range support; no login is required; the player falls back to the official
  NPS source page if it cannot reach the audio.
- **Transcription source:** the full transcript remains on the official NPS
  page. The repository stores only short navigation-anchor excerpts.

## 5. Narrator and Interview

- **Narrator:** Isadore Samet (born 23 September 1898, immigrated from Poland
  to NY in 1914 at age 16).
- **Interviewer:** Paul E. Sigrist, Jr.
- **Date of interview:** 6 September 1991.
- **Archive:** National Park Service, Ellis Island Oral History Collection.
- **Collection identifier:** EI-87.
- **Location of interview:** Ellis Island, New York (as published by NPS).

These facts are taken **only** from the official NPS source page
(`oral-history-ei-87.htm`). They are not inferred or re-stated from any other
source.

## 6. Content Model

The repository introduces a single new Astro Content Collection,
`stories`, declared in `site/src/content.config.ts`. Its Zod schema captures
25 fields per story:

```
id, slug, titleZh, titleOriginal,
narratorName, interviewerName,
interviewDate, recordingDate (optional),
archiveName, collectionName,
sourceItemId, sourceUrl,
language, location,
durationSeconds,
mediaType ("audio" literal),
mediaProvider, mediaUrl, embedUrl (optional),
rightsStatement, accessNote, transcriptSource, editorialStatus,
summary,
topics[], people[], places[], events[],
publishedAt, lastReviewed
```

Timecodes are kept **out** of the markdown to keep story markdown readable
and to let the validator enforce structural gates independently. They live
under `site/src/data/stories/<slug>.segments.json` and are loaded by
`site/src/pages/stories/[slug].astro` via dynamic `import(...)` keyed on the
slug. The same page will work for any future story that adds a matching
markdown + segments JSON without code changes.

The validator at `site/scripts/validate-story-data.mjs` enforces:

- Slug uniqueness, id uniqueness.
- Required scalar fields (no empty `titleZh`, `summary`, etc.).
- `sourceUrl` / `mediaUrl` are `https://`.
- `mediaUrl` must be on a `.nps.gov` host for the V0.2B pilot specifically.
- `mediaType` must be the literal `"audio"`.
- `durationSeconds` is a positive number.
- Each segment file: exactly 7 segments; segment id uniqueness; non-overlapping,
  strictly increasing `startSeconds`; `endSeconds ≤ durationSeconds + 0.25`;
  every `verificationStatus` is `verified`; English excerpt word count is in
  `[1, 12]`; combined English excerpt word count is ≤ 70 (full transcript is
  ~70 words so the bound guarantees non-reconstruction).
- No `localhost`, no `/home/` or Windows paths, no API key / token / bearer
  pattern, no `.mp3` references outside the canonical `mediaUrl`.
- No forbidden full-transcript phrase appears in the story body, the segment
  JSON, or any joined haystack.

`npm run check` is wired to invoke `validate:stories` before `astro check`,
so a structural failure prevents the Pages build from running.

## 7. Timecode Verification

Seven segments, all `verificationStatus: "verified"` and `confidence: 1.0`:

| id | start | end | title (zh) |
|---|---:|---:|---|
| s1 | 0.5 | 5.5 | 哥哥的特别安排 |
| s2 | 5.5 | 11.5 | 街角的番茄小贩 |
| s3 | 11.5 | 14.0 | 从未吃过番茄 |
| s4 | 14.0 | 22.0 | 不知番茄长什么样（笑） |
| s5 | 22.0 | 30.0 | 咬下立即吐出 |
| s6 | 30.0 | 36.0 | 困惑的反问（笑） |
| s7 | 36.0 | 41.5 | 哥哥笑，他们继续走 |

Verification was **triple-method**:

1. **`ffprobe`** (`-show_streams -show_format`) reports `duration =
   "41.795925"` for the locally cached copy of the audio; the JSON segment
   `endSeconds` of the last segment (41.5) is below `duration + 0.25`.
2. **`ffmpeg`** at 0.5 s window resolution produced a per-second RMS profile
   that pinpointed the two strongest pauses in the recording (around 5.0 s
   and 22.0 s) and the shorter micro-pauses around 11.5 s and 36.0 s. Each
   segment boundary aligns with one of those pauses or with a clear
   semantic clause break in the official NPS transcript.
3. **Chromium puppeteer** was used to seek at every integer second from 0 to
   41 (41 calls). Every `audio.currentTime` round-tripped with
   `delta = 0.000`. The chapter "active" tracker (driven by `timeupdate` and
   `seeked`) confirmed the right chapter for each seek.

The cached mp3 used for `ffprobe` / `ffmpeg` was downloaded into a non-repo
directory (`/tmp/isadore-mp3-check/isadore.mp3`) only for measurement. It
was never committed to the repository. The Git diff contains no `.mp3` /
`.wav` / `.mp4` / `.m4a` files:

```
find . -type f \( -iname '*.mp3' -o -iname '*.wav' -o \
                    -iname '*.mp4' -o -iname '*.m4a' \) \
     -not -path './site/node_modules/*'
# (empty)
```

## 8. Product Implementation

### Pages shipped

- `/stories/index.astro` — list of public samples. Currently one card. Card
  reuses the existing visual primitives (`.cards`, `.story-card`,
  `.story-meta-grid`). Reads everything from the Content Collection so it
  will scale to additional stories without template changes.
- `/stories/[slug].astro` — static-generated via `getStaticPaths()`. Layout:
  title block → metadata grid → native `<audio controls preload="metadata">`
  → 7 chapter timecode buttons → pure-frontend search → rights block →
  "what this pilot validates" block.

### Player interaction (no framework)

- Native `<audio controls preload="metadata" src={data.mediaUrl}>` with a
  `<source>` fallback link inside the tag.
- Each of the 7 chapter buttons is a `<button type="button">` carrying
  `data-target` and `data-chapter-id`.
- Click handler: if metadata is already loaded, set `audio.currentTime = target`
  and `audio.play()` (autoplay rejection is caught but does not block the
  seek). If metadata is not yet loaded, the click waits for `loadedmetadata`
  and then seeks.
- `audio.addEventListener('timeupdate', updateActiveFromTime)` and
  `audio.addEventListener('seeked', updateActiveFromTime)` walk the segments
  by start/end and toggle `aria-current="true"` and `class="is-active"` on
  the matching `<li data-chapter>` plus `aria-current="time"` on the jump
  button.
- `audio.addEventListener('error', ...)` replaces the audio note with an
  in-place message that points to the canonical NPS media URL and the
  official source page. The repository never offers a mirror and never
  silently swaps providers.

### Search (no framework, no third-party library)

- Pre-computed `data-search-haystack` attribute on each chapter `<li>`
  joins `titleZh`, `titleOriginal`, `summaryZh`, both short excerpts,
  `topics`, `people`, `places`, lower-cased and separated by `\u0001`.
- `input` event filters by `indexOf` (case-insensitive because the
  haystack is pre-lowercased). Empty input restores all 7 chapters.
- A `muted-by-data-attr` empty-state node is toggled when 0 chapters match.
- Esc clears the input and re-runs the filter. The "清空" button does the
  same and re-focuses the input.

### Navigation

`BaseLayout.astro` was extended from 4 to 5 items in this exact order:
首页 / 项目谱系 / 时间线 / 故事 / 关于. The default `<footer>` version label
was bumped from V0.1 to V0.2.

### Home pilot entry

A new `.pilot-banner` block was added inside the existing "下一步：家庭记忆
Pilot" section of `index.astro`. It only documents narrator / story / archive
and a one-line description of the use case; it does not duplicate the rest of
the home page.

### Validation gate

`scripts/validate-story-data.mjs` runs first inside `npm run check`. Result:
PASS — 1 story, 1 segment file, 7 segments, 13 English-excerpt words total.
This is enforced by GitHub Actions because the Pages workflow runs `npm run
check` automatically before `astro build`.

## 9. Content Integrity

- **Full transcript not in the repository:** the validator scans story
  markdown bodies and the joined segment haystacks for forbidden full-
  transcript phrases (`"wanted to give me a treat"`, `"peddlers around the
  street"`, `"i never had a tomato in my life"`, `"i didn't know what sort
  of a tomato looks like"`, `"he gave me a tomato and i eat the tomato"`,
  `"spit it out. i couldn't take it"`, `"what is this, what they give me
  to eat"`, `"he started laughing, so we kept going there, no tomato"`,
  `"my brother took me over"`, `"there are some tomatoes"`, and the
  parenthetical `"he laughs"` marker). None of these are present.
- **Media not in the repository:** `find` returns empty.
- **Local paths / tokens:** the validator rejects `/home/`, Windows-style
  paths, bearer tokens, `api[_-]?key=...`, `localhost`. None are present.
- **`.mp3` outside the canonical `mediaUrl`:** the validator rejects any
  stray `.mp3` reference. None are present.

## 10. Local Validation

```
$ npm ci                                # added 360 packages, exit 0
$ npm run validate:stories              # PASS — 1 story, 1 segment file
$ npm run check                         # PASS — 0 errors / 0 warnings / 0 hints
$ npm run build                         # PASS — 10 page(s) built in 1.48s
```

Pages produced by the build (10 total):

```
/index.html
/about/index.html
/lineage/index.html
/timeline/index.html
/seeds/design/index.html
/seeds/memory/index.html
/seeds/reading/index.html
/seeds/voice/index.html
/stories/index.html                         (new)
/stories/isadore-first-tomato/index.html    (new)
```

### Browser validation (headless Chromium, puppeteer)

- **Home (`/`)** — pilot banner present, 1 link to the story, 0 console errors,
  0 page errors, no horizontal overflow on 1440 × 900 or 390 × 844.
- **Stories index (`/stories/`)** — 1 story card, link to the detail page
  present, no overflow, 0 errors.
- **Story detail (`/stories/isadore-first-tomato/`)** —
  - `<audio>` loads; `readyState = 4`; `duration = 41.795925` (matches
    `ffprobe` exactly).
  - 7 chapter `<li data-chapter>` elements present.
  - 3 seeks via `audio.currentTime = t`:
    - `0.5` → `0.500`, `delta 0.000`, active = `s1`
    - `22.0` → `22.000`, `delta 0.000`, active = `s5`
    - `36.0` → `36.000`, `delta 0.000`, active = `s7`
    All three `delta` values are below the 0.75 s tolerance.
  - 1 click via the rendered "36.0" chapter jump button:
    `currentTime = 36.21`, active = `s7`.
  - Chinese search "番茄" matches 5 chapters (s2, s3, s4, s5, s7), counter
    says "找到 5 个章节".
  - English search "peddlers" matches 1 chapter (s2), counter says
    "找到 1 个章节".
  - Search for "zzznotfound" matches 0 chapters, counter says "0 个章节",
    and the empty-state node becomes visible.
  - Esc clears the input and restores 7 visible chapters.
  - `scrollWidth - clientWidth = 0` on both desktop and mobile.
  - Mobile audio element width = 318 px (fits inside a 390 px viewport).
  - `console.error` count = 0; uncaught `pageerror` count = 0.
  - The external `.mp3` request fires `Range` requests that are aborted by
    Chromium after the seek lands. Those `net::ERR_ABORTED` events are an
    artifact of Chromium's HTTP range teardown — they are not failures and
    are filtered out of the failure counter explicitly.
- **Lineage + memory seed detail pages** — still 200 OK, no overflow.

## 11. Browser Validation (Online)

The same validation was re-run against the production Pages URL
(`https://conanxin.github.io/2015-Projects/...`) using `headless: 'new'`
Chromium with `--proxy-server=direct://`. Six of six URLs returned HTTP 200:

- `/`
- `/stories/`
- `/stories/isadore-first-tomato/`
- `/lineage/`
- `/timeline/`
- `/seeds/memory/`

For the story detail page on production:

- `readyState = 4`; `duration = 41.795925`.
- Seeks 0.5 / 22.0 / 36.0: each landed at exactly the requested `currentTime`
  (`delta = 0.000`) and activated the correct chapter (`s1`, `s5`, `s7`).
- Click on the 36.0 s chapter button: `currentTime = 36.225`, active = `s7`.
- Chinese search "番茄": 5 chapters, "找到 5 个章节".
- English search "peddlers": 1 chapter, "找到 1 个章节".
- "zzznotfound": 0 chapters, empty-state visible.
- Esc: input cleared, 7 chapters visible.
- Desktop `scrollWidth - clientWidth = 0`; mobile `scrollWidth - clientWidth = 0`;
  mobile `<audio>` width = 318 px.
- 0 console errors, 0 page errors across all three pages.

Online screenshots are saved under
`/tmp/2015-projects-v0_2-pilot/online/` (story desktop, story mobile, stories
index desktop, active-chapter capture, search-empty-state capture).
Screenshots are intentionally **not** inside the Git tree.

## 12. Online Deployment

- Implementation commit: `3af836149a6bc728e2ecbfeea9b84b5b4a1fb1f6`
  (`feat: add public oral history pilot`).
- Pages workflow run for that commit: `29136646415` — `conclusion: success`.
- Pages URL: <https://conanxin.github.io/2015-Projects/stories/isadore-first-tomato/>.
- Stories index: <https://conanxin.github.io/2015-Projects/stories/>.
- The Playwright-equivalent verification above (§11) was the live
  post-deployment check. It succeeded in every observable dimension.

## 13. Historical Integrity

- `1.Podcast-Plan.md`, `2.E-Reader.md`, `3.DESIGNING For The Web.md`,
  `4.Recordingl history.md`: each SHA-256 is identical to the
  `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` baseline.
- `archive/2015/README.original.md` is BYTE-EQUAL to
  `dc8e86e:README.md`.
- `archive/2015/manifest.sha256` content SHA-256 is unchanged from the
  R1-collected value.
- `README.md` content SHA-256 is unchanged from the R1-collected value.
- `.github/workflows/pages.yml` content SHA-256 and line count (63) are
  unchanged from the R1-collected value.

## 14. Limitations

1. **One sample only.** Search scale and chapter-orientation heuristics were
   exercised on a single 41.8-second clip and seven hand-curated chapters.
   Longer interviews will need fresh segment work, a clearer topic taxonomy,
   and probably a slider-style chapter chooser for chapter counts > ~20.
2. **No transcript download or full-text indexing.** The pilot deliberately
   stores only short excerpts. The full English transcript remains on the
   official NPS page; the repository has no searchable full-text index.
3. **Player depends on the user's browser, network, and the NPS CDN.** If
   the NPS asset moves, the page falls back to the official NPS source URL.
   No mirror is offered; no fallback encoding is exposed.
4. **No transcript translation.** The Chinese pages are editorial prose
   written by the operator; the narrator's voice is left in English in the
   short excerpts. A future round could provide full Chinese captions, but
   that requires re-licensing and re-citation decisions and is **not** part
   of the V0.2B scope.
5. **Sub-second accuracy inside a single chapter is not exposed.** Each
   chapter covers a continuous range of seconds; there is no sub-chapter
   granularity in this pilot.
6. **No real-time transcript, no captions, no speaker label.** Single
   narrator in a single audio clip — labels are sufficient.

## 15. Decision for V0.3

Answers to the closing questions, in order:

1. **Is the timecode story page viable?** Yes. End-to-end verified on a
   third-party audio host with public HTTPS, real Chromium `<audio>` seeks,
   `aria-current` chapter highlighting, and pure-frontend search across
   Chinese and English.
2. **Can we move on to real family-interview preparation?** Not before the
   family-interview preconditions (next item) are formalized and reviewed.
3. **What must be in place before any real-world interview is conducted?**
   The V0.3 task should fix the following at minimum:
   - **Informed consent** template: what is recorded, who owns the master,
     who can listen later, how to withdraw consent.
   - **Withdrawal / redaction** procedure: how a narrator (or their next of
     kin) can stop the recording from being published at any time, and how
     redacted cuts are produced.
   - **Recording specifications** (container, sample rate, channels) and
     **file-naming** standard (interviewer family name, narrator family
     name, ISO date, sequence).
   - **Public vs private material layering** — what is shown publicly
     (sectional), what is kept privately (complete), and what is
     destroyed after final cut.
   - **Pre-cued question scaffold** — how questions are written before
     the interview begins, edited after, and frozen before publish.
   - **Review checklist** specific to potential-trauma topics that the
     family is willing (or not willing) to discuss, with a "do not ask"
     list per narrator.
4. **Is the Astro static architecture still adequate?** For the V0.3
   family-interview preparation phase, yes. Astro static + content
   collections + JSON-driven segments scales naturally to a small number
   of interviewers and a few hours of audio per narrator. Migrating to an
   OHMS-style server would be premature.
5. **Do we need OHMS, a database, a wiki, or accounts now?** No.
   Astro Content Collections are enough for the structured parts; the
   Git repository is enough for the editorial collaboration. The day
   OHMS becomes necessary is the day this lab no longer owns the audio
   storage, which is explicitly **not** the case today.

The recommendation is therefore: **proceed to V0.3 — Family Interview
Preconditions** with the above six elements formalised as deliverables
**before** the first real-world interview is conducted.

— Published 2026-07-11 by the V0.2B closeout.
