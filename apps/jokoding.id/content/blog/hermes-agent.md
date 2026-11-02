---
title: "Hermes Agent: Asisten AI yang Kerja Lewat Telegram (dan Cara Setup-nya)"
description: "Kenalan sama Hermes Agent, AI agent yang bisa kamu kasih tugas lewat chat Telegram, plus cara setup-nya dan pilihan model AI murah buat menjalankannya."
date: 2026-11-02
author: "Irfan Qobus"
authorUrl: https://github.com/irfanqs
cover: /blog/hermes-agent.jpg
draft: false
---

Pernah gak sih pas kalian lagi di luar rumah, tiba-tiba kepikiran ada kerjaan kecil yang harus diselesain? Mau buka laptop males, dikerjain di HP malah bikin repot, tapi kalau ditunda malah kelupaan.

Nah, gimana kalau kalian punya asisten pribadi yang bisa ngerjain tugas-tugas itu, bahkan pas kalian lagi tidur?

## Kenalin, Hermes Agent

[Hermes Agent](https://github.com/NousResearch/hermes-agent) adalah AI agent open source (lisensi MIT) buatan [Nous Research](https://nousresearch.com). Hermes bukan sekadar chatbot AI yang cuma bisa jawab pertanyaan. Dia **AI agent**: kita kasih tugas, dia yang jalanin langsung.

Yang menarik, semuanya bisa kita kontrol cuma lewat chat Telegram, tanpa harus buka laptop.

## Contoh tugas yang bisa dikerjain

Misalnya nih, aku lagi di luar rumah dan tiba-tiba harus revisi data di Excel atau ngedit dokumen di Google Docs. Daripada harus buka laptop, aku tinggal kasih instruksi lewat Telegram, dan Hermes bisa bantu ngerjainnya.

Buat kalian yang programmer, Hermes juga bisa bantu:

- ngerjain task coding,
- ngecek error,
- bahkan ngelola project,

selama akses dan tools-nya udah disiapin.

## Bisa jalan otomatis

Hermes gak cuma ngerjain tugas yang kita perintahin. Dia juga bisa jalan secara otomatis.

Misalnya, setiap pagi aku pengen dapet rangkuman berita teknologi terbaru. Daripada nyari satu-satu, tinggal suruh Hermes ngirim rangkumannya otomatis setiap jam 7 pagi.

## Gak cuma lewat Telegram

Hermes juga bisa dihubungkan ke aplikasi chat lain seperti WhatsApp, Discord, Slack, Signal, dan [banyak platform lainnya](https://hermes-agent.nousresearch.com/docs/user-guide/messaging). Jadi kalian bisa ngobrol sama asisten AI ini lewat aplikasi chat yang biasa kalian pakai sehari-hari.

## Penting: Hermes butuh model AI (LLM)

Ini yang sering kelewat. Hermes itu "badan"-nya: dia yang ngatur tugas, jalanin perintah, dan nyambung ke Telegram. "Otak"-nya adalah **model AI atau LLM** (*large language model*) yang kalian sambungkan lewat API. Tanpa model AI, Hermes gak bisa ngapa-ngapain. Dokumentasinya juga bilang begitu: [minimal satu provider model harus disetel](https://hermes-agent.nousresearch.com/docs/integrations/providers).

Dan jujur aja: **model AI buat Hermes praktisnya gak bisa gratisan.**

- Kredit gratis dari provider biasanya kecil banget dan cepat habis, karena agent bisa ngirim banyak permintaan ke model untuk satu tugas.
- Model yang jalan di komputer sendiri memang gratis, tapi butuh hardware kuat. Hermes juga butuh model dengan *context* minimal **64.000 token**, dan model kecil yang muat di laptop biasa sering gak sanggup.

Kabar baiknya, kalian gak perlu langganan bulanan yang mahal. Hampir semua provider pakai sistem **PAYG** (*pay as you go*): isi saldo, lalu bayar sesuai pemakaian, dihitung per token yang diproses. Kalau Hermes lagi gak dipakai, saldo gak berkurang.

## Pilihan model murah: model AI dari China

Kalau mau hemat, model-model dari China biasanya jauh lebih murah dibanding model populer dari Amerika, dan kemampuannya sudah bagus buat kerjaan agent. Semuanya sudah didukung Hermes:

- **[DeepSeek](https://www.deepseek.com)**: salah satu yang paling murah dan populer. [Cek harganya di sini](https://api-docs.deepseek.com/quick_start/pricing).
- **[GLM dari Z.ai](https://z.ai/model-api)**: model GLM buatan Zhipu, kuat buat coding dan tugas agent.
- **[Kimi dari Moonshot AI](https://platform.moonshot.ai)**: dikenal dengan *context* yang panjang.
- **[Qwen dari Alibaba Cloud](https://www.alibabacloud.com/en/product/modelstudio)**: banyak pilihan ukuran model, dari yang ringan sampai yang besar.
- **[MiniMax](https://www.minimax.io)**: alternatif lain yang harganya bersaing.

Mau coba-coba beberapa model tanpa daftar ke banyak tempat? Pakai **[OpenRouter](https://openrouter.ai)**: cukup satu akun dan satu API key untuk akses banyak model, termasuk model-model di atas.

Beberapa catatan:

- Harga model sering berubah, jadi cek halaman harga masing-masing sebelum isi saldo.
- Pastikan model yang dipilih punya *context* minimal 64K token.
- Data yang kalian kirim ke Hermes ikut diproses di server provider model. Jangan kirim data yang sangat sensitif.

## Cara setup Hermes Agent

Berikut langkah dasarnya, diringkas dari [Quickstart resmi Hermes](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart).

### 1. Tentukan Hermes mau jalan di mana

Hermes bisa jalan di Linux, macOS, WSL2, dan Windows. Kalau mau Hermes nyala terus 24 jam (misalnya buat tugas otomatis tiap pagi), jalankan di **VPS** alih-alih laptop. VPS murah sudah cukup.

### 2. Install Hermes

Di Linux, macOS, atau WSL2:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
source ~/.bashrc   # atau: source ~/.zshrc
```

Di Windows (PowerShell):

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

### 3. Sambungkan model AI

Siapkan dulu API key dari provider yang kalian pilih, misalnya dari DeepSeek atau Z.ai. Lalu jalankan wizard setup:

```bash
hermes setup
```

Pilih **Full Setup** kalau mau pakai API key sendiri. Wizard akan nanya provider, model, dan API key kalian. Mau ganti model nanti? Tinggal jalankan:

```bash
hermes model
```

API key disimpan di `~/.hermes/.env`, jadi jangan dibagikan ke siapa pun.

### 4. Coba ngobrol

```bash
hermes --tui
```

Kalau muncul tampilan dengan nama model dan daftar tools, berarti Hermes sudah siap.

### 5. Sambungkan ke Telegram

1. Buka [@BotFather](https://t.me/BotFather) di Telegram, kirim `/newbot`, lalu ikuti instruksinya. Simpan **token bot** yang dikasih.
2. Cari tahu **user ID** Telegram kalian lewat [@userinfobot](https://t.me/userinfobot). User ID itu angka, bukan username.
3. Jalankan wizard gateway, lalu pilih Telegram. Masukkan token bot dan user ID kalian:

   ```bash
   hermes gateway setup
   ```

4. Nyalakan gateway-nya:

   ```bash
   hermes gateway
   ```

Kirim pesan ke bot kalian. Kalau dibalas, berarti sudah tersambung. Secara default, cuma user ID yang kalian daftarkan yang bisa ngobrol sama bot ini, jadi orang lain gak bisa nyuruh-nyuruh Hermes kalian. Panduan lengkapnya ada di [dokumentasi Telegram Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram).

### 6. Biar Hermes nyala terus

Supaya gateway tetap jalan walaupun terminal ditutup, pasang sebagai service:

```bash
hermes gateway install
hermes gateway start
```

Di VPS, pakai versi system service supaya Hermes ikut nyala lagi setelah server restart:

```bash
sudo hermes gateway install --system
sudo hermes gateway start --system
```

### 7. Bikin tugas otomatis

Cara paling gampang: minta langsung lewat chat, misalnya *"Setiap jam 7 pagi, kirim rangkuman berita teknologi terbaru ke Telegram aku."* Bisa juga lewat terminal:

```bash
hermes cron create "every day at 7am" "Kirim rangkuman berita teknologi terbaru"
```

Tugas otomatis cuma jalan selama gateway nyala, jadi pastikan langkah 6 sudah beres. Detailnya ada di [dokumentasi cron Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).

### Kalau ada masalah

- `hermes doctor` buat ngecek apa yang salah.
- `hermes update` buat update ke versi terbaru.

## Mau pakai tapi gak mau ribet?

Masih banyak hal menarik yang bisa dilakuin sama si Hermes ini. Kalau kalian gak mau ribet ngurus instalasi, VPS, dan konfigurasi model AI-nya, Jokoding bisa bantu setup sampai siap dipakai.
