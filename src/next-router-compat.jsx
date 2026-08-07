"use client";

import NextLink from "next/link";
import { useParams as useNextParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export function Link({ to, children, ...props }) {
  return <NextLink href={to} {...props}>{children}</NextLink>;
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString();
  return { pathname, search: search ? `?${search}` : "", hash: "", state: null, key: "next" };
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
  if (typeof window !== "undefined") {
    queueMicrotask(() => replace ? router.replace(to) : router.push(to));
  }
  return null;
}

export function Outlet() { return null; }
export function BrowserRouter({ children }) { return children; }
export function Routes({ children }) { return children; }
export function Route() { return null; }
