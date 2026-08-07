import Link from "next/link";

export function TayseerLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tayseer Innovations home"
      className={`inline-flex items-center gap-3 text-[var(--brand-text)] ${className}`}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9H24" stroke="var(--brand-signal)" strokeWidth="2.2" />
        <path d="M16 9V24" stroke="currentColor" strokeWidth="2.2" />
      </svg>
      <span className="font-[var(--font-brand)] text-[15px] font-semibold uppercase tracking-[0.28em]">
        Tayseer
      </span>
    </Link>
  );
}
