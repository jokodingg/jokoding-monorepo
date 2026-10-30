import React, { useRef, useState } from 'react';
import { Layout, Smartphone, Cpu, Server, Code, Wifi } from 'lucide-react';

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
      className={`relative overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-100 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(251, 191, 36, 0.15), transparent 40%)`,
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
    <section id="services" className="relative bg-amber-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Soft Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Teknis</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Jokoding menyediakan solusi <span className="font-bold text-amber-600">end-to-end</span> untuk kebutuhan Anda. Mulai dari perancangan hardware hingga deployment software.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, i) => (
            <SpotlightCard key={i} className="h-full group hover:-translate-y-1 transition-transform duration-300">
              <div className="p-8 flex flex-col h-full">
                
                {/* Icon Wrapper */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 border border-amber-200 text-amber-600 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed grow">
                  {item.desc}
                </p>

                <div className="w-12 h-1 bg-amber-200 mt-6 rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 transition-colors"></div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
