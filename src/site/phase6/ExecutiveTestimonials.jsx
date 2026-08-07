import { Quote } from "lucide-react";
import { Reveal } from "@/site/motion";
import { T } from "@/site/theme";

const TESTIMONIALS = [
  {
    name: "Saber Alkahtani",
    role: "Head of Individual Services Sector",
    quote: "Tayseer Innovations has been a key partner in driving growth and innovation within our individual banking services.",
  },
  {
    name: "Abdulla Alttowi",
    role: "Manager – R&D",
    quote: "Their innovative FinTech solutions provide a robust foundation for continuous improvement and adaptation within the ever-evolving financial landscape.",
  },
  {
    name: "Bassma Alzailay",
    role: "Development & Systems Analyst Manager",
    quote: "The team of developers at Tayseer is highly skilled and experienced. They were able to understand our complex requirements and develop a software solution that meets all our needs.",
  },
  {
    name: "Amd Ali",
    role: "IT Sector Manager",
    quote: "Their dedicated support team has been pivotal not only in smooth implementation but also as a partner in our ongoing success.",
  },
];

export default function ExecutiveTestimonials() {
  return (
    <section className="relative border-t px-6 py-24 md:px-12" style={{ borderColor: T.border, background: T.panel }} aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.signal }}>Client perspective</div>
          <h2 id="testimonials-heading" className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-5xl">
            Trusted for delivery, collaboration and long-term value
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="flex h-full min-h-[280px] flex-col rounded-xl border p-7 sm:p-8" style={{ borderColor: T.border, background: T.bg }}>
                <Quote aria-hidden="true" size={24} style={{ color: T.signal }} />
                <blockquote className="mt-8 text-xl leading-relaxed sm:text-2xl">“{item.quote}”</blockquote>
                <footer className="mt-auto pt-8">
                  <div className="font-semibold">{item.name}</div>
                  <div className="mt-1 text-sm" style={{ color: T.faint }}>{item.role}</div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
