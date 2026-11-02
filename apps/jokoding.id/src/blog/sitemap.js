import { SITE_URL } from './seo';

const entry = (loc, lastmod) => `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;

// posts sudah urut dari terbaru (lihat parsePosts), jadi posts[0] adalah post terakhir.
export const buildSitemap = (posts, buildDate) =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entry(`${SITE_URL}/`, buildDate),
    entry(`${SITE_URL}/blog`, posts[0]?.date ?? buildDate),
    ...posts.map((post) => entry(`${SITE_URL}/blog/${post.slug}`, post.date)),
    '</urlset>',
    '',
  ].join('\n');
