interface SplatterProps {
  className?: string;
  color?: string;
}

/** Loose hand-drawn brush strokes used as ambient background texture. */
export default function Splatter({ className, color = "#ffffff" }: SplatterProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="14" strokeLinecap="round" opacity="0.85">
        <path d="M40 60 L90 20" />
        <path d="M120 100 L150 40" />
        <path d="M190 40 L230 110" />
        <path d="M480 40 L520 90" />
        <path d="M520 130 L560 70" />
        <path d="M420 160 L460 120" />
        <path d="M60 300 L100 260" />
        <path d="M40 420 L80 470" />
        <path d="M540 420 L520 480" />
      </g>
    </svg>
  );
}
