// Data landing page per niche layanan. Tambah niche baru = tambah satu objek di LANDINGS
// (route, prerender, sitemap, dan link footer ikut otomatis).
import { SITE_URL } from '../blog/seo';
import tomatoProject from '../assets/portfolio/project1.webp';
import lpgProject from '../assets/portfolio/project2.webp';
import kebayaProject from '../assets/portfolio/project3.webp';
import floodProject from '../assets/portfolio/project4.webp';
import careerAiProject from '../assets/portfolio/project5.webp';
import dipscriptProject from '../assets/portfolio/project6.webp';

const P = {
  tomato: { image: tomatoProject, title: 'Tomato Ripeness Classifier', desc: 'Klasifikasi kematangan tomat berdasarkan warna (ROI + color mask).', tech: ['Python', 'OpenCV', 'Matplotlib'] },
  lpg: { image: lpgProject, title: 'Website Jual Beli Gas LPG', desc: 'Website CRUD penjualan gas LPG yang terintegrasi dengan payment gateway.', tech: ['PHP Native', 'MySQL', 'Midtrans'] },
  kebaya: { image: kebayaProject, title: 'Website Jual Beli Kebaya', desc: 'Website jual beli kebaya dilengkapi dashboard analitik data.', tech: ['Laravel', 'Vue.js', 'MySQL'] },
  flood: { image: floodProject, title: 'IoT Monitoring Banjir', desc: 'Alat IoT untuk memonitoring ketinggian banjir dengan sensor jarak.', tech: ['Arduino', 'PlatformIO', 'Tinkercad'] },
  careerAi: { image: careerAiProject, title: 'Career AI', desc: 'Chatbot konsultasi karier dan prospek kerja berbasis RAG.', tech: ['Python', 'LangChain', 'RAG'] },
  dipscript: { image: dipscriptProject, title: 'Dipscript AI', desc: 'Bot Telegram untuk mengoreksi dan memperbaiki skripsi.', tech: ['n8n', 'Telegram Bot', 'Python'] },
};

export const DEFAULT_STEPS = [
  'Konsultasi gratis: ceritakan kebutuhan, fitur, dan deadline.',
  'Penawaran harga & timeline yang jelas, lalu DP 50%.',
  'Pengerjaan dengan update progres berkala.',
  'Serah terima source code, dokumentasi, dan sesi penjelasan.',
];

