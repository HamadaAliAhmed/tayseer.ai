"use client";

import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { T } from "./theme";

export default function HomeContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: "",
      organization: data.get("company") || "—",
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "send failed");
      toast.success("Thanks — your message has been sent.");
      form.reset();
    } catch {
      toast.message("Opening your email app to send your message…");
      window.location.href = `mailto:info@tayseer.me?subject=${encodeURIComponent(`Website Query - ${payload.name || ""}`)}&body=${encodeURIComponent(`${payload.message || ""}\n\n${payload.email || ""}`)}`;
    }
  };

  return (
    <form data-testid="home-contact-form" onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input name="name" required autoComplete="name" placeholder="Name" data-testid="contact-name" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
      <input name="email" type="email" required autoComplete="email" placeholder="Email" data-testid="contact-email" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
      <input name="company" autoComplete="organization" placeholder="Company (optional)" data-testid="contact-company" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C] sm:col-span-2" style={{ borderColor: T.border, color: T.text }} />
      <textarea name="message" required rows={4} placeholder="How may we help you?" data-testid="contact-message" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C] sm:col-span-2" style={{ borderColor: T.border, color: T.text }} />
      <button type="submit" data-testid="contact-submit" className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5 sm:w-auto" style={{ background: T.signal, color: T.bg }}>
        Submit <ArrowRight size={16} />
      </button>
    </form>
  );
}
