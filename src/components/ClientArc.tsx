"use client";
import { useEffect, useRef, useState } from "react";

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
  const [visible, setVisible] = useState(false);

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

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);

    return () => {
      el.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  // Arc positions: convex-up arc (peak in the middle, sides drop down)
  const positions = [
    { x: 8,  y: 78, size: 60 },
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
        <div
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="chip">100+ clients</span>
        </div>
        <h2
          className="mt-6 text-center font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-display"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 80ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 80ms",
          }}
        >
          100+ clients getting
          <br />
          <span className="italic-serif font-medium">better</span> design, faster.
        </h2>

        <div className="relative mt-12 sm:mt-16 h-[260px] sm:h-[300px] lg:h-[340px]">
          {positions.map((p, i) => (
            <div
              key={i}
              className="absolute transition-transform duration-700"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                transform: `translate(-50%, -50%) translate(calc(var(--mx, 0) * ${(i - 3) * 6}px), calc(var(--my, 0) * ${(i - 3) * 4}px))`,
              }}
            >
              {/* inner wrapper handles entrance animation separately from parallax */}
              <div
                className="w-full h-full"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.55)",
                  transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${200 + i * 65}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${200 + i * 65}ms`,
                }}
              >
                <Face hue={FACES[i % FACES.length].hue} sat={FACES[i % FACES.length].sat} i={i} />
              </div>
            </div>
          ))}

          {/* Book-call pill at center */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) translateX(-50%)" : "translateY(10px) translateX(-50%)",
              transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 680ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) 680ms",
            }}
          >
            <a href="#contact" className="btn-light">
              <span className="relative inline-flex w-6 h-6 rounded-full overflow-hidden ring-1 ring-black/5">
                <span className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-400" />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[12.5px] font-medium">Book a 15-min intro call</span>
                <span className="text-[10.5px] text-muted flex items-center gap-1.5">
                  <span className="relative inline-flex">
                    <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
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
