import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initMetaPixel, isWhatsAppLink, trackLead, trackPageView } from './metaPixel';

// Dipasang sekali di App: memuat Pixel, mengirim PageView tiap pindah halaman,
// dan mengirim Lead untuk setiap klik link wa.me (FAQ, footer, "Lewati, langsung chat", isi blog).
// Tombol "Kirim ke WhatsApp" di OrderForm memakai window.open, jadi Lead-nya dikirim di sana.
const MetaPixelTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    initMetaPixel();
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]');
      if (!link || !isWhatsAppLink(link.href)) return;
      // Sumber = id section terdekat (faq, contact, order-form), selain itu nama umum.
      trackLead(link.closest('[id]:not(#root)')?.id || 'wa_link');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
};

export default MetaPixelTracker;
