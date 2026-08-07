import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/site/motion";
import { InnerHero, SectionLabel } from "@/site/ui";
import { T } from "@/site/theme";

const OFFICES = [
  { region: "Saudi Arabia", addr: "Office 7, 2nd Floor, Selam Building, Prince Saad bin Abdulrahman Alawal Branch Road, Al Rawabi, Riyadh, Kingdom of Saudi Arabia" },
  { region: "UAE", addr: "601, One Lake Plaza, Cluster T, JLT, Dubai, UAE" },
];

export default function Connect() {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    const p = Object.fromEntries(new FormData(f).entries());
    setSending(true);
    try {
      const res = await fetch("/api/connect", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.ok) throw new Error(d.error || "send failed");
      toast.success("Thanks — your message has been sent.");
      f.reset();
    } catch (err) {
      toast.message("Opening your email app to send your message…");
      window.location.href = `mailto:info@tayseer.me?subject=${encodeURIComponent("Connect - " + (p.name || ""))}&body=${encodeURIComponent((p.message || "") + "\n\n" + (p.email || "") + " " + (p.phone || "") + "\nOrganization: " + (p.organization || ""))}`;
    } finally {
      setSending(false);
    }
  };
  return (
    <div style={{ background: T.bg, color: T.text }} className="font-archivo">
      {/* SOURCED: H1 "Connect with Tayseer – The Trusted Partner for Your Business" */}
      <InnerHero index="03" crumbs={["Home", "Connect"]} title="Connect" tagline="Connect with Tayseer – The Trusted Partner for Your Business" />

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12">
          {/* VISIT US */}
          <div className="lg:col-span-5">
            <Reveal><SectionLabel>Visit Us</SectionLabel></Reveal>
            <div className="mt-6 space-y-5">
              {OFFICES.map((o) => (
                <Reveal key={o.region} delay={0.05}>
                  <div className="rounded-lg border p-6" style={{ borderColor: T.border, background: T.panel }}>
                    <div className="flex items-center gap-2 font-jbmono text-[12px] uppercase tracking-widest" style={{ color: T.signal }}>
                      <MapPin size={15} /> {o.region}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: T.muted }}>{o.addr}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.1}>
                <div className="space-y-1 font-jbmono text-sm" style={{ color: T.muted }}>
                  <div><a href="mailto:info@tayseer.me" className="hover:text-white">info@tayseer.me</a></div>
                  <div><a href="tel:+966555203079" className="hover:text-white">+966 555203079</a></div>
                  <div><a href="tel:+97143997558" className="hover:text-white">+971 43997558</a></div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <Reveal><p className="text-lg" style={{ color: T.muted }}>Fill out the form below, and we will contact you as soon as possible!</p></Reveal>
            <Reveal delay={0.05}>
              <form
                data-testid="connect-form"
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* SOURCED — field labels confirmed from live Connect form */}
                <input name="name" required placeholder="Your Name*" data-testid="connect-name" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
                <input name="email" type="email" required placeholder="Your Email*" data-testid="connect-email" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
                <input name="phone" type="tel" placeholder="Your Phone" data-testid="connect-phone" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
                <input name="organization" required placeholder="Organization*" data-testid="connect-organization" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
                <textarea name="message" required rows={5} placeholder="Your Message*" data-testid="connect-message" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C] sm:col-span-2" style={{ borderColor: T.border, color: T.text }} />
                <button type="submit" disabled={sending} data-testid="connect-submit" className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto" style={{ background: T.signal, color: T.bg }}>{sending ? "Sending…" : "Submit"} <ArrowRight size={16} /></button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
