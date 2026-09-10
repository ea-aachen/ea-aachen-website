import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    // Sort key; the list shows `when` instead if set.
    date: z.coerce.date(),
    when: z.string().optional(),
    summary: z.string(),
    upcoming: z.boolean().default(false),
    lang: z.enum(['en', 'de']).default('en'),
  }),
});

export const collections = { news };
