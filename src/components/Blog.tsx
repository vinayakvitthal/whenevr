"use client";
import { useEffect, useRef, useState } from "react";
import { BLOG } from "@/lib/data";

function BlogImage({ kind }: { kind: string }) {
  switch (kind) {
    case "blur-figure":
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
          <rect width="400" height="400" fill="#F0F0F0" />
          <g style={{ filter: "blur(8px)" }}>
            <ellipse cx="200" cy="120" rx="34" ry="42" fill="#1a1a1a" />
            <path d="M120 360 C 130 250, 270 250, 280 360 Z" fill="#1a1a1a" />
          </g>
          <g opacity="0.35" stroke="#000">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1="120" y1={120 + i * 16} x2="280" y2={120 + i * 16} strokeWidth="0.6" />
            ))}
          </g>
        </svg>
      );
    case "silhouette":
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" aria-hidden>
          <rect width="400" height="300" fill="#0E0E0E" />
          <ellipse cx="200" cy="100" rx="40" ry="50" fill="#3a3a3a" />
          <path d="M110 290 C 130 180, 270 180, 290 290 Z" fill="#3a3a3a" />
        </svg>
      );
    case "hands":
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="bg-h" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FCE5D5" />
              <stop offset="100%" stopColor="#9DBBD8" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-h)" />
          <g style={{ filter: "blur(4px)" }}>
            <path d="M50 280 C 120 200, 180 160, 200 110 C 220 160, 280 200, 350 280 Z" fill="#E2C2A0" />
          </g>
        </svg>
      );
    case "abstract":
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full" aria-hidden>
          <defs>
            <radialGradient id="bg-a" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#F2D6D6" />
              <stop offset="100%" stopColor="#A8B0D8" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg-a)" />
          <g style={{ filter: "blur(6px)", mixBlendMode: "multiply", opacity: 0.7 }}>
            <ellipse cx="120" cy="150" rx="80" ry="120" fill="#fff" />
            <ellipse cx="280" cy="160" rx="80" ry="110" fill="#fff" />
          </g>
        </svg>
      );
    default:
      return <div className="w-full h-full bg-[#EAEAEA]" />;
  }
}

export function Blog() {
  const [hero, ...rest] = BLOG;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div
          className="text-center max-w-[820px] mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="chip">Blog</span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.04] tracking-display">
            Practical reads to
            <br className="hidden sm:block" /> help you move{" "}
            <span className="italic-serif font-medium">faster.</span>
          </h2>
        </div>

        {/* Hero blog card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1) 100ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) 100ms",
          }}
        >
          <article className="surface mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 overflow-hidden group cursor-pointer">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[360px] overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <BlogImage kind={hero.image} />
              </div>
            </div>
            <div className="p-7 sm:p-10 flex flex-col justify-center relative">
              <span className="self-start text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F4F4F4] ring-1 ring-black/5">
                {hero.tag}
              </span>
              <h3 className="mt-4 font-display text-[26px] sm:text-[32px] tracking-display leading-[1.1]">
                {hero.title}
              </h3>
              <p className="mt-3 text-muted text-[14.5px] leading-[1.6]">{hero.desc}</p>
              <div className="mt-6 flex items-center justify-between text-[12px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/70" />
                  {hero.read}
                </span>
                <span className="italic-serif text-[13px] text-ink/70">
                  by Whenevr<sup className="not-italic font-sans text-[8px] opacity-70 ml-0.5">®</sup>
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Secondary blog cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((b, i) => (
            <div
              key={b.title}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${220 + i * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${220 + i * 80}ms`,
              }}
            >
              <article className="surface overflow-hidden group cursor-pointer h-full">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <BlogImage kind={b.image} />
                  </div>
                  <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/5">
                    {b.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[18px] tracking-display leading-[1.15]">{b.title}</h3>
                  <p className="mt-2 text-muted text-[13.5px] leading-[1.55]">{b.desc}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