export const LANDINGS = [
  {
    path: '/iot',
    navLabel: 'Joki IoT',
    eyebrow: 'Internet of Things',
    h1: 'Joki IoT',
    title: 'Joki IoT - ESP32, Arduino & Monitoring Sensor | Jokoding',
    description: 'Jasa joki IoT untuk tugas, skripsi, dan project: ESP32, Arduino, Raspberry Pi, sensor monitoring, MQTT, Blynk, dan dashboard web. Konsultasi gratis.',
    intro: 'Butuh bantuan tugas, skripsi, atau alat IoT? Jokoding mengerjakan dari rangkaian hardware, program mikrokontroler, sampai dashboard monitoring dan kontrol jarak jauh.',
    services: [
      { title: 'Monitoring Sensor', desc: 'Suhu, kelembapan, gas, ketinggian air, kualitas udara, dan sensor lain dengan tampilan real-time.' },
      { title: 'Smart Home & Kontrol Relay', desc: 'Kontrol lampu, pompa, dan perangkat listrik dari HP lewat web, Blynk, atau Telegram.' },
      { title: 'Smart Farming', desc: 'Penyiraman otomatis, monitoring tanah & hidroponik, dan notifikasi kondisi tanaman.' },
      { title: 'Dashboard & Database', desc: 'Dashboard web/Android dengan grafik histori, Firebase, MySQL, atau Node-RED.' },
      { title: 'Komunikasi MQTT/LoRa', desc: 'Integrasi MQTT, HTTP, LoRa, dan GSM untuk lokasi tanpa WiFi.' },
      { title: 'Simulasi & Desain Rangkaian', desc: 'Simulasi Tinkercad/Wokwi/Proteus, wiring diagram, dan desain PCB.' },
    ],
    tech: ['ESP32', 'ESP8266', 'Arduino', 'Raspberry Pi', 'MQTT', 'Blynk', 'Firebase', 'Node-RED'],
    portfolio: [P.flood],
    faqs: [
      { q: 'Apakah bisa sekalian dibuatkan alat fisiknya?', a: 'Bisa. Kami bisa merakit alat lengkap dan mengirimkannya, atau hanya mengerjakan program dan rangkaian jika kamu sudah punya komponen.' },
      { q: 'Kalau belum punya komponen bagaimana?', a: 'Kami bantu buatkan daftar komponen beserta estimasi harga, atau pengerjaan cukup lewat simulasi (Tinkercad/Wokwi) jika diperbolehkan dosen.' },
      { q: 'Platform IoT apa saja yang didukung?', a: 'Blynk, Firebase, Thingspeak, Antares, Node-RED, Telegram Bot, maupun dashboard web/Android custom.' },
      { q: 'Apakah dapat penjelasan untuk sidang?', a: 'Ya. Disertai source code, wiring diagram, dan sesi penjelasan cara kerja alat.' },
    ],
  },
  {
    path: '/machine-learning',
    navLabel: 'Joki Machine Learning',
    eyebrow: 'Machine Learning',
    h1: 'Joki Machine Learning',
    title: 'Joki Machine Learning - Klasifikasi, Prediksi & Data Mining | Jokoding',
    description: 'Jasa joki machine learning untuk tugas & skripsi: klasifikasi, prediksi, clustering, analisis sentimen, dan data mining dengan Python. Konsultasi gratis.',
    intro: 'Butuh bantuan tugas atau skripsi machine learning? Jokoding mengerjakan dari preprocessing data, pemilihan algoritma, training, evaluasi, sampai model siap dipakai di aplikasi.',
    services: [
      { title: 'Klasifikasi', desc: 'Naive Bayes, SVM, KNN, Decision Tree, Random Forest, XGBoost dengan evaluasi lengkap.' },
      { title: 'Prediksi & Forecasting', desc: 'Regresi, LSTM, dan ARIMA untuk prediksi harga, penjualan, cuaca, dan time series.' },
      { title: 'Analisis Sentimen & NLP', desc: 'Scraping data Twitter/X, Google Play, atau YouTube, lalu klasifikasi sentimen dan topic modeling.' },
      { title: 'Clustering & Data Mining', desc: 'K-Means, DBSCAN, Apriori, dan segmentasi pelanggan.' },
      { title: 'Deep Learning', desc: 'ANN, CNN, LSTM, dan transfer learning dengan TensorFlow atau PyTorch.' },
      { title: 'Deploy Model', desc: 'Model dijadikan aplikasi web dengan Streamlit, Flask, atau FastAPI.' },
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'Pandas', 'Jupyter / Colab', 'Streamlit', 'XGBoost'],
    portfolio: [P.tomato],
    faqs: [
      { q: 'Apakah bisa bantu mencari dataset?', a: 'Bisa. Kami bantu mencari dataset publik (Kaggle, UCI), scraping data, atau mengolah dataset milikmu sendiri.' },
      { q: 'Apa saja yang didapat?', a: 'Source code (notebook/Python), model hasil training, hasil evaluasi (akurasi, precision, recall, F1, confusion matrix), dan penjelasan alurnya.' },
      { q: 'Bisa membandingkan beberapa algoritma?', a: 'Bisa. Perbandingan algoritma lengkap dengan tabel dan grafik hasil, cocok untuk bab hasil dan pembahasan.' },
      { q: 'Apakah dapat penjelasan untuk sidang?', a: 'Ya, disertai sesi penjelasan kode dan konsep supaya kamu siap menjawab pertanyaan penguji.' },
    ],
  },
  {
    path: '/website',
    navLabel: 'Jasa Pembuatan Website',
    eyebrow: 'Web Development',
    h1: 'Jasa Pembuatan Website & Joki Web',
    title: 'Jasa Pembuatan Website & Joki Coding Web Semarang | Jokoding',
    description: 'Jasa pembuatan website dan joki tugas web: company profile, toko online, sistem informasi, dan web skripsi dengan Laravel, React, atau PHP. Konsultasi gratis.',
    intro: 'Butuh website untuk usaha, tugas kuliah, atau skripsi? Jokoding membuat website cepat, responsif, dan siap online, dari landing page sampai sistem informasi lengkap.',
    services: [
      { title: 'Company Profile & Landing Page', desc: 'Website profesional, cepat, dan SEO-friendly untuk usaha dan UMKM.' },
      { title: 'Toko Online / E-Commerce', desc: 'Katalog, keranjang, checkout, dan payment gateway (Midtrans/Xendit).' },
      { title: 'Sistem Informasi', desc: 'Sistem informasi sekolah, inventaris, kasir (POS), klinik, dan absensi.' },
      { title: 'SPK & Sistem Pakar', desc: 'Sistem pendukung keputusan (SAW, AHP, TOPSIS) dan sistem pakar untuk skripsi.' },
      { title: 'Joki Tugas Web', desc: 'Tugas CRUD, framework, dan praktikum pemrograman web.' },
      { title: 'Deploy & Domain', desc: 'Setup hosting, domain, SSL, sampai website online.' },
    ],
    tech: ['Laravel', 'PHP', 'React', 'Next.js', 'Vue.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    portfolio: [P.lpg, P.kebaya],
    faqs: [
      { q: 'Berapa lama pembuatan website?', a: 'Landing page 3–5 hari, company profile 7–14 hari, dan sistem informasi atau web app 3–8 minggu tergantung fitur.' },
      { q: 'Apakah sudah termasuk hosting dan domain?', a: 'Bisa termasuk atau terpisah sesuai kebutuhan. Kami bantu setup sampai website online.' },
      { q: 'Apakah source code diberikan?', a: 'Ya, source code penuh diberikan setelah pelunasan beserta dokumentasi instalasi.' },
      { q: 'Bisa bantu skripsi berbasis web?', a: 'Bisa, termasuk perancangan UML/ERD, implementasi, dan pengujian black box.' },
    ],
  },
  {
    path: '/mobile-app',
    navLabel: 'Jasa Aplikasi Android',
    eyebrow: 'Mobile App',
    h1: 'Jasa Pembuatan Aplikasi Android & iOS',
    title: 'Jasa Pembuatan Aplikasi Android & Joki Mobile App | Jokoding',
    description: 'Jasa pembuatan aplikasi Android & iOS dan joki tugas mobile: Flutter, Kotlin, React Native, Firebase, dan integrasi API. Konsultasi gratis.',
    intro: 'Butuh aplikasi mobile untuk usaha, tugas, atau skripsi? Jokoding membuat aplikasi Android dan iOS dari desain UI, backend, sampai APK siap pakai.',
    services: [
      { title: 'Aplikasi Flutter', desc: 'Satu kode untuk Android dan iOS dengan tampilan modern.' },
      { title: 'Android Native (Kotlin/Java)', desc: 'Aplikasi Android native untuk tugas praktikum maupun produksi.' },
      { title: 'Integrasi Firebase & API', desc: 'Login, database real-time, notifikasi, dan koneksi ke REST API.' },
      { title: 'Aplikasi + IoT / AI', desc: 'Kontrol perangkat IoT dari HP, atau model ML/TFLite di dalam aplikasi.' },
      { title: 'UI/UX Design', desc: 'Desain Figma sebelum pengembangan supaya alur aplikasi jelas.' },
      { title: 'Rilis ke Play Store', desc: 'Bantu build, signing, dan upload aplikasi ke Google Play.' },
    ],
    tech: ['Flutter', 'Kotlin', 'Java', 'React Native', 'Firebase', 'SQLite', 'REST API', 'Figma'],
    portfolio: [],
    faqs: [
      { q: 'Lebih baik Flutter atau Kotlin?', a: 'Flutter cocok jika butuh Android dan iOS sekaligus. Kotlin cocok jika tugas atau dosen mewajibkan Android native. Kami bantu pilihkan saat konsultasi.' },
      { q: 'Apakah dapat file APK?', a: 'Ya, kamu mendapat APK siap install beserta source code lengkap.' },
      { q: 'Bisa sekalian buat backend-nya?', a: 'Bisa. Backend dengan Firebase, Laravel, atau Node.js beserta panel admin.' },
      { q: 'Berapa lama pengerjaannya?', a: 'Tugas sederhana 2–5 hari, aplikasi lengkap 2–6 minggu tergantung fitur.' },
    ],
  },
  {
    path: '/computer-vision',
    navLabel: 'Joki Computer Vision',
    eyebrow: 'Layanan AI',
    h1: 'Joki Computer Vision',
    title: 'Joki Computer Vision - YOLO, OpenCV & Deep Learning | Jokoding',
    description: 'Jasa joki computer vision untuk tugas, skripsi, dan project: deteksi objek YOLO, klasifikasi gambar CNN, face recognition, OCR, dan OpenCV. Konsultasi gratis.',
    intro: 'Butuh bantuan tugas, skripsi, atau project computer vision? Jokoding mengerjakan deteksi objek YOLO, klasifikasi gambar, face recognition, OCR, sampai image processing dengan OpenCV, lengkap dari dataset hingga model siap dipakai.',
    illustration: 'detection',
    services: [
      { title: 'Deteksi Objek (YOLO)', desc: 'Training YOLOv5/v8/v11 dengan dataset custom, real-time dari kamera atau video.' },
      { title: 'Klasifikasi Gambar (CNN)', desc: 'CNN, MobileNet, ResNet, EfficientNet dengan transfer learning untuk klasifikasi citra.' },
      { title: 'Face Recognition', desc: 'Absensi wajah, deteksi masker, deteksi ekspresi, dan verifikasi identitas.' },
      { title: 'OCR & Plat Nomor', desc: 'Membaca teks dari gambar, dokumen, dan plat nomor kendaraan (ANPR).' },
      { title: 'Segmentasi Citra', desc: 'Segmentasi semantik/instance dengan U-Net, Mask R-CNN, atau YOLO-seg.' },
      { title: 'Image Processing OpenCV', desc: 'Thresholding, deteksi tepi, ekstraksi fitur warna/tekstur, object counting & tracking.' },
    ],
    steps: [
      'Konsultasi gratis: ceritakan topik, dataset, dan deadline.',
      'Penawaran harga & timeline yang jelas, lalu DP 50%.',
      'Pengerjaan: dataset, training, evaluasi, dan update progres berkala.',
      'Serah terima source code, laporan hasil, dan sesi penjelasan.',
    ],
    tech: ['Python', 'OpenCV', 'YOLO (Ultralytics)', 'TensorFlow / Keras', 'PyTorch', 'Roboflow', 'Streamlit / Flask', 'Raspberry Pi'],
    portfolio: [P.tomato],
    faqs: [
      { q: 'Apa saja yang bisa dikerjakan di joki computer vision?', a: 'Deteksi objek (YOLOv5/v8/v11), klasifikasi gambar (CNN, transfer learning), face recognition, OCR, segmentasi citra, object tracking & counting, serta image processing klasik dengan OpenCV.' },
      { q: 'Apakah bisa sekalian siapkan dan anotasi dataset?', a: 'Bisa. Kami bantu mencari, mengumpulkan, dan melabeli dataset (Roboflow / LabelImg), lalu melakukan augmentasi, training, dan evaluasi model.' },
      { q: 'Hasil model bisa dipasang di mana?', a: 'Bisa dijalankan di laptop, web (Flask/FastAPI/Streamlit), Android, maupun perangkat edge seperti Raspberry Pi dan ESP32-CAM.' },
      { q: 'Apakah dapat penjelasan kode untuk persiapan sidang?', a: 'Ya. Setiap project disertai source code lengkap, laporan hasil (akurasi, confusion matrix, mAP), dan sesi penjelasan supaya kamu paham alurnya.' },
      { q: 'Berapa lama pengerjaannya?', a: 'Tugas sederhana 1–3 hari. Project deteksi objek dengan dataset custom biasanya 1–3 minggu, tergantung jumlah data dan target akurasi.' },
    ],
  },
  {
    path: '/chatbot-ai',
    navLabel: 'Jasa Chatbot AI',
    eyebrow: 'AI & LLM',
    h1: 'Jasa Pembuatan Chatbot AI (LLM)',
    title: 'Jasa Chatbot AI & LLM - RAG, WhatsApp & Telegram Bot | Jokoding',
    description: 'Jasa pembuatan chatbot AI berbasis LLM: RAG dari dokumen sendiri, bot WhatsApp/Telegram, dan customer service otomatis. Cocok untuk skripsi dan bisnis.',
    intro: 'Butuh chatbot pintar yang bisa menjawab dari dokumen atau data kamu sendiri? Jokoding membuat chatbot AI berbasis LLM untuk skripsi, kampus, maupun bisnis.',
    services: [
      { title: 'Chatbot RAG', desc: 'Chatbot yang menjawab dari PDF, website, atau database milikmu dengan LangChain/LlamaIndex.' },
      { title: 'Bot WhatsApp & Telegram', desc: 'Customer service, FAQ otomatis, dan notifikasi lewat WhatsApp atau Telegram.' },
      { title: 'Chatbot Website', desc: 'Widget chat AI yang dipasang di website kamu.' },
      { title: 'AI Agent', desc: 'Agent yang bisa memanggil API, mencari data, dan menjalankan tugas otomatis.' },
      { title: 'Chatbot NLP Klasik', desc: 'Chatbot berbasis intent (Rasa, NLTK) untuk kebutuhan skripsi.' },
      { title: 'Evaluasi Chatbot', desc: 'Pengujian akurasi jawaban dan kuesioner pengguna untuk bab hasil skripsi.' },
    ],
    tech: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI / Gemini / Claude API', 'Vector DB', 'FastAPI', 'Telegram Bot', 'WhatsApp API'],
    portfolio: [P.careerAi],
    faqs: [
      { q: 'Model AI apa yang dipakai?', a: 'Bisa memakai API seperti OpenAI, Gemini, atau Claude, maupun model open source (Llama, Qwen) yang dijalankan sendiri.' },
      { q: 'Apakah ada biaya API bulanan?', a: 'Jika memakai API berbayar, biaya mengikuti pemakaian. Kami bantu pilihkan opsi yang paling hemat sesuai kebutuhan.' },
      { q: 'Bisa menjawab dari dokumen saya sendiri?', a: 'Bisa, dengan teknik RAG: dokumen kamu diindeks sehingga chatbot menjawab berdasarkan isinya.' },
    ],
  },
  {
    path: '/n8n-automation',
    navLabel: 'Jasa n8n Automation',
    eyebrow: 'Automation',
    h1: 'Jasa n8n Automation',
    title: 'Jasa n8n Automation - Workflow & Bot AI Otomatis | Jokoding',
    description: 'Jasa pembuatan workflow n8n: otomasi bisnis, integrasi Google Sheets, WhatsApp, Telegram, email, dan AI agent tanpa kerja manual berulang.',
    intro: 'Capek mengerjakan hal yang sama berulang-ulang? Jokoding membuat workflow n8n yang menghubungkan aplikasi kamu dan menjalankan pekerjaan secara otomatis.',
    services: [
      { title: 'Otomasi Bisnis', desc: 'Rekap order, laporan harian, dan follow-up pelanggan secara otomatis.' },
      { title: 'Integrasi Aplikasi', desc: 'Google Sheets, Gmail, Notion, Airtable, WhatsApp, Telegram, dan webhook.' },
      { title: 'AI Agent di n8n', desc: 'Workflow dengan LLM untuk merangkum, membalas pesan, atau mengolah dokumen.' },
      { title: 'Bot Telegram/WhatsApp', desc: 'Bot yang terhubung ke data dan workflow kamu.' },
      { title: 'Scraping & Monitoring', desc: 'Ambil data dari website atau API secara terjadwal dan kirim notifikasi.' },
      { title: 'Setup Server n8n', desc: 'Instalasi n8n self-hosted di VPS beserta backup dan keamanan.' },
    ],
    tech: ['n8n', 'Webhook', 'Google Sheets API', 'Telegram Bot', 'WhatsApp API', 'OpenAI / Gemini', 'Docker', 'VPS'],
    portfolio: [P.dipscript],
    faqs: [
      { q: 'Apa itu n8n?', a: 'n8n adalah tools otomasi workflow (mirip Zapier) yang bisa di-hosting sendiri sehingga lebih hemat dan fleksibel.' },
      { q: 'Apakah perlu server sendiri?', a: 'Bisa memakai n8n Cloud atau VPS sendiri. Kami bantu setup sesuai budget.' },
      { q: 'Apakah workflow bisa saya ubah sendiri nanti?', a: 'Bisa. Workflow diserahkan beserta penjelasan sehingga kamu bisa mengubahnya sendiri.' },
    ],
  },
];

export const landingMeta = (l) => {
  const canonical = `${SITE_URL}${l.path}`;
  return {
    title: l.title,
    description: l.description,
    canonical,
    image: `${SITE_URL}/og-image.jpg`,
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: l.h1,
          serviceType: l.eyebrow,
          description: l.description,
          url: canonical,
          areaServed: { '@type': 'Country', name: 'Indonesia' },
          provider: { '@type': 'LocalBusiness', name: 'Jokoding', url: SITE_URL },
        },
        {
          '@type': 'FAQPage',
          mainEntity: l.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: l.h1, item: canonical },
          ],
        },
      ],
    },
  };
};
