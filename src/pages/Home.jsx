import { T } from "@/site/theme";
import CinematicHero from "@/site/phase7/CinematicHero";
import TransformationStory from "@/site/phase7/TransformationStory";
import ProductShowcase from "@/site/phase7/ProductShowcase";
import FahimExperience from "@/site/phase7/FahimExperience";
import InteractiveEcosystem from "@/site/phase7/InteractiveEcosystem";
import ArchitectureStage from "@/site/phase7/ArchitectureStage";
import GlobalPresence from "@/site/phase7/GlobalPresence";
import ClientSuccessStories from "@/site/phase7/ClientSuccessStories";
import LatestInsights from "@/site/phase6/LatestInsights";
import FinalEnterpriseCTA from "@/site/phase6/FinalEnterpriseCTA";

export default function Home() {
  return (
    <div style={{ background: T.bg, color: T.text }} className="overflow-x-clip font-archivo">
      <CinematicHero />
      <TransformationStory />
      <div className="defer-render"><ProductShowcase /></div>
      <div className="defer-render"><FahimExperience /></div>
      <div className="defer-render"><InteractiveEcosystem /></div>
      <div className="defer-render"><ArchitectureStage /></div>
      <div className="defer-render"><GlobalPresence /></div>
      <div className="defer-render"><ClientSuccessStories /></div>
      <div className="defer-render"><LatestInsights /></div>
      <div className="defer-render"><FinalEnterpriseCTA /></div>
    </div>
  );
}
