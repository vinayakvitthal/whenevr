import { SERVICES } from "@/lib/data";

function Header() {
  return (
    <div className="text-center max-w-[820px] mx-auto">
      <span className="chip">How it works</span>
      <h2 className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-display">
        Welcome to the better way
        <br className="hidden sm:block" /> of getting design{" "}
        <span className="italic-serif font-medium">done.</span>
      </h2>
    </div>
  );
}

function SubscribeCard() {
  return (
    <div className="surface p-6 sm:p-7 h-full flex flex-col">
      <div className="bg-[#F6F6F6] rounded-2xl p-5 mb-5 ring-1 ring-black/[0.04]">
        <div className="flex items-center justify-between">
          <span className="italic-serif text-[18px] leading-none">
            whenevr<sup className="not-italic font-sans text-[8px] opacity-70 ml-0.5">®</sup>
          </span>
          <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-white ring-1 ring-black/5">Popular</span>
        </div>
        <div className="mt-4 flex items-end gap-1">
          <span className="font-display text-[36px] tracking-display leading-none">$2,995</span>
          <span className="text-muted text-sm pb-1">/month</span>
        </div>
        <button className="btn-dark w-full mt-4 justify-center">Join today</button>
      </div>
      <h3 className="font-display text-[22px] tracking-display mt-auto">Subscribe</h3>
      <p className="mt-2 text-muted text-[14.5px] leading-[1.5]">
        Pick a plan and get started right away. No calls, no setup, just design on demand.
      </p>
    </div>
  );
}

function RequestCard() {
  const tags = ["UX Design", "Pitch Decks", "Branding", "Graphics", "Landing", "Illustrations", "App Design", "Style Guides", "Icon Design"];
  return (
    <div className="surface p-6 sm:p-7 h-full flex flex-col">
      <div className="relative bg-[#F6F6F6] rounded-2xl p-5 mb-5 ring-1 ring-black/[0.04] h-[210px] overflow-hidden">
        <div className="flex flex-wrap gap-1.5 max-w-[80%]">
          {tags.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white ring-1 ring-black/5 text-ink/80">
              {t}
            </span>
          ))}
        </div>
        {/* W mark */}
        <div className="absolute right-4 bottom-4 w-[68px] h-[68px] rounded-2xl bg-black grid place-items-center shadow-lg">
          <span className="italic-serif text-white text-[36px] leading-none">w</span>
        </div>
      </div>
      <h3 className="font-display text-[22px] tracking-display mt-auto">Request</h3>
      <p className="mt-2 text-muted text-[14.5px] leading-[1.5]">
        Submit any design task you need. Landing pages, product visuals, brand assets, and more.
      </p>
    </div>
  );
}

function ReceiveCard() {
  return (
    <div className="surface p-6 sm:p-7 h-full flex flex-col">
      <div className="bg-[#F6F6F6] rounded-2xl p-5 mb-5 ring-1 ring-black/[0.04] h-[210px] grid place-items-center">
        <Folder />
      </div>
      <h3 className="font-display text-[22px] tracking-display mt-auto">Receive</h3>
      <p className="mt-2 text-muted text-[14.5px] leading-[1.5]">
        Your design is delivered in a few business days. Simple, fast, and ready to use.
      </p>
    </div>
  );
}

function Folder() {
  return (
    <svg width="138" height="120" viewBox="0 0 138 120" fill="none" aria-hidden>
      <defs>
        <linearGradient id="back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#EDEDED" />
        </linearGradient>
        <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9C9C9C" />
          <stop offset="100%" stopColor="#6B6B6B" />
        </linearGradient>
      </defs>
      <path d="M3 12 C3 7 7 4 12 4 H50 L60 14 H126 C131 14 135 18 135 23 V100 C135 105 131 109 126 109 H12 C7 109 3 105 3 100 Z"
            fill="url(#back)" stroke="#D7D7D7" />
      <rect x="20" y="22" width="100" height="68" rx="6" fill="url(#paper)" opacity="0.95" />
      <text x="69" y="65" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="34" fill="white" opacity="0.8">w</text>
      <path d="M3 28 C3 23 7 20 12 20 H126 C131 20 135 24 135 29 V100 C135 105 131 109 126 109 H12 C7 109 3 105 3 100 Z"
            fill="#fff" stroke="#E2E2E2" />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="pt-20 sm:pt-28 pb-10 sm:pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Header />
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          <SubscribeCard />
          <RequestCard />
          <ReceiveCard />
        </div>
      </div>
    </section>
  );
}

export { SERVICES };
