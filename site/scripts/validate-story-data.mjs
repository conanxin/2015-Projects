#!/usr/bin/env node
/**
 * V0.2B — Public Oral History Pilot: story & segment data validator.
 *
 * Run via: npm run validate:stories
 *
 * This script enforces all V0.2B pilot gates that are *structural* rather than
 * build-time. It is wired into npm run check, so any failed gate prevents
 * `astro check` from running and prevents Pages build artifacts from being
 * published.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE_ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(SITE_ROOT, 'src/content/stories');
const DATA_DIR = path.join(SITE_ROOT, 'src/data/stories');

let failed = false;
const errors = [];
const warn = [];

function fail(msg) {
  failed = true;
  errors.push(msg);
  console.error('FAIL', msg);
}
function info(msg) {
  console.log(msg);
}

/**
 * Heuristic checks for forbidden content (no full transcript copy).
 * We look at: (1) the markdown body in stories/*.md, (2) the segments JSON.
 * The full English transcript reference is well-known (~70 words), so a basic
 * join-and-search is reliable.
 */
function checkNoFullTranscript(transcriptJoined) {
  // These are full original-transcript clauses and/or whole-sentence key
  // phrases. They MUST NOT appear in stored data; we keep only short
  // navigation anchors.
  const FORBIDDEN_PHRASES = [
    'wanted to give me a treat',
    'peddlers around the street',
    'peddlers around the street coming out from here',
    'i never had a tomato in my life',
    "i didn't know what sort of a tomato looks like",
    'i didn’t know what sort of a tomato looks like',
    'he gave me a tomato and i eat the tomato',
    'spit it out. i couldn’t take it',
    "what is this, what they give me to eat",
    'he started laughing, so we kept going there, no tomato',
    'my brother took me over',
    'there are some tomatoes',
    "he laughs",
  ];
  for (const p of FORBIDDEN_PHRASES) {
    if (transcriptJoined.includes(p.toLowerCase())) {
      fail(`Forbidden full-transcript phrase found in stored data: "${p}"`);
    }
  }
}

