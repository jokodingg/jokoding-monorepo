import { describe, expect, it } from 'vitest';
import { buildSitemap } from './sitemap';

const entry = (loc, lastmod) => `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;

describe('buildSitemap', () => {
  it('memuat home, blog, dan tiap post', () => {
    const xml = buildSitemap(
      [
        { slug: 'baru', date: '2026-11-02' },
        { slug: 'lama', date: '2026-10-01' },
      ],
      '2026-11-05',
    );

    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
    expect(xml).toContain(entry('https://jokoding.id/', '2026-11-05'));
    expect(xml).toContain(entry('https://jokoding.id/computer-vision', '2026-11-05'));
    expect(xml).toContain(entry('https://jokoding.id/blog', '2026-11-02'));
    expect(xml).toContain(entry('https://jokoding.id/blog/baru', '2026-11-02'));
    expect(xml).toContain(entry('https://jokoding.id/blog/lama', '2026-10-01'));
  });

  it('tanpa post, lastmod blog pakai tanggal build', () => {
    expect(buildSitemap([], '2026-11-05')).toContain(entry('https://jokoding.id/blog', '2026-11-05'));
  });
});
