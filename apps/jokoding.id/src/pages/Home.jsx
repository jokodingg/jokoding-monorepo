import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Portfolio from '../components/Portofolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { HOME_TITLE } from '../blog/seo';
import { scrollToSection } from '../lib/scrollToSection';
import { useDocumentTitle } from '../lib/useDocumentTitle';

const Home = () => {
  const { hash } = useLocation();
  useDocumentTitle(HOME_TITLE);

  // Datang dari halaman lain lewat /#services dan sejenisnya: scroll ke section itu.
  // Sesaat setelah mount, layout di atas section masih bertambah (marquee TechStack, gambar),
  // jadi scroll diulang tiap ukuran body berubah: selama 1,5 detik atau sampai user scroll sendiri.
  useEffect(() => {
    const id = hash.slice(1);
    if (!id || !document.getElementById(id)) return;

    const observer = new ResizeObserver(() => scrollToSection(id));
    observer.observe(document.body);
    const userEvents = ['wheel', 'touchstart', 'keydown'];
    const stop = () => {
      observer.disconnect();
      userEvents.forEach((type) => window.removeEventListener(type, stop));
    };
    userEvents.forEach((type) => window.addEventListener(type, stop, { passive: true }));
    const timer = setTimeout(stop, 1500);
    return () => {
      clearTimeout(timer);
      stop();
    };
    // Hanya saat mount; klik menu di home sudah scroll sendiri.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
