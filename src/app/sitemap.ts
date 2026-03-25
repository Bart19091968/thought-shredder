import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thoughtshredder.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/destroy-bad-thoughts',
    '/let-go-of-frustration',
    '/burn-negative-thoughts',
    '/flush-away-stress',
    '/digital-release-ritual',
    '/how-to-let-go',
    '/faq',
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
