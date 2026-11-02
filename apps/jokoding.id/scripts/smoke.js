// Cek hasil prerender setelah `pnpm build`: title dan isi #root ada di HTML statis.
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { getPosts, blogIndexMeta, postMeta, renderHead } = await import(
  pathToFileURL(join(root, 'dist-server/entry-server.js')).href
);

const failures = [];

const check = async (url, meta, rootText) => {
  const file = join(root, 'dist', url, 'index.html');
  const html = await readFile(file, 'utf8').catch(() => null);
  if (html === null) return failures.push(`${url}: ${file} tidak ada`);

  const titleTag = renderHead(meta).split('\n')[0].trim();
  if (!html.includes(titleTag)) failures.push(`${url}: ${titleTag} tidak ditemukan`);

  const rootHtml = html.split('<div id="root">')[1]?.split('<script')[0] ?? '';
  if (!rootHtml.includes(rootText)) failures.push(`${url}: #root tidak memuat "${rootText}"`);

  console.log(`smoke: ${url}`);
};

// Escape sama seperti React renderToString, supaya judul berisi & atau " tetap cocok.
const escapeLikeReact = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

await check('/blog', blogIndexMeta(), '>Blog</h1>');
for (const post of getPosts()) {
  await check(`/blog/${post.slug}`, postMeta(post), escapeLikeReact(post.title));
}

if (failures.length) {
  console.error(`smoke gagal:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log('smoke: OK');
