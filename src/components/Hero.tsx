import { Blob } from "./Blob";
import { SERVICES } from "@/lib/data";

export function Hero() {
  const loop = [...SERVICES.slice(0, 8), ...SERVICES.slice(0, 8)];
  return (
    <section id="top" className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 overflow-hidden">
      {/* Service chip marquee */}
      <div className="marquee-mask absolute top-24 sm:top-28 lg:top-32 inset-x-0 z-10 pointer-events-none">
        <div className="flex gap-3 w-max animate-marquee">
          {loop.map((s, i) => (
            <span key={i} className="chip whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
        {/* Headline */}
        <div className="col-span-1 lg:col-span-7 relative z-20 pt-16 sm:pt-20 lg:pt-24">
          <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[82px] leading-[1.03] tracking-display text-ink">
            <span className="block overflow-hidden pb-1">
              <span className="hero-line" style={{ animationDelay: "0ms" }}>World-class</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line" style={{ animationDelay: "90ms" }}>
                design{" "}
                <span className="italic-serif font-medium relative">
                  whenevr
                  <sup className="not-italic font-sans text-[0.35em] tracking-normal align-super ml-0.5 opacity-70">®</sup>
                </span>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line" style={{ animationDelay: "180ms" }}>you need it.</span>
            </span>
          </h1>

          <p
            className="fade-up-xs mt-6 max-w-[480px] text-[15px] sm:text-base leading-[1.55] text-muted"
            style={{ animationDelay: "320ms" }}
          >
            A monthly design subscription for startups, creators, and teams who need work done without the wait.
          </p>

          <div
            className="fade-up-xs mt-8 flex flex-wrap gap-3 items-center"
            style={{ animationDelay: "420ms" }}
          >
            <a href="#pricing" className="btn-dark">
              See Pricing
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3.5L8.5 7L5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-light group">
              <span className="relative inline-flex w-7 h-7 rounded-full overflow-hidden ring-1 ring-black/5">
                <span className="absolute inset-0 bg-gradient-to-br from-amber-300 to-rose-400" />
                <span className="absolute inset-0 grid place-items-center text-[10px] font-medium text-white">H</span>
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[13.5px] font-medium">Book a 15-min intro call</span>
                <span className="text-[11px] text-muted flex items-center gap-1.5">
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

        {/* Blob */}
        <div
          className="fade-up-xs col-span-1 lg:col-span-5 relative h-[380px] sm:h-[520px] lg:h-[680px] -mx-5 sm:mx-0 lg:-mr-12"
          style={{ animationDelay: "200ms" }}
        >
          <Blob className="absolute inset-0" />
        </div>
      </div>

      {/* Trusted line */}
      <div
        className="fade-up-xs mt-6 sm:mt-10 mx-auto max-w-[1280px] px-5 sm:px-8 text-center relative z-10"
        style={{ animationDelay: "580ms" }}
      >
        <p className="text-[12px] uppercase tracking-[0.2em] text-muted">
          <span className="opacity-70">Trusted by the biggest brands worldwide</span>
        </p>
      </div>
    </section>
  );
}
