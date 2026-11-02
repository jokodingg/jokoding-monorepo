import { useState } from 'react';
import { Play } from 'lucide-react';

const FRAME_CLASS = {
  vertical: 'aspect-[9/16] w-full max-w-[360px] mx-auto',
  horizontal: 'aspect-video w-full',
};

// Facade: thumbnail dulu, iframe YouTube baru dimuat saat diklik supaya halaman tetap ringan.
const YouTubeEmbed = ({ id, title, orientation, cover }) => {
  const [playing, setPlaying] = useState(false);
  const frame = `${FRAME_CLASS[orientation]} relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl`;

  if (!id) {
    return (
      <div className={`${frame} flex items-center justify-center text-sm text-gray-400`}>
        Video belum tersedia
      </div>
    );
  }

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
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

export default YouTubeEmbed;
