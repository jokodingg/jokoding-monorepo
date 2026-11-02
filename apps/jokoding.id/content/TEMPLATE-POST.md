<!--
  TEMPLATE POST BLOG JOKODING

  Cara pakai:
  1. Salin file ini ke content/blog/<slug>.md
     - <slug> jadi alamat halaman: content/blog/hermes-agent.md -> jokoding.id/blog/hermes-agent
     - Hanya huruf kecil, angka, dan tanda -
  2. Taruh gambar cover di public/blog/<slug>.jpg (disarankan 1200x630)
  3. Isi frontmatter di bawah, hapus komentar ini, tulis artikel
  4. Cek di `pnpm dev:jokoding` -> http://localhost:5173/blog
  5. Commit + push. Vercel build ulang otomatis.

  Field:
  - title        wajib. Judul post.
  - description  wajib. Satu kalimat ringkasan, tampil di kartu dan preview WhatsApp/Google.
  - date         wajib. Format YYYY-MM-DD.
  - cover        wajib kalau draft: false. Path gambar di public/ (diawali /) atau URL https://
  - video        opsional. Link TikTok (tiktok.com/@akun/video/...) atau Instagram (instagram.com/reel/...).
                 Link pendek vm.tiktok.com tidak bisa, buka dulu lalu salin link lengkapnya.
                 Tanpa video, cover tampil sebagai gambar pembuka.
  - draft        true = cuma tampil di pnpm dev, false = terbit. Hanya boleh true atau false.

  Kalau ada field yang salah, build gagal dengan pesan yang menyebut nama file dan field-nya.
-->
---
title: "Judul Post"
description: "Satu kalimat ringkasan isi post."
date: 2026-11-02
cover: /blog/judul-post.jpg
video: https://www.instagram.com/reel/KODE/
draft: true
---

Paragraf pembuka.

## Subjudul

Isi artikel. Bisa pakai **tebal**, *miring*, [link](https://jokoding.id), dan daftar:

- poin satu
- poin dua
