import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { waLink } from '@jokoding/config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan project?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas. Landing page sederhana: 3-5 hari. Website company profile: 7-14 hari. Web application kompleks: 3-8 minggu. Kami akan memberikan timeline detail setelah diskusi kebutuhan.'
    },
    {
      question: 'Apakah bisa revisi setelah project selesai?',
      answer: 'Ya, setiap paket sudah termasuk revisi gratis sesuai yang tertera. Revisi mencakup perubahan desain, konten, dan fitur dalam scope awal. Penambahan fitur baru di luar scope akan dikenakan biaya tambahan.'
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer: 'Pembayaran dilakukan dengan sistem: DP 50% untuk memulai project, dan pelunasan 50% sebelum website online/deployment. Pembayaran dapat melalui transfer bank, e-wallet, atau QRIS.'
    },
    {
      question: 'Apakah source code diberikan ke client?',
      answer: 'Ya, source code penuh akan diberikan kepada client setelah pelunasan. Anda memiliki hak penuh atas website dan dapat melakukan modifikasi atau pengembangan sendiri di kemudian hari.'
    },
    {
      question: 'Apakah ada garansi kerahasiaan project?',
      answer: 'Tentu! Kami menjamin 100% kerahasiaan project Anda. Kami dapat menandatangani NDA (Non-Disclosure Agreement) jika diperlukan untuk melindungi ide dan data bisnis Anda.'
    },
    {
      question: 'Bisa konsultasi dulu sebelum order?',
      answer: 'Sangat bisa! Kami menyediakan konsultasi gratis untuk membahas kebutuhan, fitur, budget, dan timeline project Anda. Hubungi kami via WhatsApp untuk diskusi lebih lanjut.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#f7f7f2] py-24 overflow-hidden border-t border-gray-200">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Pertanyaan Umum
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-emerald-600">Questions</span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Jawaban untuk pertanyaan yang sering ditanyakan oleh client kami. Masih ada pertanyaan lain? Langsung hubungi kami via WhatsApp.
              </p>

              {/* CTA Button - Desktop */}
              <a 
                href={waLink("Halo kak, saya mau order/konsultasi joki koding.\n\nJenis Project:\nPenjelasan Project:\n\nMohon informasinya, terima kasih!")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/30"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-emerald-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-emerald-50/50"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button - Mobile */}
            <div className="mt-8 lg:hidden">
              <a 
                href={waLink("Halo Jokoding, saya mau tanya tentang jasa website")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/30 w-full justify-center"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
