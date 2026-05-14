import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import AboutHero from "./AboutHero";
import FloorsSection from "./FloorsSection";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#FFFDF6] to-white text-[#1A1A2E]">
      <SiteNav />
      <main>
        <AboutHero />

        <div className="gold-divider" />

        <FloorsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
