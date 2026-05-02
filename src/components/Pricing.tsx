"use client";
import { useEffect, useRef, useState } from "react";

const INCLUDED = [
  "Unlimited design requests",
  "One active task at a time",
  "Delivered in a few business days",
  "Source files included",
  "Cancel or pause anytime",
];

export function Pricing() {
  const [extra, setExtra] = useState(false);
  const [displayTotal, setDisplayTotal] = useState(2995);
  const prevRef = useRef(2995);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = prevRef.current;
    const to = 2995 + (extra ? 995 : 0);
    prevRef.current = to;
    if (from === to) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const startTime = performance.now();
    const dur = 550;

    const tick = (now: number) => {
      const p = Math.min((now - startTime) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3); // ease-out-cubic
      setDisplayTotal(Math.round(from + (to - from) * e));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [extra]);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#0A0A0A] shadow-soft">
          {/* Left visual */}
          <div className="lg:col-span-5 relative h-[280px] lg:h-auto bg-black overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 60% at 30% 60%, #ff7a00 0%, rgba(255,122,0,0) 70%), radial-gradient(60% 50% at 70% 30%, #6f00ff 0%, rgba(111,0,255,0) 70%)",
                filter: "blur(20px)",
                opacity: 0.55,
              }}
              aria-hidden
            />
            <div className="absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 320 220" className="w-[70%]" aria-hidden>
                <defs>
                  <radialGradient id="pt" cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#FFC56B" />
                    <stop offset="50%" stopColor="#FF7A1A" />
                    <stop offset="100%" stopColor="#7A1A00" />
                  </radialGradient>
                </defs>
                <ellipse cx="130" cy="120" rx="80" ry="60" fill="url(#pt)" />
                <ellipse cx="130" cy="120" rx="32" ry="24" fill="#000" />
                <rect x="200" y="65" width="55" height="110" rx="27" fill="#1a1a1a" stroke="#3a3a3a" />
              </svg>
            </div>
          </div>

          {/* Right pricing */}
          <div className="lg:col-span-7 p-7 sm:p-10 text-white relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="italic-serif text-[32px] leading-none">
                  whenevr<sup className="not-italic font-sans text-[10px] opacity-70 ml-0.5">®</sup>
                </h3>
                <p className="mt-3 text-white/65 text-[13.5px] max-w-[320px] leading-[1.55]">
                  Submit any design task you need. Landing pages, product visuals, brand assets, and more.
                </p>
              </div>

              <label className="flex items-center gap-3 select-none cursor-pointer pt-1">
                <span className="text-right">
                  <span className="block text-[12.5px] font-medium">Additional Active Task</span>
                  <span className="block text-[11px] text-white/55">+$995</span>
                </span>
                <span
                  onClick={() => setExtra((v) => !v)}
                  className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-300 ${
                    extra ? "bg-emerald-500" : "bg-white/15"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                      extra ? "translate-x-5" : ""
                    }`}
                  />
                </span>
              </label>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-[58px] tracking-display leading-none tabular-nums">
                ${displayTotal.toLocaleString()}
              </span>
              <span className="text-white/55 pb-2">/month</span>
            </div>

            <button className="mt-6 w-full bg-white text-ink rounded-full py-3.5 font-medium text-[14.5px] hover:bg-white/90 transition-colors">
              Join today
            </button>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {INCLUDED.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-[13.5px] text-white/85">
                  <span className="w-4 h-4 rounded-full bg-white/10 grid place-items-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5.2 L4.2 7.4 L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
