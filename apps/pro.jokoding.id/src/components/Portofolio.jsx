import { useRef, useState } from "react";

import project1 from '../assets/portfolio/project1.jpg';
import project2 from '../assets/portfolio/project2.jpg';
import project3 from '../assets/portfolio/project3.jpg';
import project4 from '../assets/portfolio/project4.jpg';
import project5 from '../assets/portfolio/project5.jpg';
import project6 from '../assets/portfolio/project6.jpg';

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
      className={`relative overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm ${className}`}
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

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      image: project1,
      title: "Tomato Ripeness Classifier",
      type: "AI Computer Vision",
      desc: "Mengklasifikasikan kematangan tomat berdasarkan warna.",
      tech: ["Python", "OpenCV", "Matplotlib"]
    },
    {
      image: project2,
      title: "Website Jual Beli Gas LPG",
      type: "E-Commerce",
      desc: "Website CRUD penjualan gas LPG yang terintegrasi dengan payment gateway.",
      tech: ["PHP Native", "MySQL", "Midtrans"]
    },
    {
      image: project3,
      title: "Website Jual Beli Kebaya",
      type: "E-Commerce",
      desc: "Website jual beli kebaya dilengkapi dengan dashboard analitik data.",
      tech: ["Laravel", "Vue.js", "MySQL"]
    },
    {
      image: project4,
      title: "IoT Monitoring Banjir",
      type: "Internet of Things",
      desc: "Alat IoT untuk memonitoring ketinggian banjir dengan sensor jarak.",
      tech: ["Arduino", "PlatformIO", "Tinkercad"]
    },
    {
      image: project5, 
      title: "Career AI",
      type: "AI LLM",
      desc: "Chatbot untuk membantu konsultasi tentang karier dan prospek kerja. ",
      tech: ["Python", "LangChain", "RAG"]
    },
    {
      image: project6,
      title: "Dipscript AI",
      type: "n8n Automation",
      desc: "Bot Telegram yang berfungsi untuk mengkoreksi dan memperbaiki skripsi.",
      tech: ["n8n", "Telegram Bot", "Python"]
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wrapper dengan border gold elegan */}
        <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl p-8 md:p-16 shadow-xl shadow-amber-100/50 border border-amber-200 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-125 h-125 bg-amber-100/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Selected <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Proyek-proyek yang telah kami selesaikan dengan standar industri tertinggi.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((item, i) => (
                <SpotlightCard 
                  key={i} 
                  className={`h-full flex flex-col group hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 ${
                    !showAll && i >= 3 ? 'hidden md:flex' : ''
                  }`}
                >
                  
                  {/* Image Section */}
                  <div className="relative w-full aspect-video overflow-hidden bg-amber-50 border-b border-amber-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.type}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded border border-amber-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              {!showAll && (
                <button 
                  onClick={() => setShowAll(true)}
                  className="md:hidden px-8 py-3 rounded-full border-2 border-amber-400 text-amber-700 font-semibold hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  Portfolio Lainnya
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
