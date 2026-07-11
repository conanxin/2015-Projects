// @ts-check
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const statusValues = [
  'active',
  'evolved',
  'dormant',
  'pilot-next',
  'archive-maintained',
] as const;

const seeds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seeds' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    titleZh: z.string(),
    titleEn: z.string(),
    originalDate: z.string(),
    originalDocument: z.string(),
    originalIntent: z.string(),
    coreProblem: z.string(),
    status: z.enum(statusValues),
    currentInterpretation: z.string(),
    currentRole: z.string(),
    descendantProjects: z.array(
      z.object({
        repo: z.string(),
        role: z.string(),
        linkTo: z.string().url().optional(),
      })
    ),
    completedParts: z.array(z.string()),
    unresolvedQuestions: z.array(z.string()),
    nextExperiment: z.string(),
    lastReviewed: z.string(),
  }),
});

// V0.2B — public oral history pilot content model.
// One story = one narrator + one interview (or excerpt) + one media asset.
// Timecodes live in a separate segments JSON under site/src/data/stories/<slug>.segments.json
// — this keeps the markdown content small and reviewable while keeping the JSON
//   program-validated by scripts/validate-story-data.mjs.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    titleZh: z.string(),
    titleOriginal: z.string(),
    narratorName: z.string(),
    interviewerName: z.string(),
    interviewDate: z.string(),
    recordingDate: z.string().optional(),
    archiveName: z.string(),
    collectionName: z.string(),
    sourceItemId: z.string(),
    // The NPS media asset GUID is documented here. The official interview item
    // (e.g. "EI-87") is preserved as collectionName. sourceItemId is the GUID
    // recorded in the public NPS audio page URL.
    sourceUrl: z.string().url(),
    language: z.string(),
    location: z.string(),
    durationSeconds: z.number().positive(),
    mediaType: z.literal('audio'),
    mediaProvider: z.string(),
    mediaUrl: z.string().url(),
    embedUrl: z.string().url().optional(),
    rightsStatement: z.string(),
    accessNote: z.string(),
    transcriptSource: z.string(),
    editorialStatus: z.string(),
    summary: z.string(),
    topics: z.array(z.string()),
    people: z.array(z.string()),
    places: z.array(z.string()),
    events: z.array(z.string()),
    publishedAt: z.string(),
    lastReviewed: z.string(),
  }),
});

export const collections = { seeds, stories };
