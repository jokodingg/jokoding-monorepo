const TIKTOK = /^https?:\/\/(?:www\.)?tiktok\.com\/@[^/]+\/video\/(\d+)/;
const INSTAGRAM = /^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/;

// Link video dari frontmatter jadi { platform, id, embedUrl }. Link yang tidak dikenal: null.
// Link pendek vm.tiktok.com tidak didukung karena butuh request untuk tahu ID videonya.
export const parseVideoUrl = (url) => {
  const tiktok = TIKTOK.exec(url);
  if (tiktok) {
    return { platform: 'tiktok', id: tiktok[1], embedUrl: `https://www.tiktok.com/player/v1/${tiktok[1]}` };
  }

  const instagram = INSTAGRAM.exec(url);
  if (instagram) {
    return {
      platform: 'instagram',
      id: instagram[1],
      embedUrl: `https://www.instagram.com/reel/${instagram[1]}/embed/`,
    };
  }

  return null;
};
