import { describe, expect, it } from 'vitest';
import { injectPage } from './injectPage';

const template =
  '<head><!-- head:start --><title>Home</title><!-- head:end --></head><body><div id="root"></div></body>';

describe('injectPage', () => {
  it('mengganti blok head dan mengisi root', () => {
    expect(injectPage(template, { head: '<title>X</title>', html: '<p>hi</p>' })).toBe(
      '<head><title>X</title></head><body><div id="root"><p>hi</p></div></body>',
    );
  });

  it('karakter $ di konten tidak dianggap pola replace', () => {
    expect(injectPage(template, { head: '<title>$&</title>', html: '<p>$1</p>' })).toBe(
      '<head><title>$&</title></head><body><div id="root"><p>$1</p></div></body>',
    );
  });

  it('gagal kalau penanda head tidak ada', () => {
    expect(() => injectPage('<div id="root"></div>', { head: '', html: '' })).toThrow(
      'injectPage: penanda head tidak ditemukan',
    );
  });

  it('gagal kalau root tidak ada', () => {
    expect(() => injectPage('<!-- head:start --><!-- head:end -->', { head: '', html: '' })).toThrow(
      'injectPage: <div id="root"></div> tidak ditemukan',
    );
  });
});
