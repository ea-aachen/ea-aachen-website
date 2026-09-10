import type { CollectionEntry } from 'astro:content';

export function whenLabel(post: CollectionEntry<'news'>) {
  return post.data.when ?? post.data.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}
