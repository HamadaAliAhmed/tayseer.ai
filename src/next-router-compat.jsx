"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import { useParams as useNextParams, usePathname, useRouter } from "next/navigation";

export function Link({ to, children, ...props }) {
  return <NextLink href={to} {...props}>{children}</NextLink>;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname, search: "", hash: "", state: null, key: "next" };
}

export function useParams() {
  return useNextParams();
}

export function useNavigate() {
  const router = useRouter();
  return (to, options = {}) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      return;
    }
    if (options.replace) router.replace(to);
    else router.push(to);
  };
}

export function Navigate({ to, replace = false }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [replace, router, to]);
  return null;
}

export function Outlet() { return null; }
export function BrowserRouter({ children }) { return children; }
export function Routes({ children }) { return children; }
export function Route() { return null; }
