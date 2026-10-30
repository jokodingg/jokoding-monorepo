import { useState, useEffect } from 'react';

// Default = isi navbar halaman utama. Halaman lain (mis. /website-portfolio) kirim props sendiri.
const DEFAULT_LINKS = ['home', 'services', 'portfolio', 'testimonials'].map((id) => ({ id, label: id }));

const DEFAULT_WA_HREF = `https://wa.me/62881080715967?text=${encodeURIComponent(`Halo kak, saya mau order/konsultasi joki koding.

                    Jenis Project:
                    Penjelasan Project:

                    Mohon informasinya, terima kasih!`)}`;

const Navbar = ({
  links = DEFAULT_LINKS,
  waHref = DEFAULT_WA_HREF,
  ctaLabel = 'Order Now',
  mobileCtaLabel = 'Chat WhatsApp',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection untuk ganti background navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu mobile bisa ditutup dengan Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Smooth scroll dengan offset biar ga ketutup navbar. Id tidak ada (mis. 'home' di halaman lain) -> ke paling atas
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const y = element ? element.getBoundingClientRect().top + window.scrollY - 80 : 0;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Link dengan href pindah halaman (mis. dari /website-portfolio/design ke /website-portfolio#paket)
  const go = (item) => (item.href ? window.location.assign(item.href) : scrollTo(item.id));

  // Logic tombol WA
  const handleWhatsApp = () => {
    window.open(waHref, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md border-gray-800 shadow-lg py-3' // PAS SCROLL: Mode Gelap
          : 'bg-transparent border-transparent py-6' // PAS DI ATAS: Transparan
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
          <img
            src="/logo-jokoding-only.png"
            alt="Logo"
            className={`h-10 w-auto transition-all duration-300 ${
              // Kalau di atas (scrolled=false) & bukan di menu mobile -> Logo Hitam (jika logo aslimu hitam)
              // Kalau logo aslimu putih/transparan, biarkan default atau pake filter invert
              !scrolled && !menuOpen ? '' : 'brightness-0 invert'
            }`}
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item)}
                className={`capitalize font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? 'text-gray-300 hover:text-emerald-400' // Text Putih (Pas Scroll)
                    : 'text-gray-800 hover:text-emerald-600' // Text Hitam (Pas Di Atas)
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleWhatsApp}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {ctaLabel}
            </button>
          </li>
        </ul>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {/* Garis Hamburger: Putih kalau scrolled/menu open, Hitam kalau di atas */}
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${
            scrolled || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>

          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${
            scrolled || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? 'opacity-0' : ''}`}></span>

          <span className={`block w-6 h-0.5 transition-transform duration-300 ${
            scrolled || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* MOBILE MENU OVERLAY (Tetap Gelap Full Screen) */}
        <div className={`fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item)}
              className="text-2xl font-bold text-gray-200 capitalize hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleWhatsApp}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-500 mt-4"
          >
            {mobileCtaLabel}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
