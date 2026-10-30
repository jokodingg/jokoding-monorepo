import { useState, useEffect } from 'react';
import { waLink } from '@jokoding/config';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(waLink("Halo Jokoding, saya tertarik untuk konsultasi project..."), "_blank");
  };

  const navLinks = ['home', 'services', 'pricing', 'portfolio'];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-amber-200 shadow-lg shadow-amber-100/50 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
          <img 
            src="/logo-jokoding-only.png" 
            alt="Logo" 
            className="h-10 w-auto transition-all duration-300"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollTo(item)} 
                className="capitalize font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer text-gray-700 hover:text-amber-600"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={handleWhatsApp}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:from-amber-600 hover:to-amber-700"
            >
              Konsultasi
            </button>
          </li>
        </ul>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? 'bg-white' : 'bg-amber-600'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${menuOpen ? 'bg-white' : 'bg-amber-600'} ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? 'bg-white' : 'bg-amber-600'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-gradient-to-b from-amber-600 to-amber-700 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl -z-10"></div>
          
          {navLinks.map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item)} 
              className="text-2xl font-bold text-white capitalize hover:text-amber-200 transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={handleWhatsApp}
            className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-amber-50 mt-4"
          >
            Konsultasi Sekarang
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
