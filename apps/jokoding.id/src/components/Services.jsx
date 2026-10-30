import React, { useRef, useState } from 'react';
import { Layout, Smartphone, Cpu, Server, Code, Database, ShieldCheck, Wifi } from 'lucide-react';

// --- Spotlight Card (Versi Light Mode) ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      // STYLE CARD LIGHT MODE:
      // bg-white: Kartu putih
      // border-gray-200: Garis halus
      // shadow-sm: Bayangan tipis
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* Efek Spotlight (Hijau Emerald Tipis) */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    { 
      icon: <Layout className="w-8 h-8" />, 
      title: 'Web Development', 
      desc: 'Pembuatan Website Company Profile, CRUD, hingga website kompleks dengan berbagai tech stack' 
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: 'Mobile Apps', 
      desc: 'Pengembangan aplikasi Android & iOS native atau hybrid menggunakan Flutter/React Native.' 
    },
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: 'Internet of Things', 
      desc: 'Integrasi hardware ESP32, Arduino, sensor monitoring, dan kontrol aktuator jarak jauh via MQTT.' 
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: 'AI & Deep Learning', 
      desc: 'Implementasi Computer Vision (CV), pembuatan chatbot (LLM), dan program prediksi dengan ML.' 
    },
    { 
      icon: <Server className="w-8 h-8" />, 
      title: 'Backend & API', 
      desc: 'Perancangan RESTful API yang aman dan scalable menggunakan Node.js, Go, atau Python FastAPI.' 
    },
    { 
      icon: <Wifi className="w-8 h-8" />, 
      title: 'Network & Server', 
      desc: 'Konfigurasi VPS (Ubuntu), setup Docker container, dan juga routing GNS & Cisco Packet Tracer.' 
    },
  ];

  return (
    // Background Terang (#f7f7f2)
    <section id="services" className="relative bg-[#f7f7f2] py-24 overflow-hidden border-t border-gray-200">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size[24px_24px] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Teks Judul Hitam */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan <span className="text-emerald-600">Teknis</span>
          </h2>
          {/* Teks Deskripsi Abu Gelap */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Jokoding menyediakan solusi <span className="font-bold">end-to-end</span> untuk kebutuhan Anda. Mulai dari perancangan hardware hingga deployment software.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, i) => (
            <SpotlightCard key={i} className="h-full group hover:-translate-y-1 transition-transform duration-300">
              <div className="p-8 flex flex-col h-full">
                
                {/* Icon Wrapper Light Mode */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Judul Kartu Hitam */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                
                {/* Deskripsi Kartu Abu */}
                <p className="text-gray-600 text-sm leading-relaxed grow">
                  {item.desc}
                </p>

                {/* Garis hiasan kecil di bawah */}
                <div className="w-12 h-1 bg-gray-200 mt-6 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;