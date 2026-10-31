// Menyusun isian Form Order Singkat menjadi teks pesan WhatsApp.
export const buildOrderMessage = ({ nama, jenis, deadline, budget, detail }) => {
  const value = (v) => v?.trim() || '-';

  return [
    'Halo kak, saya mau order joki koding.',
    '',
    `Nama: ${value(nama)}`,
    `Jenis Project: ${value(jenis)}`,
    `Deadline: ${value(deadline)}`,
    `Budget: ${value(budget)}`,
    `Detail: ${value(detail)}`,
    '',
    'Mohon informasinya, terima kasih!',
  ].join('\n');
};
