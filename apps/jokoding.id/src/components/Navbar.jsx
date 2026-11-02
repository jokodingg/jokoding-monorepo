import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrderForm } from '../order/OrderFormProvider';
import { scrollToSection } from '../lib/scrollToSection';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll detection untuk ganti background navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Di luar home selalu gelap: navbar transparan tidak terbaca di atas halaman blog
  const dark = scrolled || pathname !== '/';

  // Menu "blog" pindah halaman. Menu section: scroll kalau di home, kalau tidak pindah ke /#section
  const goTo = (item) => {
    setMenuOpen(false);
    if (item === 'blog') navigate('/blog');
    else if (pathname === '/') scrollToSection(item);
    else navigate(`/#${item}`);
  };

  // Tombol order membuka Form Order Singkat, lalu lanjut ke WhatsApp
  const { open: openOrderForm } = useOrderForm();
  const handleOrder = () => {
    setMenuOpen(false);
    openOrderForm();
  };

  const navLinks = ['home', 'services', 'portfolio', 'testimonials', 'blog'];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        dark 
          ? 'bg-gray-900/90 backdrop-blur-md border-gray-800 shadow-lg py-3' // PAS SCROLL: Mode Gelap
          : 'bg-transparent border-transparent py-6' // PAS DI ATAS: Transparan
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="shrink-0 cursor-pointer" onClick={() => goTo('home')}>
          <img 
            src="/logo-jokoding-only.png" 
            alt="Logo" 
            className={`h-10 w-auto transition-all duration-300 ${
              // Kalau di atas (scrolled=false) & bukan di menu mobile -> Logo Hitam (jika logo aslimu hitam)
              // Kalau logo aslimu putih/transparan, biarkan default atau pake filter invert
              !dark && !menuOpen ? '' : 'brightness-0 invert' 
            }`} 
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <li key={item}>
              <button 
                onClick={() => goTo(item)} 
                className={`capitalize font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer ${
                  dark 
                    ? 'text-gray-300 hover:text-emerald-400' // Text Putih (Pas Scroll)
                    : 'text-gray-800 hover:text-emerald-600' // Text Hitam (Pas Di Atas)
                }`}
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={handleOrder}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Order Now
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
            dark || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          
          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${
            dark || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? 'opacity-0' : ''}`}></span>
          
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${
            dark || menuOpen ? 'bg-white' : 'bg-gray-900'
          } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* MOBILE MENU OVERLAY (Tetap Gelap Full Screen) */}
        <div className={`fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          
          {navLinks.map((item) => (
            <button 
              key={item}
              onClick={() => goTo(item)} 
              className="text-2xl font-bold text-gray-200 capitalize hover:text-emerald-400 transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={handleOrder}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-500 mt-4"
          >
            Order Now
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;