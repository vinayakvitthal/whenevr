"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" aria-label="Whenevr" className="select-none">
          <Logo />
        </a>

        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="chip group !py-2.5 !px-4 hover:shadow-md transition-shadow"
        >
          <span className="text-[13px] font-medium">{open ? "Close" : "Menu"}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-md transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full pt-28 px-8 flex flex-col gap-3">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-[12vw] sm:text-[80px] leading-[0.95] tracking-display block ul-hover w-fit"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ${i * 0.06 + 0.1}s, transform 0.6s ${i * 0.06 + 0.1}s`,
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-dark mt-8 w-fit"
            style={{ opacity: open ? 1 : 0, transition: "opacity 0.6s 0.4s" }}
          >
            Book a 15-min intro call
          </a>
        </nav>
      </div>
    </header>
  );
}
