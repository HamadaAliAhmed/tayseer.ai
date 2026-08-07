export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b0e] text-white" aria-live="polite" aria-busy="true">
      <div className="flex items-center gap-3 text-sm text-white/60">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#5cf0ce]" aria-hidden="true" />
        Loading Tayseer
      </div>
    </main>
  );
}
