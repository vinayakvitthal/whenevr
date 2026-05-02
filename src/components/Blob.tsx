export function Blob({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg
        viewBox="0 0 600 760"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="g1" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#a35bff" />
            <stop offset="40%" stopColor="#5a26ff" />
            <stop offset="80%" stopColor="#1216c4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0b0a4a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g2" cx="70%" cy="65%" r="55%">
            <stop offset="0%" stopColor="#d966ff" />
            <stop offset="50%" stopColor="#7a3aff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1a0aff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g3" cx="20%" cy="80%" r="55%">
            <stop offset="0%" stopColor="#3a2cff" />
            <stop offset="100%" stopColor="#0a0a4a" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* core blob shape */}
        <g filter="url(#soft)" className="origin-center animate-blob">
          <path
            d="M310 60 C 430 40, 540 160, 520 290 C 510 380, 560 470, 500 580 C 430 700, 280 720, 200 640 C 120 560, 70 460, 110 360 C 140 270, 130 180, 200 110 C 240 70, 270 65, 310 60 Z"
            fill="url(#g1)"
          />
          <path
            d="M340 110 C 470 130, 530 270, 470 410 C 430 510, 470 590, 380 660 C 290 720, 180 660, 170 540 C 165 460, 200 400, 220 330 C 240 240, 250 130, 340 110 Z"
            fill="url(#g2)"
            opacity="0.9"
          />
          <path
            d="M260 200 C 360 200, 410 330, 360 440 C 320 530, 280 600, 230 580 C 160 550, 130 440, 170 340 C 200 270, 200 200, 260 200 Z"
            fill="url(#g3)"
            opacity="0.85"
          />
        </g>

        {/* subtle grain on top */}
        <rect width="600" height="760" filter="url(#grain)" opacity="0.3" />
      </svg>
    </div>
  );
}
