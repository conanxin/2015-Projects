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

export const collections = { seeds };
