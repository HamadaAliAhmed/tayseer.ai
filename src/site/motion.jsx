import { motion } from "framer-motion";

// Section scroll-reveal + kinetic primitives for Direction B.
export const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
};

// Masked line-by-line reveal used in hero headlines.
export const LineReveal = ({ lines, className = "", stagger = 0.11, animate = "onload" }) => {
  const variants = {
    hidden: { y: "110%" },
    show: (i) => ({ y: 0, transition: { duration: 0.9, delay: 0.15 + i * stagger, ease: [0.16, 1, 0.3, 1] } }),
  };
  const trigger = animate === "onload" ? { initial: "hidden", animate: "show" } : { initial: "hidden", whileInView: "show", viewport: { once: true } };
  return (
    <span className={className}>
      {lines.map((t, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={variants} custom={i} {...trigger} className="block">
            {t}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Slow editorial marquee.
export const Marquee = ({ items, speed = 40, className = "", sep = "/" }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0 items-center">
          {items.map((it, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6">{it}</span>
              <span className="opacity-30">{sep}</span>
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);
