# Blog `/blog` di jokoding.id — Design

Tanggal: 2026-11-02
Status: disetujui; revisi 2026-11-02: video pindah dari YouTube ke TikTok dan Instagram Reels

## Tujuan

Menambah blog di `jokoding.id/blog` untuk konten Jokoding, misalnya video explainer "Hermes Agent" (`jokoding-animate/pieces/hermes-green/renders/final3.mp4`).

Blog punya dua tujuan dengan bobot sama:

1. **SEO**: setiap post menjadi halaman HTML yang bisa di-index Google dan punya share preview yang benar di WhatsApp, Instagram, dan X.
2. **Etalase**: kumpulan video dan artikel yang membangun kepercayaan calon klien, dengan jalan langsung ke order form.

### Keputusan dari user

- Video diposting di TikTok atau Instagram Reels, lalu blog meng-embed video itu. Tidak ada file video di repo. (Revisi: awalnya YouTube.)
- Post ditulis sebagai file Markdown di repo. Commit dan push sama dengan publish.
- Pendekatan teknis: prerender di dalam app Vite yang sama (bukan app Astro terpisah, bukan SPA murni).

### Asumsi

- Satu post berisi embed video ditambah artikel teks. Artikel bisa diturunkan dari transkrip narasi (`narration.srt`).
- Bahasa Indonesia. Gaya visual mengikuti situs yang ada (Poppins, Tailwind, Navbar, Footer).
- Setiap post punya CTA ke order form yang sudah ada.
- Volume kecil (puluhan post). Tag, search, pagination, RSS, dan komentar di luar scope.

## Kriteria sukses

- `curl https://jokoding.id/blog/<slug>` mengembalikan HTML berisi judul, isi artikel, meta og/twitter, dan JSON-LD post itu tanpa menjalankan JS.
- Link post yang dibagikan di WhatsApp menampilkan judul, deskripsi, dan gambar cover.
- Menambah post cukup dengan menambah satu file `.md`, tanpa mengubah kode.
- Home `/` berperilaku sama seperti sebelumnya, termasuk scroll antar section dan order form.
- Frontmatter yang salah membuat build gagal dengan pesan yang menyebut nama file.

## Arsitektur

### Routing

- Tambah `react-router-dom` dengan tiga route: `/` (Home), `/blog` (daftar post), `/blog/:slug` (detail post).
- Isi `src/App.jsx` sekarang (urutan section home) pindah ke `src/pages/Home.jsx`.
- `src/App.jsx` berisi `OrderFormProvider`, `Navbar`, `<Routes>`, `Footer`, dan `Analytics`. `App` tidak memasang router sendiri. Router dipasang oleh entry.

### Entry

- `src/entry-client.jsx` (pengganti `src/main.jsx`): membungkus `App` dengan `BrowserRouter`. Kalau `#root` sudah berisi markup prerender, entry memakai `hydrateRoot`. Kalau `#root` kosong, entry memakai `createRoot`.
- `src/entry-server.jsx`: mengekspor `render(url)` yang mengembalikan `renderToString` dari `App` di dalam `StaticRouter`. Modul ini juga mengekspor data post dan helper SEO untuk dipakai script prerender. Modul ini hanya dipakai saat build.
- `index.html` menunjuk ke `/src/entry-client.jsx`.

### Build

Script `build` di `apps/jokoding.id/package.json` menjalankan tiga langkah berurutan:

1. `vite build`: client bundle ke `dist/`.
2. `vite build --ssr src/entry-server.jsx --outDir dist-server`: server bundle.
3. `node scripts/prerender.js`: membaca `dist/index.html` sebagai template, lalu menulis:
   - `dist/blog/index.html`
   - `dist/blog/<slug>/index.html` untuk setiap post yang dipublish
   - `dist/sitemap.xml`

Catatan build:

- `dist-server/` masuk `.gitignore`. Output turbo tetap `dist/**`.
- Home `/` tidak diprerender karena Hero memakai animasi `motion` dan `RotatingText` yang berisiko hydration mismatch. `dist/index.html` tetap sebagai shell SPA. Prerender home bisa menjadi task terpisah.
- Vercel menyajikan `dist/blog/<slug>/index.html` untuk `/blog/<slug>`. Slug yang tidak ada mendapat 404 bawaan Vercel. `vercel.json` mendapat `"buildCommand": "pnpm build"`, supaya Vercel menjalankan ketiga langkah dan tidak hanya `vite build` dari preset.

### Navigasi

