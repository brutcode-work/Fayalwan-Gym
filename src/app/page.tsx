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
import MachinesSection from "@/components/sections/machines/MachinesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Introduction />
      <FeaturedExperience />
      <GymEquipement />
      {/* <SignaturePrograms /> */}
      <GymServices />
      <CoachesSection />
      <TransformationStories />
      {/* <MachinesSection /> */}

      {/* <GymFamily /> */}
      <Menifesto />
    </main>
  );
}
