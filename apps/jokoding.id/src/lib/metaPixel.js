// Meta Pixel: mengirim PageView dan Lead ke Meta Ads.
// Tanpa VITE_META_PIXEL_ID (misalnya saat dev lokal), Pixel tidak dimuat dan semua fungsi tidak melakukan apa-apa.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) window.fbq(...args);
};

export const initMetaPixel = (pixelId = PIXEL_ID) => {
  if (!pixelId || typeof window === 'undefined' || window.fbq) return;
  // Snippet resmi dari Meta: membuat antrean fbq lalu memuat fbevents.js secara async.
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', pixelId);
};

// Website ini SPA: pindah halaman tidak memuat ulang script, jadi PageView dikirim per perubahan path.
// Path yang sama tidak dikirim dua kali (StrictMode menjalankan effect dua kali saat dev).
let lastPath = null;
export const trackPageView = (path) => {
  if (typeof window === 'undefined' || !window.fbq || path === lastPath) return;
  lastPath = path;
  fbq('track', 'PageView');
};

// Lead = calon klien membuka chat WhatsApp. `source` menunjukkan tombol asalnya, terlihat di Events Manager.
export const trackLead = (source) => fbq('track', 'Lead', { content_name: source });

export const isWhatsAppLink = (href) => typeof href === 'string' && href.startsWith('https://wa.me/');
