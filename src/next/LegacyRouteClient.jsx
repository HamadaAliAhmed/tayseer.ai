"use client";

import About from "@/pages/About";
import Connect from "@/pages/Connect";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import { Privacy, Terms } from "@/pages/Legal";
import PageStub from "@/site/PageStub";

const staticRoutes = {
  "/about": About,
  "/connect": Connect,
  "/careers": Careers,
  "/blog": Blog,
  "/privacy": Privacy,
  "/terms": Terms,
};

export default function LegacyRouteClient({ pathname }) {
  if (pathname.startsWith("/blog/") && pathname !== "/blog") return <BlogArticle />;
  const Component = staticRoutes[pathname];
  if (!Component) return <PageStub index="404" title="Not Found" />;
  return <Component />;
}