- Navbar mendapat link `blog` yang menuju `/blog`.
- Link section di Navbar (`home`, `services`, `portfolio`, `testimonials`): di `/` tetap smooth scroll seperti sekarang. Di halaman lain, link navigate ke `/#<id>`.
- Logo: di `/` scroll ke atas. Di halaman lain, navigate ke `/`.
- `Home` membaca `location.hash` saat mount, lalu scroll ke section itu dengan offset 80px yang sama.
- Link Footer `#services`, `#portfolio`, dan `#testimonials` menjadi `/#services`, `/#portfolio`, dan `/#testimonials`.
- Di luar `/`, Navbar selalu memakai gaya scrolled (latar gelap), karena gaya transparan tidak terbaca di atas halaman blog.

## Model konten

Setiap post adalah satu file `apps/jokoding.id/content/blog/<slug>.md`. Slug diambil dari nama file.

```md
---
title: "Hermes Agent: Asisten AI yang Kerja Lewat Telegram"
description: "Satu kalimat ringkasan, dipakai untuk meta description dan kartu."
date: 2026-11-02
video: https://www.tiktok.com/@jokodingg/video/7432109876543210987
cover: /blog/hermes-agent.jpg
draft: false
---

Isi artikel dalam Markdown.
```

| Field | Wajib | Keterangan |
|---|---|---|
| `title` | ya | Judul post, `<title>`, dan `og:title` |
| `description` | ya | Meta description dan teks kartu |
| `date` | ya | Format `YYYY-MM-DD`. Dipakai untuk urutan, tampilan, dan `uploadDate` |
| `video` | ya, kecuali `draft: true` | Link TikTok (`tiktok.com/@akun/video/<id>`) atau Instagram (`instagram.com/reel/<kode>`, `/reels/`, `/p/`). Link pendek `vm.tiktok.com` ditolak |
| `cover` | ya, kecuali `draft: true` | Path gambar di `public/` (disarankan 1200x630) atau URL `https://`. Wajib karena thumbnail TikTok dan Instagram tidak bisa diambil otomatis secara stabil |
| `draft` | tidak | Default `false`. Draft tampil di dev dan disembunyikan di production |

Link video diubah oleh `parseVideoUrl(url)` menjadi `{ platform: 'tiktok' | 'instagram', id, embedUrl }`:

- TikTok: `embedUrl` = `https://www.tiktok.com/player/v1/<id>`
- Instagram: `embedUrl` = `https://www.instagram.com/reel/<kode>/embed/`

### Loader `src/blog/posts.js`

- Membaca file dengan `import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true })`.
- Logika parse dan validasi ada di fungsi murni `parsePosts(files, { includeDrafts })`, supaya bisa ditest tanpa Vite.
- Frontmatter diparse dengan paket `front-matter`. `gray-matter` tidak dipakai karena bergantung pada `Buffer`.
- Markdown diubah ke HTML dengan `marked`, satu kali saat modul dimuat. Konten berasal dari repo sendiri, jadi dianggap terpercaya dan dirender dengan `dangerouslySetInnerHTML`.
- `includeDrafts` bernilai `import.meta.env.DEV`.
- Ekspor modul: `getPosts()` (urut tanggal terbaru) dan `getPost(slug)` (mengembalikan `undefined` kalau tidak ada).
- Semua post masuk bundle client. Kalau jumlah post mencapai ratusan, loader dipecah per post.

### Validasi (build gagal)

- Field wajib kosong. Contoh pesan: `content/blog/x.md: "title" wajib diisi`.
- `date` tidak valid.
- `video` bukan link TikTok atau Instagram yang dikenali (juga pada draft).
- Nama file bukan slug valid (hanya huruf kecil, angka, dan `-`).

## UI

### `/blog`

- Judul halaman dan satu kalimat pengantar.
- Grid kartu: 1 kolom di HP, 2 di tablet, 3 di desktop.
- Isi kartu: cover, tanggal (format `2 November 2026`), judul, deskripsi. Seluruh kartu adalah link.
- Kalau tidak ada post yang dipublish, tampil teks "Belum ada tulisan".

### `/blog/:slug`

Urutan isi:

1. Link "← Semua tulisan"
2. Judul dan tanggal
3. Video, ditampilkan dengan komponen `VideoEmbed`, lebar maksimal sekitar 360px (Instagram 400px), di tengah:
   - TikTok: facade berupa `cover` ditambah tombol play. Iframe `<embedUrl>?autoplay=1&rel=0` baru dimuat saat diklik. Rasio 9:16.
   - Instagram: iframe `embedUrl` dimuat langsung dengan `loading="lazy"`, karena embed Instagram tidak mendukung autoplay dan facade akan butuh dua klik. Tinggi awal 640px, lalu mengikuti pesan `MEASURE` dari halaman embed Instagram. Bingkai bawaan Instagram (header akun, footer) ikut tampil.
   - Tanpa `video` (draft): kotak "Video belum tersedia".
