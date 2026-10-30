import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Fokus Kualitas",
      desc: "Setiap project dikerjakan dengan standar industri tertinggi"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tepat Waktu",
      desc: "Komitmen deadline yang bisa diandalkan"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Support 24/7",
      desc: "Tim support yang responsif dan siap membantu"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Garansi Revisi",
      desc: "Revisi gratis hingga client puas dengan hasil"
    },
  ];

  return (
    <section id="about" className="bg-white py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Tentang Kami
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Kenalan dengan <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Jokoding</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-bold text-amber-600">Jokoding</span> adalah software house yang berbasis di Semarang, didirikan oleh mahasiswa untuk membantu sesama mahasiswa dan pelaku bisnis dalam mewujudkan solusi digital.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Kami percaya bahwa setiap ide layak untuk diwujudkan. Dengan tim yang berpengalaman di berbagai bidang teknologi — mulai dari web development, mobile apps, IoT, hingga AI — kami siap menjadi partner terpercaya untuk project Anda.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-white border border-amber-200 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">2+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Tahun</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border border-amber-200 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">50+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Project</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border border-amber-200 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">30+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Client</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
