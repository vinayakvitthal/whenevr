export function ImageDuo() {
  return (
    <section className="py-12 sm:py-20 -mx-5 sm:-mx-8">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <DarkPreview variant="orange" />
        <DarkPreview variant="blue" />
      </div>
    </section>
  );
}

function DarkPreview({ variant }: { variant: "orange" | "blue" }) {
  return (
    <div className="relative rounded-[28px] overflow-hidden bg-[#0A0A0A] aspect-[4/3] group">
      {/* ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "orange"
              ? "radial-gradient(60% 50% at 30% 80%, #ff7a00 0%, rgba(255,122,0,0) 60%), radial-gradient(60% 60% at 70% 60%, #ff3d00 0%, rgba(255,61,0,0) 70%)"
              : "radial-gradient(60% 50% at 30% 60%, #00f0ff 0%, rgba(0,240,255,0) 60%), radial-gradient(60% 60% at 70% 50%, #6f00ff 0%, rgba(111,0,255,0) 70%)",
          filter: "blur(20px)",
          opacity: 0.55,
        }}
      />
      {/* device frame */}
      <div className="absolute inset-0 grid place-items-center p-8 sm:p-12">
        <div className="w-[88%] aspect-[16/10] rounded-2xl bg-[#0E0E0E] ring-1 ring-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-7 bg-[#0E0E0E] ring-1 ring-white/5 flex items-center px-3 gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
          </div>
          {variant === "orange" ? (
            <Torus />
          ) : (
            <BlueScene />
          )}
        </div>
      </div>
      {variant === "orange" && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[42%] flex items-center gap-2 text-[11px] text-white/80">
          <span className="w-2 h-2 rounded-full bg-white/40" />
          Framer is the best way to design • Join us today
        </div>
      )}
      {variant === "blue" && (
        <div className="absolute left-8 bottom-8 max-w-[60%]">
          <h3 className="text-white font-display text-[22px] sm:text-[28px] tracking-display leading-tight">Publish it with Framer Studio</h3>
          <p className="text-white/60 text-[12.5px] mt-1">No coding required.</p>
          <button className="mt-3 px-3 py-1.5 rounded-full bg-white text-[12px] font-medium text-ink">Read more</button>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-3 text-center text-[10px] text-white/40 tracking-[0.18em] uppercase">
        Example content for demo purposes only.
      </div>
    </div>
  );
}

function Torus() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg viewBox="0 0 400 240" className="w-[80%] h-[80%]" aria-hidden>
        <defs>
          <radialGradient id="torus" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFC56B" />
            <stop offset="50%" stopColor="#FF7A1A" />
            <stop offset="100%" stopColor="#7A1A00" />
          </radialGradient>
          <linearGradient id="capsule" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5b5b5b" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="140" rx="90" ry="70" fill="url(#torus)" />
        <ellipse cx="160" cy="140" rx="38" ry="30" fill="#0E0E0E" />
        <rect x="240" y="80" width="60" height="120" rx="30" fill="url(#capsule)" />
      </svg>
    </div>
  );
}

function BlueScene() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 60%, #1648ff 0%, rgba(22,72,255,0) 70%)",
        }}
      />
      <div className="absolute right-6 bottom-6 w-[55%] aspect-[4/3] rounded-lg bg-[#0a0a0a] ring-1 ring-white/15 shadow-2xl overflow-hidden">
        <div className="h-3 bg-white/5" />
        <div className="p-2 grid grid-cols-3 gap-1">
          <div className="aspect-square rounded bg-emerald-400/80" />
          <div className="aspect-square rounded bg-pink-400/80" />
          <div className="aspect-square rounded bg-yellow-400/80" />
        </div>
        <div className="px-2 mt-1">
          <div className="h-1.5 w-3/4 rounded bg-white/20" />
          <div className="h-1.5 mt-1 w-1/2 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
