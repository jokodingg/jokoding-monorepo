import React from 'react';
import { Instagram, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { waLink, EMAIL, INSTAGRAM_URL } from '@jokoding/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ctaLink = waLink("Halo kak 👋\nSaya mau order joki koding.\n\nJenis Project:\nPenjelasan Project:\n\nMohon informasinya, terima kasih 🙏");

  return (
    <footer id="contact" className="bg-white pt-20 pb-10 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl shadow-amber-200">
          
          {/* Efek Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/30 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/30 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Siap Wujudkan <span className="text-amber-100">Project Impianmu?</span>
            </h2>
            <p className="text-amber-100 text-lg">
              Konsultasikan ide kreatifmu sekarang. Gratis, tanpa komitmen.
            </p>
          </div>
          
          <div className="relative z-10">
            <a 
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 cursor-pointer"
            >
              Hubungi Kami <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>


        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COL 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="/logo-jokoding-only.png" 
                 alt="Logo Jokoding" 
                 className="h-10 w-auto" 
               />
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Software House berbasis di Semarang. Dari mahasiswa untuk mahasiswa.
            </p>
            
            <div className="flex gap-3 pt-2">
              <SocialLink href={INSTAGRAM_URL} icon={<Instagram size={18} />} />
              <SocialLink href={waLink()} icon={<MessageCircle size={18} />} />
              <SocialLink href={`mailto:${EMAIL}`} icon={<Mail size={18} />} />
            </div>
          </div>

          {/* COL 2-4: Links */}
          <FooterLinks 
            title="Layanan" 
            items={[
              { label: 'Web Development', href: '#services' },
              { label: 'IoT & Embedded', href: '#services' },
              { label: 'AI & Machine Learning', href: '#services' },
              { label: 'Mobile Apps', href: '#services' },
            ]} 
          />

          <FooterLinks 
            title="Perusahaan" 
            items={[
              { label: 'Tentang Kami', href: '#' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Karir', href: '#' }, 
              { label: 'Blog', href: '#' },
            ]} 
          />

          <FooterLinks 
            title="Dukungan" 
            items={[
              { label: 'FAQ', href: '#' },
              { label: 'Syarat & Ketentuan', href: '#' },
              { label: 'Kebijakan Privasi', href: '#' },
              { label: 'Kontak Support', href: '#' },
            ]} 
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Jokoding. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

const FooterLinks = ({ title, items }) => (
  <div>
    <h4 className="text-gray-900 font-bold text-lg mb-6">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx}>
          <a 
            href={item.href} 
            className="text-gray-600 hover:text-amber-600 transition-colors duration-300 flex items-center gap-1 group w-fit text-sm"
          >
            <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 flex items-center opacity-0 group-hover:opacity-100">
              <ArrowRight size={14} className="mr-1 text-amber-600" />
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;
