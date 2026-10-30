import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan project?",
      answer: "Waktu pengerjaan tergantung kompleksitas project. Website sederhana 1-3 hari, website kompleks 1-2 minggu, aplikasi mobile 2-4 minggu. Kami juga menyediakan layanan express untuk deadline mendesak."
    },
    {
      question: "Apakah bisa revisi setelah project selesai?",
      answer: "Tentu! Kami memberikan garansi revisi gratis selama 7 hari setelah project selesai. Revisi meliputi perbaikan bug dan penyesuaian minor sesuai kesepakatan awal."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dilakukan dengan sistem DP 50% di awal dan pelunasan 50% setelah project selesai. Kami menerima transfer bank, e-wallet (GoPay, OVO, Dana), dan QRIS."
    },
    {
      question: "Apakah source code diberikan ke client?",
      answer: "Ya, setelah pelunasan selesai, seluruh source code akan diberikan kepada client beserta dokumentasi teknis dan panduan deployment jika diperlukan."
    },
    {
      question: "Apakah ada garansi kerahasiaan project?",
      answer: "Absolut! Kami menjamin 100% kerahasiaan project Anda. Data dan informasi project tidak akan dibagikan ke pihak manapun tanpa izin client."
    },
    {
      question: "Bisa konsultasi dulu sebelum order?",
      answer: "Sangat bisa! Konsultasi gratis via WhatsApp untuk diskusi kebutuhan, estimasi harga, dan timeline pengerjaan. Tidak ada komitmen apapun."
    },
  ];

  return (
    <section id="faq" className="bg-amber-50 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Header */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Pertanyaan Umum
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jawaban untuk pertanyaan yang sering ditanyakan oleh client kami. Masih ada pertanyaan lain? Langsung hubungi kami via WhatsApp.
            </p>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-amber-400 bg-amber-50/50 shadow-lg shadow-amber-100' 
                    : 'border-amber-200 bg-white hover:border-amber-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-semibold pr-4 ${openIndex === index ? 'text-amber-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-amber-600' : 'text-gray-400'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
