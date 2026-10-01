import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    headline: z.string(),
    url: z.string().url(),
    outlet: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    archiveUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
