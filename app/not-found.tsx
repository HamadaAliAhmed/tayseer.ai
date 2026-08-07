import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b0e] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#5cf0ce]">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">This page doesn’t exist.</h1>
        <p className="mt-4 text-white/60">The link may have changed during the Tayseer platform migration.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#5cf0ce] px-6 py-3 font-semibold text-[#07110f]">
          Return home
        </Link>
      </div>
    </main>
  );
}