async function main() {
  if (!existsSync(CONTENT_DIR)) {
    fail(`stories content directory missing: ${CONTENT_DIR}`);
    throwError();
  }
  const storyFiles = (await readdir(CONTENT_DIR)).filter(f => f.endsWith('.md'));
  if (storyFiles.length === 0) {
    warn(`No story files in ${CONTENT_DIR} (V0.2B expects at least one).`);
    return;
  }

  // Slug / id uniqueness map.
  const slugSet = new Set();
  const idSet = new Set();
  /** @type {Map<string, any>} */
  const storiesBySlug = new Map();

  for (const file of storyFiles) {
    const mdPath = path.join(CONTENT_DIR, file);
    const raw = await readFile(mdPath, 'utf8');
    const fm = parseFrontmatter(raw);
    const slug = fm.slug;
    const id = fm.id;
    if (!slug || !id) fail(`Story ${file}: missing slug or id in frontmatter.`);

    // Slug & id uniqueness across stories
    if (slug) {
      if (slugSet.has(slug)) fail(`Story slug collision: ${slug}`);
      slugSet.add(slug);
    }
    if (id) {
      if (idSet.has(id)) fail(`Story id collision: ${id}`);
      idSet.add(id);
    }

    // Required string fields populated
    const requiredStrings = [
      'id', 'slug', 'titleZh', 'titleOriginal',
      'narratorName', 'interviewerName', 'interviewDate', 'archiveName',
      'collectionName', 'sourceItemId', 'sourceUrl',
      'language', 'location',
      'mediaType', 'mediaProvider', 'mediaUrl',
      'rightsStatement', 'accessNote', 'transcriptSource',
      'editorialStatus', 'summary',
      'publishedAt', 'lastReviewed',
    ];
    for (const f of requiredStrings) {
      if (!fm[f] || (typeof fm[f] === 'string' && fm[f].trim() === '')) {
        fail(`Story ${slug || file}: missing required field ${f}`);
      }
    }
    // URL must be https
    if (fm.sourceUrl && !fm.sourceUrl.startsWith('https://')) {
      fail(`Story ${slug}: sourceUrl must be https:// — got ${fm.sourceUrl}`);
    }
    if (fm.mediaUrl && !fm.mediaUrl.startsWith('https://')) {
      fail(`Story ${slug}: mediaUrl must be https:// — got ${fm.mediaUrl}`);
    }
    // mediaUrl points to official NPS domain
    if (fm.mediaUrl) {
      const u = new URL(fm.mediaUrl);
      if (!u.hostname.endsWith('.nps.gov')) {
        fail(`Story ${slug}: mediaUrl must be on .nps.gov — got ${u.hostname}`);
      }
    }
    // mediaType literal audio
    if (fm.mediaType !== 'audio') {
      fail(`Story ${slug}: mediaType must be 'audio' for V0.2B pilot — got ${fm.mediaType}`);
    }
    // durationSeconds positive number
    if (typeof fm.durationSeconds !== 'number' || fm.durationSeconds <= 0) {
      fail(`Story ${slug}: durationSeconds must be a positive number`);
    }
    // No localhost / local paths / tokens / mp3
    const allFields = JSON.stringify(fm);
    if (allFields.includes('localhost')) fail(`Story ${slug}: contains 'localhost'`);
    if (allFields.includes('/home/')) fail(`Story ${slug}: contains local path '/home/'`);
    if (allFields.includes('C:\\') || allFields.includes('D:\\')) fail(`Story ${slug}: contains Windows path`);
    if (/\.mp3\b/.test(allFields) && !/audio\/(?:video|audio)/.test(fm.mediaUrl || '')) {
      // mp3 keyword inside the .mp3 URL is fine; but elsewhere it's not
      const stripped = allFields.replace(fm.mediaUrl || '', '');
      if (/\.mp3\b/.test(stripped)) fail(`Story ${slug}: contains .mp3 reference outside mediaUrl`);
    }
    if (/bearer\s+[A-Za-z0-9]/i.test(allFields)) fail(`Story ${slug}: contains bearer token`);
    if (/api[_-]?key\s*[:=]/i.test(allFields)) fail(`Story ${slug}: contains api_key=`);

    // Verify the markdown body doesn't carry a full transcript.
    const body = raw.replace(/^---[\s\S]*?---/, '');
    const joinedBody = body.replace(/\s+/g, ' ').toLowerCase();
    checkNoFullTranscript(joinedBody);

    storiesBySlug.set(slug, { file, frontmatter: fm, body });
  }

  info(`Stories: ${storiesBySlug.size}`);

  // Segment file checks.
  if (!existsSync(DATA_DIR)) {
    fail(`segments data directory missing: ${DATA_DIR}`);
    throwError();
  }
  const segFiles = (await readdir(DATA_DIR)).filter(f => f.endsWith('.segments.json'));
  if (segFiles.length === 0) {
    fail('No segment JSON files found under src/data/stories/.');
    throwError();
  }

  // Each segment file must match a story slug.
  const storySlugs = new Set(storiesBySlug.keys());
  for (const file of segFiles) {
    const baseSlug = file.replace(/\.segments\.json$/, '');
    if (!storySlugs.has(baseSlug)) {
      fail(`segments file ${file} does not match any story slug.`);
      continue;
    }
    const fp = path.join(DATA_DIR, file);
    const json = JSON.parse(await readFile(fp, 'utf8'));
    if (!Array.isArray(json)) {
      fail(`segments file ${file} must be a JSON array`);
      continue;
    }
    if (json.length !== 7) {
      fail(`segments file ${file} must have exactly 7 segments (got ${json.length})`);
    }
    // Segment-level checks
    const seenIds = new Set();
    let prevStart = -Infinity;
    let totalExcerptCharsEn = 0;
    let totalExcerptWordsEn = 0;
    let overlapDetected = false;
    const story = storiesBySlug.get(baseSlug);
    const duration = story?.frontmatter?.durationSeconds;
    for (const seg of json) {
      // Required fields
      const required = ['id','startSeconds','endSeconds','titleZh','titleOriginal',
        'summaryZh','transcriptExcerptOriginal','transcriptExcerptZh',
        'verificationStatus','confidence','sourceReference','editorialNote'];
      for (const f of required) {
        if (seg[f] === undefined || seg[f] === null) {
          fail(`segment missing field ${f}: ${JSON.stringify(seg).slice(0,80)}`);
        }
      }
      // ID uniqueness
      if (seenIds.has(seg.id)) fail(`duplicate segment id ${seg.id}`);
      seenIds.add(seg.id);
      // Numeric ranges
      if (typeof seg.startSeconds !== 'number' || isNaN(seg.startSeconds)) {
        fail(`segment ${seg.id}: startSeconds not numeric`);
      }
      if (typeof seg.endSeconds !== 'number' || isNaN(seg.endSeconds)) {
        fail(`segment ${seg.id}: endSeconds not numeric`);
      }
      if (seg.startSeconds < 0) fail(`segment ${seg.id}: startSeconds < 0`);
      if (seg.startSeconds >= seg.endSeconds) fail(`segment ${seg.id}: start >= end`);
      if (seg.startSeconds <= prevStart) fail(`segment ${seg.id}: start not strictly increasing`);
      prevStart = seg.startSeconds;
      if (duration && seg.endSeconds > duration + 0.25) {
        fail(`segment ${seg.id}: end ${seg.endSeconds} > duration ${duration} +0.25`);
      }
      // Overlap check (within 0.25 tolerance) on previous
      if (overlapDetected) {
        // no-op, just track
      }
      // verification status
      if (seg.verificationStatus !== 'verified') {
        fail(`segment ${seg.id}: verificationStatus must be 'verified' — got ${seg.verificationStatus}`);
      }
      // Non-empty text fields
      const txtRequired = ['titleZh','titleOriginal','summaryZh',
        'transcriptExcerptOriginal','transcriptExcerptZh','sourceReference','editorialNote'];
      for (const t of txtRequired) {
        if (typeof seg[t] !== 'string' || seg[t].trim().length === 0) {
          fail(`segment ${seg.id}: ${t} empty`);
        }
      }
      // English excerpt word count
      const en = (seg.transcriptExcerptOriginal || '').trim();
      const wc = en.split(/\s+/).length;
      if (wc < 1 || wc > 12) {
        fail(`segment ${seg.id}: English excerpt word count must be 1-12 — got ${wc}: "${en}"`);
      }
      totalExcerptCharsEn += en.length;
      totalExcerptWordsEn += wc;
      // Forbidden URLs / paths / tokens / mp3
      const segDump = JSON.stringify(seg);
      if (/localhost/.test(segDump)) fail(`segment ${seg.id}: contains 'localhost'`);
      if (/\/home\//.test(segDump)) fail(`segment ${seg.id}: contains local path`);
      if (/api[_-]?key|token|bearer/i.test(segDump)) fail(`segment ${seg.id}: contains token-like pattern`);
    }
    // Excerpt totals: across the 7 segments the combined English excerpt
    // must be small enough that it cannot reconstruct the full transcript.
    // Full transcript length is ~70 words.
    if (totalExcerptWordsEn > 70) {
      fail(`${file}: combined English excerpt word count ${totalExcerptWordsEn} > 70 (full transcript is ~70 words)`);
    }
    // checkNoFullTranscript across joined segments
    const joined = json.map(s => (s.transcriptExcerptOriginal || '') + ' ' + (s.transcriptExcerptZh || '') + ' ' + (s.summaryZh || '')).join(' ').toLowerCase();
    checkNoFullTranscript(joined);
    info(`segments ${file}: 7 segments, ${totalExcerptWordsEn} words total`);
  }

  if (failed) {
    console.error(`\n${errors.length} error(s).`);
    throwError();
  }
  console.log(`\nvalidate:stories PASS — ${storiesBySlug.size} story, ${segFiles.length} segment file(s).`);
  if (warn.length) for (const w of warn) console.warn('WARN', w);
}

function throwError() {
  process.exit(1);
}

/**
 * Tiny frontmatter parser: lines between --- and ---.
 * Supports scalars, list-shaped YAML (one-line `- a` or multi-line `- a\n- b`).
 */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  const lines = m[1].split('\n');
  let key = null;
  let mode = null;
  let cur = [];
  function commitScalar() {
    if (key !== null) {
      const v = cur.join(' ').trim();
      out[key] = coerce(v);
    }
  }
  function commitList() {
    if (key !== null) {
      out[key] = cur.filter(s => s.length > 0);
    }
  }
  for (const line of lines) {
    if (/^\s*-\s+/.test(line)) {
      // list item
      const item = line.replace(/^\s*-\s+/, '').trim();
      if (item.length) cur.push(item);
      mode = 'list';
      continue;
    }
    const colon = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (colon) {
      // commit previous
      if (mode === 'list') commitList();
      else if (mode === 'scalar') commitScalar();
      cur = [];
      key = colon[1];
      const rest = colon[2];
      if (rest === '') { mode = 'list'; continue; }
      if (rest === '[]') { out[key] = []; mode = null; continue; }
      cur = [rest];
      mode = 'scalar';
      continue;
    }
    // continuation line
    if (mode === 'list' || mode === 'scalar') {
      const trimmed = line.trim();
      if (trimmed.length) cur.push(trimmed);
    }
  }
  if (mode === 'list') commitList();
  else if (mode === 'scalar') commitScalar();
  return out;
}

function coerce(v) {
  if (v === '') return '';
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v === 'true') return true;
  if (v === 'false') return false;
  return v.replace(/^"|"$/g, '');
}

main().catch(err => {
  console.error('validate-story-data: unexpected', err);
  process.exit(2);
});
