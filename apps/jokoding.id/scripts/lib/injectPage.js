const HEAD_BLOCK = /<!-- head:start -->[\s\S]*?<!-- head:end -->/;
const ROOT = '<div id="root"></div>';

// Mengganti blok meta di template dan mengisi #root dengan markup hasil prerender.
export const injectPage = (template, { head, html }) => {
  if (!HEAD_BLOCK.test(template)) throw new Error('injectPage: penanda head tidak ditemukan');
  if (!template.includes(ROOT)) throw new Error(`injectPage: ${ROOT} tidak ditemukan`);

  // Replacer berupa fungsi supaya karakter $ di konten tidak dibaca sebagai pola.
  return template.replace(HEAD_BLOCK, () => head).replace(ROOT, () => `<div id="root">${html}</div>`);
};
