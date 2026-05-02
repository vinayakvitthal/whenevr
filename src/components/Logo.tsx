export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`italic-serif text-[26px] leading-none tracking-tight2 ${className}`}>
      whenevr<sup className="not-italic font-sans text-[10px] align-super tracking-normal opacity-70">®</sup>
    </span>
  );
}
