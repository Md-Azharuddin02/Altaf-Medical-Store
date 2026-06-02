import { site } from '@/lib/site';

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ];
}
