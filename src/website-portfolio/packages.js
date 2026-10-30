// Isi paket disepakati dengan owner, 2026-10-10. Ubah di sini, tabel desktop dan daftar mobile ikut berubah.
export const WA_PHONE = '62881080715967';

export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Rp149.000',
    design: 'Template dari Jokoding',
    designLink: { label: 'Lihat template', href: '/website-portfolio/design' },
  },
  // Ditonjolkan atas pilihan owner: paket termurah yang sudah dapat copywriting dan optimasi LinkedIn.
  { id: 'pro', name: 'Pro', price: 'Rp299.000', design: 'Mengikuti desain PDF portfoliomu', recommended: true },
  { id: 'premium', name: 'Premium', price: 'Rp499.000', design: 'Dirancang dari nol' },
];

// values: [basic, pro, premium]. true = termasuk, false = tidak termasuk, string = isi.
export const FEATURES = [
  { label: 'Jumlah project ditampilkan', values: ['4', '8', '12'] },
  { label: 'Revisi minor (ganti isi teks)', values: ['3x', '5x', '6x'] },
  { label: 'Revisi mayor (ganti warna)', values: ['2x', '4x', '6x'] },
  { label: 'Domain .my.id 1 tahun', values: [true, true, true] },
  { label: 'Akses CV builder', values: [true, true, true], soon: true },
  { label: 'Tombol unduh CV di website', values: [true, true, true] },
  { label: 'Didaftarkan ke Google Search Console', values: [true, true, true] },
  { label: 'Preview link saat dibagikan di WhatsApp dan LinkedIn', values: [true, true, true] },
  { label: 'Penulisan "Tentang Saya" dan deskripsi project', values: [false, true, true] },
  { label: 'Optimasi LinkedIn (headline dan About)', values: [false, true, true] },
  { label: 'Update konten gratis', values: ['1 bulan', '3 bulan', '3 bulan'] },
];

export const ADD_ONS = [
  { label: 'Tambah project', price: 'Rp10.000 per project' },
  { label: 'Domain .com 1 tahun', price: 'Rp200.000' },
];

export const waLink = ({ paket = '', domain = '', template = '' } = {}) => {
  const text = [
    'Halo kak, saya mau order website portfolio.',
    '',
    `Paket: ${paket}`,
    ...(template ? [`Template: ${template}`] : []),
    `Alamat website yang diinginkan: ${domain}`,
    '',
    'Mohon dikirim form ordernya, terima kasih!',
  ].join('\n');
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
};
