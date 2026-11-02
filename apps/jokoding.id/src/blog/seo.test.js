import { describe, expect, it } from 'vitest';
import { blogIndexMeta, postMeta, renderHead } from './seo';

const post = (overrides = {}) => ({
  slug: 'hermes-agent',
  title: 'Hermes',
  description: 'Desc',
  date: '2026-11-02',
  video: { platform: 'tiktok', id: '123', embedUrl: 'https://www.tiktok.com/player/v1/123' },
  cover: '/blog/hermes-agent.jpg',
  author: null,
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
      thumbnailUrl: 'https://jokoding.id/blog/hermes-agent.jpg',
      uploadDate: '2026-11-02',
      embedUrl: 'https://www.tiktok.com/player/v1/123',
    });
  });

  it('author jadi Person di JSON-LD', () => {
    const { jsonLd } = postMeta(post({ author: { name: 'Irfan Qobus', url: 'https://github.com/irfanqs' } }));
    expect(jsonLd.author).toEqual({ '@type': 'Person', name: 'Irfan Qobus', url: 'https://github.com/irfanqs' });
  });

  it('tanpa author, JSON-LD author = Jokoding', () => {
    expect(postMeta(post()).jsonLd.author).toMatchObject({ '@type': 'Organization', name: 'Jokoding' });
  });

  it('cover relatif jadi URL absolut', () => {
    expect(postMeta(post({ cover: '/blog/x.jpg' })).image).toBe('https://jokoding.id/blog/x.jpg');
  });

  it('cover https dipakai apa adanya', () => {
    expect(postMeta(post({ cover: 'https://cdn.example.com/x.jpg' })).image).toBe('https://cdn.example.com/x.jpg');
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
    expect(head).toContain('<meta property="og:image" content="https://jokoding.id/blog/hermes-agent.jpg" />');
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
