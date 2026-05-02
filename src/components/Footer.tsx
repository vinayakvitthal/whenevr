"use client";
import { useState } from "react";
import { Logo } from "./Logo";

function Calendar() {
  const [day, setDay] = useState(8);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // May 2026 starts on a Friday
  const offset = 5;
  const slots = [12, 24];

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-5 ring-1 ring-white/10 w-full max-w-[340px] text-white">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[14.5px] font-medium">May <span className="text-white/60">2026</span></span>
        <div className="flex gap-1">
          <button aria-label="Previous month" className="w-7 h-7 rounded-full hover:bg-white/10 grid place-items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 2.5 L4 6 L7.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button aria-label="Next month" className="w-7 h-7 rounded-full hover:bg-white/10 grid place-items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5 L8 6 L4.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[10.5px] text-white/45 uppercase tracking-wider">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => <span key={d} className="py-1">{d.slice(0,3)}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-[13px] mt-1">
        {Array.from({ length: offset }).map((_, i) => <span key={`o${i}`} />)}
        {days.map((d) => {
          const isAvail = [11,12,13,14,15,18,19,20,21,22,25,26,27,28,29].includes(d);
          const isSel = d === day;
          return (
            <button
              key={d}
              onClick={() => isAvail && setDay(d)}
              className={`h-8 rounded-md transition-colors ${
                isSel ? "bg-white text-ink font-medium" : isAvail ? "bg-white/10 hover:bg-white/20 text-white" : "text-white/35"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-white/80">Fri <span className="text-white/45">{day}</span></span>
          <div className="flex rounded-full bg-white/10 p-0.5">
            {slots.map((s) => (
              <button
                key={s}
                className={`text-[11px] px-2.5 py-1 rounded-full transition-colors ${
                  s === 24 ? "bg-white text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {s}h
              </button>
            ))}
          </div>
        </div>
        <button className="mt-3 w-full bg-white/10 hover:bg-white/20 transition-colors rounded-lg py-2.5 text-[13px]">
          3:45pm
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white rounded-t-[36px] -mx-0">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 pt-16 sm:pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="text-white/90"><Logo /></div>
            <h2 className="mt-6 font-display text-[40px] sm:text-[58px] lg:text-[72px] tracking-display leading-[1.02]">
              Design <span className="italic-serif font-medium">doesn&apos;t</span> need
              <br />
              to be complicated.
            </h2>
            <p className="mt-6 max-w-[440px] text-white/65 text-[14.5px] leading-[1.6]">
              Book a quick call and get a clear look at how Whenevr works, what&apos;s included, and whether it fits your pace.
            </p>
            <a href="#pricing" className="btn-light mt-7">See Pricing</a>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end w-full">
            <Calendar />
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between text-[12.5px] text-white/55">
          <p>© 2025 Whenevr. Created by Vinayak.</p>
          <nav className="flex gap-6">
            <a href="#" className="ul-hover">Thank You</a>
            <a href="#" className="ul-hover">Privacy Policy</a>
            <a href="#" className="ul-hover">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
