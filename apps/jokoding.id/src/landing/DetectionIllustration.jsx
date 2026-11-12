// Ilustrasi deteksi objek: kotak + label confidence ala YOLO.
export const DetectionIllustration = () => (
  <svg viewBox="0 0 480 360" role="img" aria-label="Ilustrasi deteksi objek computer vision dengan bounding box YOLO" className="h-auto w-full rounded-2xl shadow-xl">
    <rect width="480" height="360" fill="#1f2937" />
    <rect y="250" width="480" height="110" fill="#374151" />
    <circle cx="400" cy="70" r="28" fill="#fbbf24" opacity="0.8" />
    <g fill="#9ca3af">
      <rect x="40" y="200" width="150" height="55" rx="14" />
      <circle cx="75" cy="258" r="16" fill="#111827" /><circle cx="155" cy="258" r="16" fill="#111827" />
      <rect x="65" y="178" width="90" height="30" rx="8" />
    </g>
    <g fill="#d1d5db">
      <circle cx="290" cy="140" r="18" />
      <rect x="274" y="160" width="32" height="70" rx="10" />
      <rect x="276" y="228" width="12" height="40" rx="5" /><rect x="292" y="228" width="12" height="40" rx="5" />
    </g>
    <g fill="#ef4444"><circle cx="390" cy="240" r="22" /><circle cx="425" cy="250" r="18" /></g>
    <g fill="none" strokeWidth="3">
      <rect x="30" y="165" width="172" height="112" stroke="#10b981" />
      <rect x="262" y="114" width="56" height="160" stroke="#f59e0b" />
      <rect x="362" y="212" width="90" height="62" stroke="#3b82f6" />
    </g>
    <g fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
      <rect x="30" y="143" width="88" height="22" fill="#10b981" /><text x="37" y="159">mobil 0.94</text>
      <rect x="262" y="92" width="96" height="22" fill="#f59e0b" /><text x="269" y="108">orang 0.91</text>
      <rect x="362" y="190" width="90" height="22" fill="#3b82f6" /><text x="369" y="206">tomat 0.88</text>
    </g>
  </svg>
);
