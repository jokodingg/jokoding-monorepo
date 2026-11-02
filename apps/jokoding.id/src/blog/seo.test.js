import { describe, expect, it } from 'vitest';
import { blogIndexMeta, postMeta, renderHead } from './seo';

const post = (overrides = {}) => ({
  slug: 'hermes-agent',
  title: 'Hermes',
  description: 'Desc',
  date: '2026-11-02',
  youtubeId: 'abc',
  orientation: 'vertical',
  cover: 'https://i.ytimg.com/vi/abc/hqdefault.jpg',
  draft: false,
  html: '<p>Isi</p>',
  ...overrides,
});

describe('postMeta', () => {
  it('title, canonical, type article', () => {
    expect(postMeta(post())).toMatchObject({
      title: 'Hermes | Blog Jokoding',
      description: 'Desc',
      canonical: 'https://jokoding.id/blog/hermes-agent',
      type: 'article',
    });
  });

  it('JSON-LD BlogPosting dengan VideoObject', () => {
    const { jsonLd } = postMeta(post());
    expect(jsonLd['@type']).toBe('BlogPosting');
    expect(jsonLd.video).toMatchObject({
      '@type': 'VideoObject',
      name: 'Hermes',
      description: 'Desc',
      thumbnailUrl: 'https://i.ytimg.com/vi/abc/hqdefault.jpg',
      uploadDate: '2026-11-02',
      embedUrl: 'https://www.youtube-nocookie.com/embed/abc',
    });
  });

  it('cover relatif jadi URL absolut', () => {
    expect(postMeta(post({ cover: '/blog/x.jpg' })).image).toBe('https://jokoding.id/blog/x.jpg');
  });

  it('cover https dipakai apa adanya', () => {
    expect(postMeta(post()).image).toBe('https://i.ytimg.com/vi/abc/hqdefault.jpg');
  });

  it('cover null pakai og-image default', () => {
    expect(postMeta(post({ cover: null })).image).toBe('https://jokoding.id/og-image.jpg');
  });
});

describe('blogIndexMeta', () => {
  it('title, canonical, type website', () => {
    expect(blogIndexMeta()).toMatchObject({
      title: 'Blog | Jokoding',
      description: 'Video dan tulisan Jokoding seputar AI, web, IoT, dan dunia coding.',
      canonical: 'https://jokoding.id/blog',
      type: 'website',
    });
  });
});

describe('renderHead', () => {
  it('memuat title, canonical, og dan twitter', () => {
    const head = renderHead(postMeta(post()));
    expect(head).toContain('<title>Hermes | Blog Jokoding</title>');
    expect(head).toContain('<link rel="canonical" href="https://jokoding.id/blog/hermes-agent" />');
    expect(head).toContain('<meta property="og:type" content="article" />');
    expect(head).toContain('<meta property="og:image" content="https://i.ytimg.com/vi/abc/hqdefault.jpg" />');
    expect(head).toContain('<meta name="twitter:card" content="summary_large_image" />');
    expect(head).toContain('<script type="application/ld+json">');
  });

  it('escape karakter berbahaya', () => {
    const head = renderHead(postMeta(post({ title: 'A & B', description: 'A "b" <c> & </script>' })));
    expect(head).toContain('<title>A &amp; B | Blog Jokoding</title>');
    expect(head).toContain('content="A &quot;b&quot; &lt;c&gt; &amp; &lt;/script&gt;"');

    const jsonLdBody = head.split('<script type="application/ld+json">')[1].split('</script>')[0];
    expect(jsonLdBody).toContain('\\u003c/script>');
    expect(JSON.parse(jsonLdBody).description).toBe('A "b" <c> & </script>');
  });
});
