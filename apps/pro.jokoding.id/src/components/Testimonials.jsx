import { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonialsData = [
    { 
      text: 'Awalnya ragu karena deadline tinggal beberapa jam lagi, ternyata tim Jokoding gercep banget. Baru order langsung digarap, udah gitu 1 jam kelar lagi. Jadi bisa ngumpulin sesuai deadline', 
      name: 'Rian S*****a', 
      role: 'Mahasiswa Teknik Informatika', 
      initials: 'RS' 
    },
    { 
      text: 'Request fitur IoT custom pake ESP32 + Web Dashboard. Sempet bingung nyari tempat joki lain pada gak sanggup, di sini malah dikasih solusi yang lebih efisien. Recommended parah!', 
      name: 'Dimas A****s', 
      role: 'Mahasiswa Elektro', 
      initials: 'DA' 
    },
    { 
      text: 'Pesen website Company Profile ke tempat joki ternyata bisa dan hasilnya mantep. Load speed cepet, SEO juga naik. Tim supportnya sabar banget ngadepin revisi dari saya wkwkw. Thanks Jokoding!', 
      name: 'Angga W****a', 
      role: 'Pengusaha UMKM', 
      initials: 'AW' 
    },
    { 
      text: 'Buat skripsi simulasi jaringan pake Cisco Packet Tracer + Laporan. Hasilnya detail banget, topologinya rapi. Jarang banget nemu tempat joki yg bisa handle task ini', 
      name: 'Anton S*****o', 
      role: 'Mahasiswa Sistem Komputer', 
      initials: 'AS' 
    },
    { 
      text: 'jasa joki paling amanah yang pernah gw temuin. privasi aman, harga masuk akal buat kantong mahasiswa, kualitasnya "daging" semua bukan copas GPT doang.', 
      name: 'Putri A****a', 
      role: 'Mahasiswa Ilmu Komputer', 
      initials: 'PA' 
    },
    { 
      text: 'Order website CRUD di sini dan hasilnya gacor banget. Udah gitu dikasih diskon tambahan buat saya pelajar SMK. Pokoknya mantep deh', 
      name: 'Dafa A*****n', 
      role: 'Pelajar SMK', 
      initials: 'DA' 
    },
  ];

  // Auto slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="bg-amber-50 py-16 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Kata Mereka <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Tentang Kami</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Testimoni langsung dari client yang pernah order ke Jokoding. No tipu-tipu ya!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((t, i) => (
                <div 
                  key={i} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-amber-200 shadow-xl shadow-amber-100/50">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-100" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-amber-100 pt-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-200 shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold flex items-center gap-2">
                          {t.name}
                          <CheckCircle className="w-4 h-4 text-emerald-500" /> 
                        </h4>
                        <span className="text-sm text-gray-500 font-medium">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
