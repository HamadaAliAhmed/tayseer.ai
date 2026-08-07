import Image from "next/image";
import { Link } from "react-router-dom";

// One consistent logo implementation for every header and footer — the
// actual brand mark (public/logo-light.svg), not a generated stand-in.
export const Logo = ({ className = "", onClick }) => (
  <Link to="/" onClick={onClick} data-testid="site-logo" className={`flex items-center ${className}`}>
    <Image
      src="/logo-light.svg"
      alt="Tayseer Innovations"
      width={170}
      height={30}
      className="h-[30px] w-auto"
      priority
    />
  </Link>
);
