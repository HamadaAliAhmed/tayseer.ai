"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b0e] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#5cf0ce]">Something went wrong</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">We couldn’t load this experience.</h1>
        <p className="mt-4 text-white/60">Try again. If the issue persists, the page can still be revisited from the main navigation.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 min-h-12 rounded-md bg-[#5cf0ce] px-6 py-3 font-semibold text-[#07110f]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
