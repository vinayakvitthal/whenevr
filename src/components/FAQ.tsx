import { FAQS } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[860px] px-5 sm:px-8">
        <div className="surface p-7 sm:p-10">
          <span className="chip">FAQs</span>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            <h2 className="font-display text-[36px] sm:text-[48px] leading-[1.05] tracking-display">
              Frequently
              <br />
              Asked <span className="italic-serif font-medium">Questions</span>
            </h2>
            <div className="md:text-right">
              <p className="text-[12px] text-muted uppercase tracking-[0.18em]">Email</p>
              <p className="text-[14.5px] mt-1">hello@whenevr.com</p>
              <a href="#contact" className="btn-dark mt-4">Get in touch</a>
            </div>
          </div>

          <div className="mt-10 divide-y divide-black/[0.06]">
            {FAQS.map((f, i) => (
              <details key={i} className="group py-4">
                <summary className="flex items-center justify-between gap-4 py-2">
                  <span className="text-[15.5px] font-medium">{f.q}</span>
                  <svg
                    className="faq-icon shrink-0 text-ink/50"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="text-muted text-[14px] leading-[1.6] pb-2 pr-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
