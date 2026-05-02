import { FEATURES } from "@/lib/data";

function Icon({ name }: { name: string }) {
  const common = "w-5 h-5";
  switch (name) {
    case "queue":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="4" width="4" height="16" rx="1.2" fill="currentColor" />
          <rect x="15" y="4" width="4" height="16" rx="1.2" fill="currentColor" />
        </svg>
      );
    case "price":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="6" width="18" height="13" rx="2.5" fill="currentColor" />
          <rect x="6" y="9" width="9" height="2" rx="1" fill="white" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M13 2 L4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
        </svg>
      );
    case "quality":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3 L15 6 L12 9 L9 6 Z" fill="currentColor" />
          <path d="M19 10 L22 13 L19 16 L16 13 Z" fill="currentColor" />
          <path d="M5 10 L8 13 L5 16 L2 13 Z" fill="currentColor" />
          <path d="M12 17 L15 20 L12 23 L9 20 Z" fill="currentColor" />
        </svg>
      );
    case "toggle":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="7" width="20" height="10" rx="5" fill="currentColor" />
          <circle cx="8" cy="12" r="3" fill="white" />
        </svg>
      );
    case "lock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="10" width="16" height="11" rx="2" fill="currentColor" />
          <path d="M8 10 V7 a4 4 0 0 1 8 0 v3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="text-center max-w-[820px] mx-auto">
          <span className="chip">Features</span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.04] tracking-display">
            Everything you need
            <br className="hidden sm:block" /> and{" "}
            <span className="italic-serif font-medium">nothing</span>{" "}<span className="inline-block">you don&apos;t.</span>
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="surface p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="w-9 h-9 rounded-lg bg-ink text-white grid place-items-center">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-5 font-display text-[19px] tracking-display leading-tight">{f.title}</h3>
              <p className="mt-1.5 text-muted text-[14.5px] leading-[1.55]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
