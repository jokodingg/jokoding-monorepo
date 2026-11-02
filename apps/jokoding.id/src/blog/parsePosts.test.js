import { describe, expect, it } from 'vitest';
import { parsePosts } from './parsePosts';

const md = (frontmatterLines, body = 'Isi') => `---\n${frontmatterLines.join('\n')}\n---\n\n${body}\n`;

const valid = (overrides = {}) => {
  const fields = {
    title: '"Hermes"',
    description: '"Desc"',
    date: '2026-11-02',
    youtubeId: '"abc"',
    ...overrides,
  };
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${value}`);
};

const one = (lines, { name = 'x', includeDrafts = false, body } = {}) =>
  parsePosts({ [`/content/blog/${name}.md`]: md(lines, body) }, { includeDrafts });

describe('parsePosts', () => {
  it('mengubah file markdown jadi post lengkap', () => {
    const posts = one(valid({ orientation: 'vertical' }), { name: 'hermes-agent', body: '## Halo\n\nIsi' });

    expect(posts).toEqual([
      {
        slug: 'hermes-agent',
        title: 'Hermes',
        description: 'Desc',
        date: '2026-11-02',
        youtubeId: 'abc',
        orientation: 'vertical',
        cover: 'https://i.ytimg.com/vi/abc/hqdefault.jpg',
        draft: false,
        html: expect.stringContaining('<h2'),
      },
    ]);
  });

  it('date dari YAML (objek Date) jadi string YYYY-MM-DD', () => {
    const [post] = one(valid({ date: '2026-01-31' }));
    expect(post.date).toBe('2026-01-31');
  });

  it('date dalam tanda kutip juga diterima', () => {
    const [post] = one(valid({ date: '"2026-01-31"' }));
    expect(post.date).toBe('2026-01-31');
  });

  it('orientation default horizontal', () => {
    const [post] = one(valid());
    expect(post.orientation).toBe('horizontal');
  });

  it('cover dari frontmatter dipakai apa adanya', () => {
    const [post] = one(valid({ cover: '/blog/x.jpg' }));
    expect(post.cover).toBe('/blog/x.jpg');
  });

  it('draft tanpa youtubeId lolos, cover null', () => {
    const [post] = one(valid({ youtubeId: undefined, draft: 'true' }), { includeDrafts: true });
    expect(post).toMatchObject({ draft: true, youtubeId: null, cover: null });
  });

  it('draft disembunyikan kalau includeDrafts false', () => {
    expect(one(valid({ draft: 'true' }))).toEqual([]);
  });

  it('urut dari tanggal terbaru', () => {
    const posts = parsePosts(
      {
        '/content/blog/lama.md': md(valid({ date: '2026-01-01' })),
        '/content/blog/baru.md': md(valid({ date: '2026-11-02' })),
        '/content/blog/tengah.md': md(valid({ date: '2026-06-15' })),
      },
      { includeDrafts: false },
    );
    expect(posts.map((p) => p.slug)).toEqual(['baru', 'tengah', 'lama']);
  });

  it.each(['title', 'description', 'date'])('gagal kalau %s kosong', (field) => {
    expect(() => one(valid({ [field]: undefined }))).toThrow(`content/blog/x.md: "${field}" wajib diisi`);
  });

  it('gagal kalau youtubeId kosong pada post non-draft', () => {
    expect(() => one(valid({ youtubeId: undefined }))).toThrow('content/blog/x.md: "youtubeId" wajib diisi');
  });

  it('gagal kalau date tidak valid', () => {
    expect(() => one(valid({ date: '"kemarin"' }))).toThrow('content/blog/x.md: "date" tidak valid');
  });

  it('gagal kalau orientation tidak dikenal', () => {
    expect(() => one(valid({ orientation: 'square' }))).toThrow(
      'content/blog/x.md: "orientation" harus vertical atau horizontal',
    );
  });

  it('gagal kalau nama file bukan slug valid', () => {
    expect(() => one(valid(), { name: 'Hermes Agent' })).toThrow(
      'content/blog/Hermes Agent.md: nama file harus huruf kecil, angka, dan -',
    );
  });
});
