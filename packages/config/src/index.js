// Data kontak bersama untuk semua app. Ganti di sini, semua situs ikut berubah.
export const WA_PHONE = '62881080715967';
export const EMAIL = 'jokoding@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/jokodingg/';

// Link wa.me, dengan pesan awal opsional.
export const waLink = (text) =>
  text ? `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}` : `https://wa.me/${WA_PHONE}`;
