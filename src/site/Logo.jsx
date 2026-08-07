import { Link } from "react-router-dom";
import { T } from "./theme";

// One consistent logo implementation for every header and footer.
export const Logo = ({ className = "", onClick }) => (
  <Link to="/" onClick={onClick} data-testid="site-logo" className={`flex items-center gap-3 ${className}`} style={{ color: T.text }}>
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="1" y="1" width="30" height="30" stroke={T.text} strokeWidth="1.5" />
      <path d="M8 9H24" stroke={T.signal} strokeWidth="2.2" />
      <path d="M16 9V24" stroke={T.text} strokeWidth="2.2" />
    </svg>
    <span className="font-archivo text-[15px] font-semibold uppercase tracking-[0.28em]">Tayseer</span>
  </Link>
);
