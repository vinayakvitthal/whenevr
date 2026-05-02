"use client";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);

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
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pages }).map((_, p) => (
              <div key={p} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-1">
                {TESTIMONIALS.slice(p * perPage, p * perPage + perPage).map((t, i) => (
                  <article key={t.name + i} className="surface p-6 sm:p-7 relative">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full ring-1 ring-black/5"
                        style={{
                          background: `radial-gradient(120% 100% at 30% 20%, hsl(${
                            (i * 47) % 360
                          } 55% 70%), hsl(${(i * 47) % 360} 45% 35%))`,
                        }}
                        aria-hidden
                      />
                      <div>
                        <h4 className="text-[14.5px] font-medium leading-tight">{t.name}</h4>
                        <p className="text-[12px] text-muted">{t.role}</p>
                      </div>
                    </div>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      className="absolute right-6 top-6 text-black/15"
                      aria-hidden
                    >
                      <path d="M9 9 H4 V14 C4 17 6 19 9 19 V14 H6 V9 H9 V9Z M21 9 H16 V14 C16 17 18 19 21 19 V14 H18 V9 H21 V9 Z" fill="currentColor"/>
                    </svg>
                    <p className="mt-5 text-[14.5px] leading-[1.55] text-ink/80">{t.quote}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                page === i ? "w-6 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
