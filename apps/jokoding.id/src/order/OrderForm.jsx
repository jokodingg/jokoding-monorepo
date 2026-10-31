import { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';
import { waLink } from '@jokoding/config';
import { buildOrderMessage } from './buildOrderMessage';

// Sama dengan judul di section Services.
const JENIS = ['Web Development', 'Mobile Apps', 'Internet of Things', 'AI & Deep Learning', 'Backend & API', 'Network & Server', 'Lainnya'];
const DEADLINE = ['< 3 hari', '3–7 hari', '1–2 minggu', '> 2 minggu', 'Fleksibel'];
const BUDGET = ['< 200rb', '200–500rb', '500rb–1jt', '1–3jt', '> 3jt', 'Belum tahu'];

// Untuk yang memilih "Lewati, langsung chat".
const SKIP_MESSAGE = 'Halo kak, saya mau order/konsultasi joki koding.\n\nJenis Project:\nPenjelasan Project:\n\nMohon informasinya, terima kasih!';

const EMPTY = { nama: '', jenis: '', deadline: '', budget: '', detail: '' };

const OrderForm = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const [data, setData] = useState(EMPTY);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    // Halaman di belakang pop-up tidak ikut tergulir.
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const set = (field) => (e) => setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(waLink(buildOrderMessage(data)), '_blank');
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // Klik di area gelap di luar kartu menutup pop-up.
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="order-form-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg max-h-[90dvh] rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-gray-950/70 backdrop:backdrop-blur-sm"
    >
      <form onSubmit={handleSubmit} className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 id="order-form-title" className="text-2xl font-bold text-gray-900">Form Order Singkat</h2>
            <p className="text-sm text-gray-500 mt-1">Isi sebentar, lalu lanjut chat WhatsApp dengan pesan yang sudah rapi.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup form"
            className="shrink-0 p-2 -m-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="block text-sm font-semibold text-gray-900 mb-2">Nama <span className="text-emerald-600">*</span></span>
            <input
              type="text"
              required
              autoComplete="given-name"
              value={data.nama}
              onChange={set('nama')}
              placeholder="Nama panggilanmu"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </label>

          <ChipGroup label="Jenis Project" name="jenis" options={JENIS} value={data.jenis} onChange={set('jenis')} required />
          <ChipGroup label="Deadline" name="deadline" options={DEADLINE} value={data.deadline} onChange={set('deadline')} />
          <ChipGroup label="Budget" name="budget" options={BUDGET} value={data.budget} onChange={set('budget')} />

          <label className="block">
            <span className="block text-sm font-semibold text-gray-900 mb-2">Detail singkat</span>
            <textarea
              rows={3}
              value={data.detail}
              onChange={set('detail')}
              placeholder="Contoh: website CRUD perpustakaan pakai Laravel"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(5,150,105,0.3)] cursor-pointer"
        >
          <Send size={18} /> Kirim ke WhatsApp
        </button>

        <a
          href={waLink(SKIP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-4 block text-center text-sm text-gray-500 underline underline-offset-4 hover:text-emerald-600"
        >
          Lewati, langsung chat
        </a>
      </form>
    </dialog>
  );
};

// Pilihan berbentuk pil. Di baliknya tetap radio button, jadi bisa dipakai dengan keyboard.
const ChipGroup = ({ label, name, options, value, onChange, required = false }) => (
  <fieldset>
    <legend className="text-sm font-semibold text-gray-900 mb-2">
      {label} {required && <span className="text-emerald-600">*</span>}
    </legend>
    <div className="flex flex-wrap gap-2">
      {options.map((option, i) => (
        <label key={option} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            required={required && i === 0}
            className="peer sr-only"
          />
          <span className="block px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 transition-colors hover:border-emerald-500 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-500 peer-focus-visible:ring-offset-2">
            {option}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default OrderForm;
