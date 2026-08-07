import { Reveal } from "./motion";
import { T } from "./theme";

// Honest stub for pages whose real content has not been provided yet.
// Marked so nothing here is mistaken for final/sourced copy.
export default function PageStub({ index, title }) {
  return (
    <section className="grain relative min-h-screen w-full overflow-hidden" style={{ background: T.bg }}>
      <div className="hairline-grid absolute inset-0" style={{ "--hl": T.hl, backgroundSize: "8.33% 6rem" }} />
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-28 pb-20 md:px-12">
        <Reveal>
          <div className="mb-6 font-jbmono text-[12px] uppercase tracking-[0.25em]" style={{ color: T.signal }}>
            {index} — Section
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.02em] sm:text-7xl" style={{ color: T.text }}>
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 font-jbmono text-[12px] uppercase tracking-widest" style={{ borderColor: T.border, color: T.muted }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: T.signal }} />
            {/* NEEDS VERIFICATION — awaiting real page content */}
            Awaiting real content — flagged for review
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl font-jbmono text-sm leading-relaxed" style={{ color: T.faint }}>
            This page is wired into navigation and responsive layout. Paste the real
            copy for this section and it will be built here — no placeholder facts,
            no invented numbers or client names.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
