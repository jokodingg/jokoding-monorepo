import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

const DEFAULT_WA_HREF = "https://wa.me/62881080715967?text=Halo%20kak%2C%20saya%20mau%20order%2Fkonsultasi%20joki%20koding.%0A%0AJenis%20Project%3A%0APenjelasan%20Project%3A%0A%0AMohon%20informasinya%2C%20terima%20kasih%21";

// Default = isi footer halaman utama. Halaman lain (mis. /website-portfolio) kirim props sendiri.
const DEFAULT_CTA = {
  title: 'Siap Wujudkan',
  highlight: 'Project Impianmu?',
  subtitle: 'Konsultasikan ide kreatifmu sekarang. Gratis, tanpa komitmen.',
  buttonLabel: 'Hubungi Kami',
  href: DEFAULT_WA_HREF,
};

const DEFAULT_COLUMNS = [
  {
    title: 'Layanan',
    items: [
      { label: 'Web Development', href: '#services' },
      { label: 'IoT & Embedded', href: '#services' },
      { label: 'AI & Machine Learning', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
    ],
  },
  {
    title: 'Perusahaan',
    items: [
      { label: 'Tentang Kami', href: '#' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Karir', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Dukungan',
    items: [
      { label: 'FAQ', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Kontak Support', href: '#' },
    ],
  },
];

const Footer = ({ cta = DEFAULT_CTA, columns = DEFAULT_COLUMNS }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#f7f7f2] pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        <div className="bg-linear-to-r from-gray-900 to-emerald-950 border border-gray-800 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl">

          {/* Efek Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/30 transition-all duration-500"></div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              {cta.title} <span className="text-emerald-400">{cta.highlight}</span>
            </h2>
            <p className="text-gray-300 text-lg">
              {cta.subtitle}
            </p>
          </div>

          <div className="relative z-10">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-gray-900 transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 cursor-pointer"
            >
              {cta.buttonLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>


        {/* === SECTION 2: MAIN FOOTER LINKS (JADI TERANG) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COL 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img
                 src="/logo-jokoding-only.png"
                 alt="Logo Jokoding"
                 className="h-10 w-auto opacity-90"
               />
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Software House berbasis di Semarang. Dari mahasiswa untuk mahasiswa.
            </p>

            <div className="flex gap-3 pt-2">
              <SocialLink href="https://www.instagram.com/jokodingg/" label="Instagram Jokoding" icon={<Instagram size={18} />} />
              {/* <SocialLink href="https://www.linkedin.com/in/irfanqs/" icon={<Linkedin size={18} />} /> */}
              <SocialLink href="https://wa.me/62881080715967" label="WhatsApp Jokoding" icon={<MessageCircle size={18} />} />
              <SocialLink href="mailto:jokoding@gmail.com" label="Email Jokoding" icon={<Mail size={18} />} />
            </div>
          </div>

          {/* COL 2-4: Links */}
          {columns.map((col) => (
            <FooterLinks key={col.title} title={col.title} items={col.items} />
          ))}
        </div>

        {/* === SECTION 3: COPYRIGHT (TERANG) === */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Jokoding. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

// --- Sub-Components (Light Mode) ---

const FooterLinks = ({ title, items }) => (
  <div>
    {/* Judul Hitam */}
    <h4 className="text-gray-900 font-bold text-lg mb-6">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.href}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            // Link Abu -> Hover Hijau
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-1 group w-fit text-sm"
          >
            <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 flex items-center opacity-0 group-hover:opacity-100">
              <ArrowRight size={14} className="mr-1 text-emerald-600" />
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    aria-label={label}
    // Tombol Putih border Abu -> Hover Hijau
    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;
