import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOrderForm } from '../order/OrderFormProvider';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { CV_FAQS, CV_TITLE } from '../landing/computerVision';

const SERVICES = [
  { title: 'Deteksi Objek (YOLO)', desc: 'Training YOLOv5/v8/v11 dengan dataset custom, real-time dari kamera atau video.' },
  { title: 'Klasifikasi Gambar (CNN)', desc: 'CNN, MobileNet, ResNet, EfficientNet dengan transfer learning untuk klasifikasi citra.' },
  { title: 'Face Recognition', desc: 'Absensi wajah, deteksi masker, deteksi ekspresi, dan verifikasi identitas.' },
  { title: 'OCR & Plat Nomor', desc: 'Membaca teks dari gambar, dokumen, dan plat nomor kendaraan (ANPR).' },
  { title: 'Segmentasi Citra', desc: 'Segmentasi semantik/instance dengan U-Net, Mask R-CNN, atau YOLO-seg.' },
  { title: 'Image Processing OpenCV', desc: 'Thresholding, deteksi tepi, ekstraksi fitur warna/tekstur, object counting & tracking.' },
];

const STEPS = [
  'Konsultasi gratis: ceritakan topik, dataset, dan deadline.',
  'Penawaran harga & timeline yang jelas, lalu DP 50%.',
  'Pengerjaan: dataset, training, evaluasi, dan update progres berkala.',
  'Serah terima source code, laporan hasil, dan sesi penjelasan.',
];

const TECH = ['Python', 'OpenCV', 'YOLO (Ultralytics)', 'TensorFlow / Keras', 'PyTorch', 'Roboflow', 'Streamlit / Flask', 'Raspberry Pi'];

const ComputerVision = () => {
  useDocumentTitle(CV_TITLE);
  const { open } = useOrderForm();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen bg-[#f7f7f2] pt-32 pb-24">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">Layanan AI</p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Joki Computer Vision</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Butuh bantuan tugas, skripsi, atau project computer vision? Jokoding mengerjakan deteksi objek YOLO,
            klasifikasi gambar, face recognition, OCR, sampai image processing dengan OpenCV, lengkap dari
            dataset hingga model siap dipakai.
          </p>
          <button
            onClick={open}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
          >
            Konsultasi Gratis
          </button>
        </header>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Layanan Computer Vision</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Alur Pengerjaan</h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">{i + 1}</span>
                  <span className="pt-1 text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Teknologi</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {TECH.map((t) => (
                <span key={t} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-700">{t}</span>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Contoh project: klasifikasi kematangan tomat berdasarkan warna dengan Python dan OpenCV.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">FAQ Joki Computer Vision</h2>
          <div className="mt-6 space-y-3">
            {CV_FAQS.map((faq, i) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-gray-900"
                >
                  <h3>{faq.q}</h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <p className={`px-5 pb-5 text-gray-600 ${openIndex === i ? '' : 'hidden'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ComputerVision;
