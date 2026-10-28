// Small flag images drawn as SVG so they look the same on every device
// (Windows does not display flag emoji).

function star(cx: number, cy: number, r: number, rot: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.382;
    const angle = rot + (i * Math.PI) / 5;
    pts.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(' ');
}

function ChinaFlag() {
  const smallStars: Array<[number, number]> = [
    [10, 2],
    [12, 4],
    [12, 7],
    [10, 9],
  ];
  return (
    <svg viewBox="0 0 30 20" width="20" height="14" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points={star(5, 5, 3, -Math.PI / 2)} fill="#FFDE00" />
      {smallStars.map(([x, y]) => (
        <polygon key={`${x}-${y}`} points={star(x, y, 1, Math.atan2(5 - y, 5 - x))} fill="#FFDE00" />
      ))}
    </svg>
  );
}

function UkFlag() {
  return (
    <svg viewBox="0 0 60 30" width="20" height="14" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export default function FlagIcon({ code }: { code: 'en' | 'zh' }) {
  return (
    <span className="inline-flex w-5 h-3.5 overflow-hidden rounded-[2px] shrink-0 border border-background-300">
      {code === 'zh' ? <ChinaFlag /> : <UkFlag />}
    </span>
  );
}
