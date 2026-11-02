import { describe, expect, it } from 'vitest';
import { parsePosts } from './parsePosts';

const md = (frontmatterLines, body = 'Isi') => `---\n${frontmatterLines.join('\n')}\n---\n\n${body}\n`;

const valid = (overrides = {}) => {
  const fields = {
    title: '"Hermes"',
    description: '"Desc"',
    date: '2026-11-02',
    video: 'https://www.tiktok.com/@jokodingg/video/123',
    cover: '/blog/x.jpg',
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
    const posts = one(valid(), { name: 'hermes-agent', body: '## Halo\n\nIsi' });

    expect(posts).toEqual([
      {
        slug: 'hermes-agent',
        title: 'Hermes',
        description: 'Desc',
        date: '2026-11-02',
        video: {
          platform: 'tiktok',
          id: '123',
          embedUrl: 'https://www.tiktok.com/player/v1/123',
        },
        cover: '/blog/x.jpg',
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

  it('draft tanpa video dan cover lolos', () => {
    const [post] = one(valid({ video: undefined, cover: undefined, draft: 'true' }), { includeDrafts: true });
    expect(post).toMatchObject({ draft: true, video: null, cover: null });
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

  it.each(['video', 'cover'])('gagal kalau %s kosong pada post non-draft', (field) => {
    expect(() => one(valid({ [field]: undefined }))).toThrow(`content/blog/x.md: "${field}" wajib diisi`);
  });

  it('gagal kalau link video tidak didukung, juga pada draft', () => {
    expect(() => one(valid({ video: 'https://vm.tiktok.com/ZSabc/', draft: 'true' }), { includeDrafts: true })).toThrow(
      'content/blog/x.md: "video" harus link TikTok (tiktok.com/@akun/video/...) atau Instagram (instagram.com/reel/...)',
    );
  });

  it('gagal kalau draft bukan true atau false', () => {
    expect(() => one(valid({ draft: 'yes' }))).toThrow('content/blog/x.md: "draft" harus true atau false');
  });

  it.each(['blog/x.jpg', 'x.jpg', 'http://cdn.example.com/x.jpg'])('gagal kalau cover tidak diawali / atau https://: %s', (cover) => {
    expect(() => one(valid({ cover }))).toThrow('content/blog/x.md: "cover" harus diawali / (file di public/) atau https://');
  });

  it('cover https diterima', () => {
    const [post] = one(valid({ cover: 'https://cdn.example.com/x.jpg' }));
    expect(post.cover).toBe('https://cdn.example.com/x.jpg');
  });

  it('gagal kalau date tidak valid', () => {
    expect(() => one(valid({ date: '"kemarin"' }))).toThrow('content/blog/x.md: "date" tidak valid');
  });

  it('gagal kalau nama file bukan slug valid', () => {
    expect(() => one(valid(), { name: 'Hermes Agent' })).toThrow(
      'content/blog/Hermes Agent.md: nama file harus huruf kecil, angka, dan -',
    );
  });
});
