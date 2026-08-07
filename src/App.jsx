import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/site/Layout";
import PageStub from "@/site/PageStub";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import CoreBanking from "@/pages/CoreBanking";
import FahimAI from "@/pages/FahimAI";
import MBuke from "@/pages/MBuke";
import ManagedServices from "@/pages/ManagedServices";
import BankingSystems from "@/pages/BankingSystems";
import SoftwareManagementSystems from "@/pages/SoftwareManagementSystems";
import About from "@/pages/About";
import Connect from "@/pages/Connect";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import { Privacy, Terms } from "@/pages/Legal";
import IconPreview from "@/preview/IconPreview";

// Direction B locked. Full 15-section route skeleton — real content added page-by-page.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