4. Artikel di dalam kelas `prose` dari `@tailwindcss/typography`, dengan aksen emerald.
5. Kotak CTA: "Punya project IT yang mirip?" dan tombol yang memanggil `useOrderForm().open()`.

Kalau slug tidak ada, halaman menampilkan "Tulisan tidak ditemukan" dengan link ke `/blog`. Kasus ini hanya terjadi di dev dan saat navigasi client. Di production, URL langsung mendapat 404 dari Vercel.

## SEO

### `src/blog/seo.js`

Fungsi murni yang dipakai bersama oleh prerender dan client:

- `blogIndexMeta()` dan `postMeta(post)` mengembalikan `{ title, description, canonical, image, type, jsonLd }`.
- `renderHead(meta)` mengembalikan string HTML untuk `<title>`, `meta description`, `link canonical`, `og:*`, `twitter:*`, dan `<script type="application/ld+json">`. Semua nilai di-escape.
- JSON-LD post: `BlogPosting` dengan properti `video` berupa `VideoObject` (`name`, `description`, `thumbnailUrl` = cover, `uploadDate`, `embedUrl` = `video.embedUrl`).
- Format title: `<judul post> | Blog Jokoding`.

### Prerender

- `scripts/prerender.js` mengganti blok head antara penanda `<!-- head:start -->` dan `<!-- head:end -->` di `dist/index.html` dengan hasil `renderHead(meta)`.
- Blok head itu berisi title, meta description, canonical, og, twitter, dan JSON-LD yang sekarang ada di `index.html`. Penanda ditambahkan ke `index.html`. Isi blok untuk home tidak berubah.
- Markup dari `render(url)` disisipkan ke `<div id="root"></div>`.
- Kalau penanda atau `<div id="root"></div>` tidak ditemukan, script throw.

### Client

- Saat navigasi di client, halaman blog memperbarui `document.title`. Meta tag lain hanya penting untuk crawler, dan crawler mendapat HTML prerender.

### Sitemap

- `buildSitemap(posts)` di `src/blog/sitemap.js` menghasilkan XML berisi `/`, `/blog`, dan setiap post yang dipublish dengan `lastmod` = `date`.
- `public/sitemap.xml` dihapus. `robots.txt` tetap menunjuk ke `/sitemap.xml`.

## Post pertama: `hermes-agent.md`

- Artikel ditulis dari `pieces/hermes-green/renders/narration.srt`, dirapikan menjadi paragraf dan subjudul.
- Cover `public/blog/hermes-agent.jpg` (1200x630) dibuat dari frame detik 21,6 di `final3.mp4` ("Hermes Agent"), dengan latar frame yang sama di-blur.
- `draft: true`, tanpa `video`. User memposting video ke TikTok atau Instagram, lalu mengisi `video` dengan link-nya dan mengubah `draft` menjadi `false`.

## Dependency baru (`apps/jokoding.id`)

- `react-router-dom`
- `front-matter`
- `marked`
- `@tailwindcss/typography`

## Testing

Unit test dengan vitest, mengikuti pola `src/order/buildOrderMessage.test.js`:

- `src/blog/parsePosts.test.js`: parse frontmatter, field wajib, aturan `video` dan `cover` hanya untuk non-draft, link video tidak dikenal, filter draft, urutan tanggal, `date` tidak valid, nama file bukan slug valid.
- `src/blog/parseVideoUrl.test.js`: link TikTok, variasi link Instagram, link tidak didukung (`vm.tiktok.com`, YouTube, profil Instagram).
- `src/blog/seo.test.js`: isi meta tag, JSON-LD, escape `"`, `<`, dan `&` pada judul dan deskripsi.
- `src/blog/sitemap.test.js`: daftar URL dan `lastmod`.

Smoke test `scripts/smoke.js`, dijalankan setelah `pnpm build`:

- `dist/blog/index.html` memuat `<title>` blog dan markup daftar post di dalam `#root`.
- Untuk setiap post yang dipublish, `dist/blog/<slug>/index.html` memuat judul post di `<title>` dan di dalam `#root`.
- Selama semua post masih draft, hanya pengecekan pertama yang berjalan.

Cek manual di `vite preview`:

- Navigasi client antara home dan blog.
- Tidak ada warning hydration di console.
- Link `/#services` dari halaman blog scroll ke section yang benar.
- Order form terbuka dari CTA post.
- Tampilan di lebar HP (375px).

## Di luar scope

- Prerender home.
- Tag, kategori, search, pagination, RSS, komentar.
- CMS.
- Hosting video sendiri.
- YouTube (dihapus di revisi; bisa ditambah lagi lewat `parseVideoUrl`).
- Halaman 404 kustom.
