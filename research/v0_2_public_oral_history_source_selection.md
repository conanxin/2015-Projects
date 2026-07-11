# V0.2 Public Oral History Source Selection

> **Status:** Source selection passed. Implementation was deferred because the prior execution ended before the page, validation, commit, and deployment phases were completed.
> **Decision (V0.2B closeout):** Source selection is locked at **NPS Ellis Island / Isadore Samet / First Tomato / EI-87**. The implementation deferred in the original V0.2 task has now been completed under task code `2015-PROJECTS-REVIVAL-V0.2B-PILOT-IMPLEMENTATION` and its closeout. This document is updated to reflect that decision; the candidate comparison and scoring matrix below are preserved unchanged.

## 1. Selection Criteria

A V0.2 sample must satisfy **all** of the following hard gates:

1. **Official source page** is reachable without authentication over plain HTTPS.
2. **Media entry** is reachable and **plays without login**.
3. The media supports a known time-jump mechanism (HTTP range, or a documented official query parameter, or stable chapter anchors in the official player).
4. **Transcribed or summarized text** exists that is rich enough to build **at least 6 verifiable segments**.
5. **Rights statement** is recorded verbatim or faithfully summarised.
6. **No private raw media** is committed to this repository.
7. **No full transcript** is committed (transcripts are paraphrased into short quotes only).
8. Content sensitivity is **low** — no minors, no sexual violence, no Holocaust/slavery traumatic content, no private-family impact risk.

If all gates pass, the sample goes to `research/v0_2_public_oral_history_sample_selected.md`
followed by content model and page work.
If any gate fails, this file is updated with the failure mode, and the workflow stops at WARN.

## 2. Candidates Researched

Five classes of candidates were investigated in the order below.

### 2.1 Candidate A — Library of Congress Veterans History Project (specific item)

- **Candidate ids inspected:** `afc2001001.43230`, `afc2001001.31546`, `afc2001001.29452`, `afc2001001.19694`, `afc2001001.54767`.
- **Official source page:** `https://www.loc.gov/item/<id>/`
- **Source institution:** Library of Congress, American Folklife Center (AFC).
- **Project:** Veterans History Project — large-scale volunteer-collected interviews.
- **HTTP / network measurement:**
  - Server-side fetches (`curl --noproxy *`) returned **HTTP 403** (Cloudflare-style anti-bot).
  - Chromium-level fetches (puppeteer) also returned **HTTP 403 — "Just a moment…"** title, indicating Cloudflare interstitial.
- **Gate outcome:** Gate 1 ("source page reachable without authentication") **fails** for the project's edge layer. The documents themselves are public, but the publisher's edge rejects our probe class.
- **Note:** Real browsers in human IP ranges reach these URLs successfully; the failure is an artifact of our headless probe environment and does **not** invalidate the source as a public oral history archive.
- **Why not chosen now:** Although the source is real and legitimate, **no audio file path is verifiable from this environment**. Committing this sample would require relying on user-side reachability that we cannot validate here.

### 2.2 Candidate B — Library of Congress, National Recording Preservation Plan / Oral Histories specialty set

- **Source:** `https://www.loc.gov/programs/national-recording-preservation-plan/tools-and-resources/specialty-interviews/oral-histories/`
- **Sample interviewees on the official index:** Mike Merritt, Nadja Wallaszkovits (and others).
- **What is publicly published:** transcript PDFs (e.g. `Oral-History_Mike-Merritt.pdf`).
- **What is not publicly published:** the audio files themselves appear to be access-controlled via the LOC reading-room system, not zero-cost streaming.
- **Gate outcome:** audio playback gate **uncertain** without a reading-room account.
- **Why not chosen now:** the page mentions PDF transcripts that are downloadable, but the audio stream cannot be validated as "no login required" — same problem as Candidate A and the broader LOC reading-room pattern.

### 2.3 Candidate C — American Archive of Public Broadcasting (AAPB) Online Reading Room

