import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const FRAME = 'relative w-full max-w-[360px] mx-auto overflow-hidden rounded-2xl bg-gray-900 shadow-xl';

// TikTok: facade (cover + tombol play), player resmi baru dimuat saat diklik dan langsung autoplay.
const TikTokEmbed = ({ video, title, cover }) => {
  const [playing, setPlaying] = useState(false);
  const frame = `${FRAME} aspect-[9/16]`;

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${video.embedUrl}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Putar video: ${title}`}
      className={`${frame} group block cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50`}
    >
      {cover && <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <span className="absolute inset-0 bg-gray-900/30 transition-colors group-hover:bg-gray-900/10" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-transform group-hover:scale-110">
        <Play size={28} fill="currentColor" className="ml-1" />
      </span>
    </button>
  );
};

// Instagram tidak mendukung autoplay, jadi iframe dimuat langsung (lazy) supaya cukup satu klik.
// Tinggi iframe mengikuti pesan MEASURE yang dikirim halaman embed Instagram.
const InstagramEmbed = ({ video, title }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(640);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== 'https://www.instagram.com' || event.source !== ref.current?.contentWindow) return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data?.type === 'MEASURE' && data.details?.height > 0) setHeight(data.details.height);
      } catch {
        // Pesan lain dari Instagram yang bukan JSON: abaikan.
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <iframe
        ref={ref}
        className="block w-full"
        style={{ height }}
        src={video.embedUrl}
        title={title}
        loading="lazy"
        allow="encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const VideoEmbed = ({ video, title, cover }) => {
  // Post tanpa video: artikel saja.
  if (!video) return null;

  return video.platform === 'instagram' ? (
    <InstagramEmbed video={video} title={title} />
  ) : (
    <TikTokEmbed video={video} title={title} cover={cover} />
  );
};

export default VideoEmbed;
