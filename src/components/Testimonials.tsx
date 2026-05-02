"use client";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

const AVATARS = [
  "https://i.pravatar.cc/120?img=47",
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=5",
  "https://i.pravatar.cc/120?img=44",
  "https://i.pravatar.cc/120?img=33",
];

export function Testimonials() {
  const [active, setActive] = useState(2);
  const perView = 3;
  const maxStart = Math.max(0, TESTIMONIALS.length - perView);
  const start = Math.min(Math.max(active - 1, 0), maxStart);

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="text-center max-w-[820px] mx-auto">
          <span className="chip">Testimonials</span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.04] tracking-display">
            Turns out, people like
            <br className="hidden sm:block" /> getting things <span className="italic-serif font-medium">done.</span>
          </h2>
        </div>

        <div className="overflow-hidden mt-12 sm:mt-14">
          <div
            className="flex gap-4 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${start} * (100% / 3) - ${start} * 1rem / 3))` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className="surface p-6 sm:p-7 relative shrink-0 basis-[calc((100%-2rem)/3)]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={AVATARS[i % AVATARS.length]}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full ring-1 ring-black/5 object-cover"
                  />
                  <div>
                    <h4 className="text-[14.5px] font-medium leading-tight">{t.name}</h4>
                    <p className="text-[12px] text-muted">{t.role}</p>
                  </div>
                </div>
                <svg
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                  className="absolute right-6 top-6 text-black/12"
                  aria-hidden
                >
                  <path
                    d="M3 22 C3 14 7 8 14 5 L15 8 C10 10 8 13 8 17 H13 V22 H3 Z M19 22 C19 14 23 8 30 5 L31 8 C26 10 24 13 24 17 H29 V22 H19 Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="mt-5 text-[14.5px] leading-[1.55] text-ink/80">{t.quote}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
