"use client";
import { useEffect, useRef } from "react";

const FACES = [
  { hue: 25, sat: 70 },
  { hue: 200, sat: 30 },
  { hue: 340, sat: 50 },
  { hue: 50, sat: 60 },
  { hue: 280, sat: 40 },
  { hue: 160, sat: 50 },
  { hue: 20, sat: 30 },
];

function Face({ hue, sat, i }: { hue: number; sat: number; i: number }) {
  // Pseudo-portrait via gradient + initials
  return (
    <div
      className="rounded-full ring-4 ring-bg overflow-hidden grid place-items-center text-white font-medium"
      style={{
        background: `radial-gradient(120% 100% at 30% 20%, hsl(${hue} ${sat}% 75%), hsl(${hue} ${sat}% 45%) 60%, hsl(${hue} ${sat}% 28%))`,
        width: "100%",
        height: "100%",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <defs>
          <radialGradient id={`fp-${i}`} cx="50%" cy="35%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle cx="30" cy="22" r="9" fill="rgba(255,255,255,0.55)" />
        <path d="M10 56 C 14 40, 46 40, 50 56" fill="rgba(255,255,255,0.45)" />
        <rect width="60" height="60" fill={`url(#fp-${i})`} />
      </svg>
    </div>
  );
}

export function ClientArc() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Arc positions: convex-up arc (peak in the middle, sides drop down)
  const positions = [
    { x: 8, y: 78, size: 60 },
    { x: 22, y: 52, size: 76 },
    { x: 36, y: 32, size: 92 },
    { x: 50, y: 20, size: 110 },
    { x: 64, y: 32, size: 92 },
    { x: 78, y: 52, size: 76 },
    { x: 92, y: 78, size: 60 },
  ];

  return (
    <section className="pt-10 pb-20 sm:pb-28">
      <div ref={ref} className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="text-center">
          <span className="chip">100+ clients</span>
        </div>
        <h2 className="mt-6 text-center font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-display">
          100+ clients getting
          <br />
          <span className="italic-serif font-medium">better</span> design, faster.
        </h2>

        <div className="relative mt-12 sm:mt-16 h-[260px] sm:h-[300px] lg:h-[340px]">
          {positions.map((p, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                transform: `translate(-50%, -50%) translate(calc(var(--mx, 0) * ${(i - 3) * 6}px), calc(var(--my, 0) * ${(i - 3) * 4}px))`,
              }}
            >
              <Face hue={FACES[i % FACES.length].hue} sat={FACES[i % FACES.length].sat} i={i} />
            </div>
          ))}
          {/* Book-call pill at center */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
            <a href="#contact" className="btn-light">
              <span className="relative inline-flex w-6 h-6 rounded-full overflow-hidden ring-1 ring-black/5">
                <span className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-400" />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[12.5px] font-medium">Book a 15-min intro call</span>
                <span className="text-[10.5px] text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  Available now
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
