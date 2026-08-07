import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Introduction from "@/components/sections/introduction/Introduction";
import FeaturedExperience from "@/components/sections/featuredExperience/FeaturedExperience";
import SignaturePrograms from "@/components/sections/signaturePrograms/SignaturePrograms";
import GymFamily from "@/components/sections/gymFamily/GymFamily";
import GymEquipement from "@/components/sections/gymGallery/GymEquipment";
import Menifesto from "@/components/sections/menifesto/Menifesto";
import GymServices from "@/components/sections/services/GymServices";
import CoachesSection from "@/components/sections/coaches/CoachesSection";
import TransformationStories from "@/components/sections/transformationStories/TransformationStories";
import PricingSection from "@/components/sections/pricing/PricingSection";
import CurrentOffers from "@/components/sections/offers/CurrentOffers";
import MachinesSection from "@/components/sections/machines/MachinesSection";
import YoutubeGallery from "@/components/sections/youtube/YoutubeGallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <YoutubeGallery />
      <Stats />
      <Introduction />
      <FeaturedExperience />
      <GymEquipement />
      {/* <SignaturePrograms /> */}
      <GymServices />
      <CoachesSection />
      <TransformationStories />
      <PricingSection />
      <CurrentOffers />

      {/* <MachinesSection /> */}

      {/* <GymFamily /> */}
      <Menifesto />
    </main>
  );
}
