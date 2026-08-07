import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/site/motion";
import { InnerHero, SectionLabel } from "@/site/ui";
import { T } from "@/site/theme";

export default function Careers() {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    const fd = new FormData(f);
    setSending(true);
    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.ok) throw new Error(d.error || "send failed");
      toast.success("Thanks — your application has been submitted.");
      f.reset();
    } catch (err) {
      toast.message("Opening your email app… please attach your résumé manually.");
      window.location.href = `mailto:info@tayseer.me?subject=${encodeURIComponent("Career Application - " + (fd.get("name") || ""))}&body=${encodeURIComponent("Position: " + (fd.get("position") || "") + "\nPhone: " + (fd.get("phone") || "") + "\nEmail: " + (fd.get("email") || "") + "\n\n" + (fd.get("message") || ""))}`;
    } finally {
      setSending(false);
    }
  };
  return (
    <div style={{ background: T.bg, color: T.text }} className="font-archivo">
      {/* SOURCED: H2 "Shape the Future of Intelligent Solutions in the Region" +
          "Please fill the form below along with your detailed resume." */}
      <InnerHero
        index="04"
        crumbs={["Home", "Careers"]}
        title="Careers"
        tagline="Shape the Future of Intelligent Solutions in the Region"
        lead="Please fill the form below along with your detailed resume."
      />

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[900px]">
          <Reveal><SectionLabel>Apply</SectionLabel></Reveal>
          {/* SOURCED — field set confirmed from live Careers form */}
          <Reveal delay={0.05}>
            <form
              data-testid="careers-form"
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input name="name" required placeholder="Your Name*" data-testid="careers-name" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
              <input name="phone" type="tel" placeholder="Your Phone" data-testid="careers-phone" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
              <input name="email" type="email" required placeholder="Your Email*" data-testid="careers-email" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }} />
              <select name="position" required defaultValue="" data-testid="careers-position" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C]" style={{ borderColor: T.border, color: T.text }}>
                <option value="" disabled style={{ background: T.panel }}>Position Applied For*</option>
                <option value="Choose One" style={{ background: T.panel }}>Choose One</option>
                <option value="Software Development" style={{ background: T.panel }}>Software Development</option>
                <option value="Sales" style={{ background: T.panel }}>Sales</option>
                <option value="Others" style={{ background: T.panel }}>Others</option>
              </select>
              <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed px-4 py-3.5 text-sm sm:col-span-2" style={{ borderColor: T.border, color: T.muted }}>
                <Upload size={16} style={{ color: T.signal }} /> Resume/CV* — .pdf, .txt, .jpg, .jpeg, .png, .gif, .doc, .docx, .ppt
                <input name="resume" type="file" required accept=".pdf,.txt,.jpg,.jpeg,.png,.gif,.doc,.docx,.ppt" data-testid="careers-resume" className="hidden" />
              </label>
              <textarea name="message" rows={4} placeholder="Your Message" data-testid="careers-message" className="rounded-md border bg-transparent px-4 py-3.5 text-sm outline-none focus:border-[#0D5A8C] sm:col-span-2" style={{ borderColor: T.border, color: T.text }} />
              <button type="submit" disabled={sending} data-testid="careers-submit" className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto" style={{ background: T.signal, color: T.bg }}>{sending ? "Submitting…" : "Submit"} <ArrowRight size={16} /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