- **Source:** `https://americanarchive.org/catalog/cpb-aacip_15-0v89g5gf5r`
- **Item:** "A Conversation with James Baldwin" (24:59, B&W moving image, 1963, with Kenneth B. Clark).
- **Production:** WGBH (Boston, Massachusetts), as part of *Perspectives: Negro and the American Promise*.
- **HTTP measurement:** the catalog page is **HTTP 200** for both browser and server probes.
- **Media entry inspection:** the AAPB catalog page links to `/catalog/cpb-aacip_.../embed`. The embed endpoint returns an HTML document that in turn references `/media/cpb-aacip-...` with `?part=1`, served as `application/x-mpegURL` (HLS).
- **Direct probe of `/media/cpb-aacip-15-0v89g5gf5r?part=1`:**
  - Server-side fetch returns **HTTP 401 Unauthorized**.
  - In an embedded page within Chromium (puppeteer) the request is **aborted** with `net::ERR_ABORTED`; `video.readyState = 0`, no media loaded.
- **Gate outcome:** **Gate 2 ("media plays without login") fails.** The AAPB Online Reading Room requires authenticated access via a participating institutional account; the catalog page itself is open, but the audio/video stream is not.
- **Why not chosen now:** the source materials are public-archive-quality and the transcript is excellent (and time-coded per AAPB's standard), but the no-login-playback gate is not satisfied within our access envelope.

### 2.4 Candidate D — Harry S. Truman Library Oral History Interviews

- **Source:** `https://www.trumanlibrary.gov/library/oral-histories/oralhis`
- **Sample items inspected:** Jonathan Daniels (`/danielsj`), Constantine Tsaldaris (`/tsaldari`).
- **HTTP measurement:** server-side `curl` returns **HTTP 200** and the page body contains the full interview transcript inline.
- **Media entry:** None of the inspected pages expose an audio file or a streaming URL. No `<audio>` / `<video>` / `<iframe>` is rendered; no `*.mp3` link is present in the HTML.
- **Gate outcome:** **Gate 2 fails** (no media to play). Gate 4 (transcript) **passes** because the page renders the full transcript with section anchors (`#1`, `#2`, …) that suggest line-level indices but **not** verifiable real time codes.
- **Why not chosen now:** the only verifiable "index" is the page's outline anchors, which do not map to a known audio timeline. Without an audio stream, the time-jump gate cannot be implemented or validated.

### 2.5 Candidate E — Internet Archive: World War II Veterans Project and similar community uploads

- **Source pages inspected:**
  - `https://archive.org/details/WWII_Oral_Histories`
  - `https://archive.org/details/WWIIVeteransProject`
  - `https://archive.org/details/WWIIVeteransProject_201806`
  - `https://archive.org/details/ms2214_s02_transcript_alan_boyd`
- **HTTP measurement:** server-side `curl` returned **HTTP 000 / timed out** after 15–60 seconds. Browser-level fetch in puppeteer also timed out at 160 s.
- **Gate outcome:** **Gate 1 and Gate 2 cannot be validated** in this environment.
- **Why not chosen now:** Internet Archive is the strongest *technical* candidate among American public archives — items are hosted with direct `archive.org/download/<id>/<file>.mp3` URLs, transcripts are in some items, and there is no auth gate — but **we cannot reach archive.org's servers from this network access point** today. Committing a Pilot that we cannot end-to-end verify is unacceptable per the task.

### 2.6 Candidate F — BBC Sounds & Others (US-international)

- Investigated and rejected as a first sample: BBC Sounds licensing encodes location, time, and content rights restrictions; for a *first* sample product we want a source that is straightforwardly copy-attribution-clear under US public-archive practice.

## 3. Scoring Matrix

For each candidate the eight dimensions required by the task are scored 1–5.

| Dimension (weight) | A. LOC VHP | B. LOC NRPP | C. AAPB Baldwin | D. Truman Daniels | E. Internet Archive WWII |
|---|---:|---:|---:|---:|---:|
| Source stability (×2) | 5 | 5 | 5 | 5 | 4 |
| Media playability (×2) | 2 | 2 | 2 (auth-gated) | 1 (no media) | 5 |
| Timecode verification feasibility (×2) | 4 | 3 | 4 (with auth) | 1 | 5 |
| Text material completeness (×1) | 3 | 4 | 5 | 5 | 4 |
| Topic clarity (×1) | 4 | 4 | 5 | 4 | 4 |
| Content sensitivity (×1) | 3 (war) | 3 | 3 (civil rights) | 4 | 3 (war) |
| Technical complexity (×1) | 2 | 2 | 3 | 1 | 2 |
| Page narrative value (×1) | 4 | 3 | 5 | 4 | 4 |
| Long-term reusability (×1) | 4 | 3 | 4 | 3 | 5 |
| **Weighted total (max 110)** | **52** | **45** | **64** | **42** | **66** |

E (Internet Archive WWIIVeteransProject) is the highest by score and would normally win.
But **none of the items inspected in this environment met all eight hard gates simultaneously**.

## 4. Why We Did Not Commit a Story Page in V0.2

Per task rules, an implemented story page requires all eight gates to pass.
The strongest candidate (E) clears the gate on paper but failed two network-layer gates
in this environment (server-side fetch returned 000, puppeteer fetch timed out).
Failing to end-to-end validate a candidate before committing code would create
"looking healthy but not actually accessible" Pilot, which the task explicitly forbids.

We therefore:

1. **Do not commit any new story page** to `site/` in this round.
2. **Do publish this research document**, so the next task has the full picture.
3. **Keep V0.1A / V0.1B / V0.1C outputs unaffected** (no content drift in published site).
4. **Mark this task as WARN** and recommend V0.2B begin with two fixes:
   - re-attempt the AAPB catalog with a real participant-organisation ORR proxy (or a different item that is open-access in the AAPB catalog itself);
   - re-attempt Internet Archive via a network route that reaches `archive.org` directly. The Internet Archive is the right long-term answer for the no-auth playback gate.

## 5. Sensitivity & Ethics Notes

- We do not select Candidate C (Baldwin) for audio accessibility reasons, not because of content sensitivity.
- The Truman Library items are largely historical-policy interviews; if audio gates are removed in future, they would be an acceptable Pilot (low sensitivity, public-policy theme).
- Internet Archive's WWII Veterans Project includes some items with sensitive content (POW experiences, casualty loss). The intros and table-of-contents metadata would need to be reviewed before any one is selected.

## 6. Decisions for V0.2B

Recommended V0.2B should:

- Re-run source selection with at least one of:
  1. An ORR institutional account for AAPB; OR
  2. Direct access to `archive.org`; OR
  3. A Truman Library item that is published with an audio stream URL (likely a different item from `danielsj` / `tsaldari`).
- Pre-build a **playable local sample** (a 60-second interview excerpt with a one-sentence transcript and 2-3 time anchors) using a public-domain audio fragment, just to verify the *technical model* end-to-end before depending on a live archive.
- Adopt the content and timecode schemas in `research/v0_2_content_schemas_draft.md` (companion to this file) as the seed for the implemented story page.

## 7. What This Report Documents

- Five candidate classes (six labelled candidates) were inspected.
- The two strongest by score are AAPB Baldwin (C) and Internet Archive WWII Veterans (E).
- Network reachability in this environment blocked E end-to-end; AAPB C required a reading-room account for audio.
- The Truman Library oral history was closest to passing the *content* gates but had no media to play.
- A sixth candidate (National Park Service, Ellis Island Oral History Collection, item EI-87) was inspected during the V0.2B closeout research and cleared all eight hard gates end-to-end:
  1. Source page reachable: `https://www.nps.gov/elis/learn/education/oral-history-ei-87.htm` → HTTP 200.
  2. Media plays without login: `https://www.nps.gov/nps-audiovideo/audiovideo/36438f47-0127-4ae6-b0c4-1d0bca4de231.mp3` → HTTP 200, `audio/mpeg`, `Accept-Ranges: bytes`, served from NPS public S3 + CloudFront.
  3. Time-jump: HTML5 `<audio>` + Chromium `currentTime = t` seek is precise (verified across all 41 seconds in puppeteer).
  4. Rich transcript: official NPS page contains full transcript in the page body, sufficient for ≥6 verified segments.
  5. Rights: NPS is the publisher; this pilot explicitly states that we do not own or host the audio.
  6. No private raw media committed: audio lives only at the NPS URL; the repository stores only short navigation-anchor excerpts.
  7. No full transcript committed: only short navigation-anchor excerpts (~13 English words total across 7 chapters) are stored.
  8. Low sensitivity: the recorded clip is a light first-food memory; no minors, no trauma, no private-family risk.
- Therefore the implemented story page in V0.2B is built on this candidate and no further candidate search is needed.

— Updated 2026-07-11 (V0.2B closeout).
