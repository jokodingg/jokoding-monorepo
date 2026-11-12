import { SITE_URL } from '../blog/seo';

export const CV_PATH = '/computer-vision';
export const CV_TITLE = 'Joki Computer Vision - YOLO, OpenCV & Deep Learning | Jokoding';
export const CV_DESCRIPTION =
  'Jasa joki computer vision untuk tugas, skripsi, dan project: deteksi objek YOLO, klasifikasi gambar CNN, face recognition, OCR, dan OpenCV. Konsultasi gratis.';

export const CV_FAQS = [
  {
    q: 'Apa saja yang bisa dikerjakan di joki computer vision?',
    a: 'Deteksi objek (YOLOv5/v8/v11), klasifikasi gambar (CNN, transfer learning), face recognition, OCR, segmentasi citra, object tracking & counting, serta image processing klasik dengan OpenCV.',
  },
  {
    q: 'Apakah bisa sekalian siapkan dan anotasi dataset?',
    a: 'Bisa. Kami bantu mencari, mengumpulkan, dan melabeli dataset (Roboflow / LabelImg), lalu melakukan augmentasi, training, dan evaluasi model.',
  },
  {
    q: 'Hasil model bisa dipasang di mana?',
    a: 'Bisa dijalankan di laptop, web (Flask/FastAPI/Streamlit), Android, maupun perangkat edge seperti Raspberry Pi dan ESP32-CAM.',
  },
  {
    q: 'Apakah dapat penjelasan kode untuk persiapan sidang?',
    a: 'Ya. Setiap project disertai source code lengkap, laporan hasil (akurasi, confusion matrix, mAP), dan sesi penjelasan supaya kamu paham alurnya.',
  },
  {
    q: 'Berapa lama pengerjaannya?',
    a: 'Tugas sederhana 1–3 hari. Project deteksi objek dengan dataset custom biasanya 1–3 minggu, tergantung jumlah data dan target akurasi.',
  },
];

export const computerVisionMeta = () => {
  const canonical = `${SITE_URL}${CV_PATH}`;
  return {
    title: CV_TITLE,
    description: CV_DESCRIPTION,
    canonical,
    image: `${SITE_URL}/og-image.jpg`,
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Joki Computer Vision',
          serviceType: 'Computer Vision',
          description: CV_DESCRIPTION,
          url: canonical,
          areaServed: { '@type': 'Country', name: 'Indonesia' },
          provider: { '@type': 'LocalBusiness', name: 'Jokoding', url: SITE_URL },
        },
        {
          '@type': 'FAQPage',
          mainEntity: CV_FAQS.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Computer Vision', item: canonical },
          ],
        },
      ],
    },
  };
};
