import { useEffect } from 'react';

// Judul tab saat navigasi di client. Meta lain sudah ada di HTML hasil prerender.
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
