import frontMatter from 'front-matter';
import { marked } from 'marked';
import { parseVideoUrl } from './parseVideoUrl';

const SLUG_PATTERN = /^[a-z0-9-]+$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// YAML mengubah `date: 2026-11-02` jadi objek Date; tanggal dalam tanda kutip tetap string.
const normalizeDate = (value) => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value.toISOString().slice(0, 10);
  }
  if (typeof value !== 'string' || !ISO_DATE_PATTERN.test(value)) return null;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value ? value : null;
};

const isEmpty = (value) => value === undefined || value === null || String(value).trim() === '';

const parseOne = (path, raw) => {
  const file = path.replace(/^\//, '');
  const fail = (message) => {
    throw new Error(`${file}: ${message}`);
  };

  const slug = path.split('/').pop().replace(/\.md$/, '');
  if (!SLUG_PATTERN.test(slug)) fail('nama file harus huruf kecil, angka, dan -');

  const { attributes: meta, body } = frontMatter(raw);
  if (meta.draft !== undefined && typeof meta.draft !== 'boolean') fail('"draft" harus true atau false');
  const draft = meta.draft === true;

  for (const field of ['title', 'description', 'date']) {
    if (isEmpty(meta[field])) fail(`"${field}" wajib diisi`);
  }
  for (const field of ['video', 'cover']) {
    if (!draft && isEmpty(meta[field])) fail(`"${field}" wajib diisi`);
  }

  const date = normalizeDate(meta.date);
  if (!date) fail('"date" tidak valid');

  const video = isEmpty(meta.video) ? null : parseVideoUrl(String(meta.video).trim());
  if (!isEmpty(meta.video) && !video) {
    fail('"video" harus link TikTok (tiktok.com/@akun/video/...) atau Instagram (instagram.com/reel/...)');
  }

  const cover = isEmpty(meta.cover) ? null : String(meta.cover).trim();
  if (cover && !/^(\/|https:\/\/)/.test(cover)) fail('"cover" harus diawali / (file di public/) atau https://');

  return {
    slug,
    title: String(meta.title),
    description: String(meta.description),
    date,
    video,
    cover,
    draft,
    html: marked.parse(body),
  };
};

// files: { '/content/blog/<slug>.md': '<isi file mentah>' }
export const parsePosts = (files, { includeDrafts }) =>
  Object.entries(files)
    .map(([path, raw]) => parseOne(path, raw))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
