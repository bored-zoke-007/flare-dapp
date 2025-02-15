import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import NewsSection from "@/components/sections/news";
import HeroSection from "@/components/sections/hero";
import ExpoSection from "@/components/sections/expo";
import GrantsSection from "@/components/sections/grants";
import UtilitySection from "@/components/sections/utility";
import CommunitySection from "@/components/sections/community";
import EcosystemSection from "@/components/sections/ecosystem";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ExpoSection />
      <EcosystemSection />
      <UtilitySection />
      <NewsSection />
      <GrantsSection />
      <CommunitySection />
      <Footer />
    </>
  );
}
