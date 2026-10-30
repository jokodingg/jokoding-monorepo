import { ArrowRight, CheckCircle, Code, Smartphone, Cpu } from 'lucide-react';

const Hero = () => {
  
  const handleWhatsApp = () => {
    const phoneNumber = "62881080715967"; 
    const message = `Halo Jokoding,

Saya tertarik untuk konsultasi pembuatan website:

Jenis Website:
Detail Kebutuhan:
Budget:

Mohon informasi lebih lanjut. Terima kasih.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const services = [
    { icon: Code, text: "Website Company Profile" },
    { icon: Smartphone, text: "Landing Page" },
    { icon: Cpu, text: "Web Application" },
  ];

  return (
    <section id="home" className="min-h-screen relative bg-amber-50 overflow-hidden flex items-center">
      
      {/* Background Elements - Soft Gold Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-amber-200/40 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-1/5 right-1/4 w-80 h-80 bg-amber-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100/50 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Jasa Pembuatan Website Profesional
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Wujudkan Website
            <span className="block mt-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent">
              Impian Bisnis Anda
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Kami membantu UMKM, startup, dan profesional memiliki website modern yang 
            meningkatkan kredibilitas dan konversi bisnis. Desain menarik, loading cepat, SEO friendly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleWhatsApp}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-600/40"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => handleScroll('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-300 hover:border-amber-400 text-gray-800 font-semibold rounded-xl transition-all duration-300 hover:bg-amber-50"
            >
              Lihat Portfolio
            </button>
          </div>

          {/* Services Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service, i) => (
              <div 
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-amber-200 text-gray-700 text-sm shadow-sm"
              >
                <service.icon className="w-4 h-4 text-amber-600" />
                {service.text}
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto pt-10 border-t border-amber-200">
            <TrustItem number="50+" label="Project Delivered" />
            <TrustItem number="30+" label="Happy Clients" />
            <TrustItem number="99%" label="Success Rate" />
            <TrustItem number="24/7" label="Support" />
          </div>

          {/* Client Proof */}
            <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              Dipercaya oleh startup, UMKM, dan enterprise
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TrustItem = ({ number, label }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-1">{number}</div>
    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

export default Hero;
