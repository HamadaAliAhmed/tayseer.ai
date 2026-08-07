import { Suspense, lazy } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/site/Layout";
import PageStub from "@/site/PageStub";
// Home is the initial route (LCP-critical) — keep it eager. Everything else
// is code-split so it doesn't inflate the bundle React must parse/execute
// before the first paint of "/".
import Home from "@/pages/Home";
const Solutions = lazy(() => import("@/pages/Solutions"));
const CoreBanking = lazy(() => import("@/pages/CoreBanking"));
const FahimAI = lazy(() => import("@/pages/FahimAI"));
const MBuke = lazy(() => import("@/pages/MBuke"));
const ManagedServices = lazy(() => import("@/pages/ManagedServices"));
const BankingSystems = lazy(() => import("@/pages/BankingSystems"));
const SoftwareManagementSystems = lazy(() => import("@/pages/SoftwareManagementSystems"));
const About = lazy(() => import("@/pages/About"));
const Connect = lazy(() => import("@/pages/Connect"));
const Careers = lazy(() => import("@/pages/Careers"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogArticle = lazy(() => import("@/pages/BlogArticle"));
const Privacy = lazy(() => import("@/pages/Legal").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("@/pages/Legal").then((m) => ({ default: m.Terms })));
const IconPreview = lazy(() => import("@/preview/IconPreview"));

// Direction B locked. Full 15-section route skeleton — real content added page-by-page.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/preview/icons" element={<IconPreview />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/core-banking" element={<CoreBanking />} />
              <Route path="/solutions/fahim-ai" element={<FahimAI />} />
              <Route path="/solutions/mbuke" element={<MBuke />} />
              <Route path="/solutions/managed-services" element={<ManagedServices />} />
              <Route path="/solutions/banking-systems" element={<BankingSystems />} />
              <Route path="/solutions/software-management-systems" element={<SoftwareManagementSystems />} />
              <Route path="/about" element={<About />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<PageStub index="404" title="Not Found" />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
