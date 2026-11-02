// Menulis HTML statis untuk /blog dan setiap post, plus sitemap.xml.
// Dijalankan setelah `vite build` (client) dan `vite build --ssr` (dist-server).
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { injectPage } from './lib/injectPage.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const { render, getPosts, blogIndexMeta, postMeta, renderHead, buildSitemap } = await import(
  pathToFileURL(join(root, 'dist-server/entry-server.js')).href
);

const template = await readFile(join(dist, 'index.html'), 'utf8');

const writePage = async (url, meta) => {
  const file = join(dist, url, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, injectPage(template, { head: renderHead(meta), html: render(url) }));
  console.log(`prerender: ${file.replace(`${root}/`, '')}`);
};

const posts = getPosts();

// Cover lokal yang salah ketik tidak boleh lolos: kartu, facade, dan preview WhatsApp jadi tanpa gambar.
for (const post of posts) {
  if (post.cover?.startsWith('/') && !existsSync(join(dist, post.cover))) {
    throw new Error(`content/blog/${post.slug}.md: cover ${post.cover} tidak ada di public/`);
  }
}

await writePage('/blog', blogIndexMeta());
for (const post of posts) {
  await writePage(`/blog/${post.slug}`, postMeta(post));
}

const today = new Date().toISOString().slice(0, 10);
await writeFile(join(dist, 'sitemap.xml'), buildSitemap(posts, today));
console.log('prerender: dist/sitemap.xml');
