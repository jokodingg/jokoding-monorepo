import { describe, expect, it } from 'vitest';
import { buildOrderMessage } from './buildOrderMessage';

describe('buildOrderMessage', () => {
  it('menyusun semua isian form menjadi pesan WhatsApp', () => {
    const message = buildOrderMessage({
      nama: 'Rian',
      jenis: 'Web Development',
      deadline: '3–7 hari',
      budget: '500rb–1jt',
      detail: 'Website CRUD perpustakaan pakai Laravel',
    });

    expect(message).toBe(
      [
        'Halo kak, saya mau order joki koding.',
        '',
        'Nama: Rian',
        'Jenis Project: Web Development',
        'Deadline: 3–7 hari',
        'Budget: 500rb–1jt',
        'Detail: Website CRUD perpustakaan pakai Laravel',
        '',
        'Mohon informasinya, terima kasih!',
      ].join('\n'),
    );
  });

  it('menulis "-" untuk isian opsional yang kosong', () => {
    const message = buildOrderMessage({ nama: 'Rian', jenis: 'IoT' });

    expect(message).toContain('Deadline: -\nBudget: -\nDetail: -');
  });

  it('membuang spasi di awal dan akhir isian teks', () => {
    const message = buildOrderMessage({ nama: '  Rian  ', jenis: 'IoT', detail: '   ' });

    expect(message).toContain('Nama: Rian\n');
    expect(message).toContain('Detail: -');
  });
});
