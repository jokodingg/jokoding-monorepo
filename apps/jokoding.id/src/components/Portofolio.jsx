import { useRef, useState } from "react";

// Import gambar portfolio
import project1 from '../assets/portfolio/project1.jpg';
import project2 from '../assets/portfolio/project2.jpg';
import project3 from '../assets/portfolio/project3.jpg';
import project4 from '../assets/portfolio/project4.jpg';
import project5 from '../assets/portfolio/project5.jpg';
import project6 from '../assets/portfolio/project6.jpg';

// 1. Spotlight Card (Kembali ke versi Dark Mode karena di dalam wrapper gelap)
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
      // STYLE DARK MODE (Biar kontras di dalam wrapper hitam)
      // bg-gray-800: Lebih terang dikit dari background wrapper
      // border-gray-700: Garis pemisah halus
      className={`relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

// 2. Main Component
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

  // Di mobile tampilkan 3, di desktop tampilkan semua
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    // BAGIAN LUAR: Background Terang (#f7f7f2) biar nyambung sama atasnya
    <section id="portfolio" className="bg-[#f7f7f2] py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WRAPPER DALAM (Hero Style): Gelap, Rounded, Shadow */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-800 relative overflow-hidden">
          
          {/* Background Blob Decoration (Mirip Hero) */}
          <div className="absolute top-0 left-0 w-125 h-125 bg-emerald-900/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Selected <span className="text-emerald-400">Works</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Proyek-proyek yang telah kami selesaikan dengan standar industri tertinggi.
              </p>
            </div>

            {/* Grid Layout - Mobile: show limited, Desktop: show all */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mobile: show displayedProjects, Desktop: show all */}
              {projects.map((item, i) => (
                <SpotlightCard 
                  key={i} 
                  className={`h-full flex flex-col group ${
                    !showAll && i >= 3 ? 'hidden md:flex' : ''
                  }`}
                >
                  
                  {/* Image Section */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-800 border-b border-gray-700">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.type}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Tech Stack Pills (Dark Mode) */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium text-gray-400 bg-gray-900 px-2 py-1 rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* CTA Button - Show "Portfolio Lainnya" only on mobile when not expanded */}
            <div className="text-center mt-16">
              {!showAll && (
                <button 
                  onClick={() => setShowAll(true)}
                  className="md:hidden px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                >
                  Portfolio Lainnya
                </button>
              )}
              {/* <button className="hidden md:inline-block px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300">
                Lihat Project Lainnya
              </button> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;