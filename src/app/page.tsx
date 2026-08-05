import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Introduction from "@/components/sections/introduction/Introduction";
import FeaturedExperience from "@/components/sections/featuredExperience/FeaturedExperience";
import SignaturePrograms from "@/components/sections/signaturePrograms/SignaturePrograms";
import GymFamily from "@/components/sections/gymFamily/GymFamily";
import GymGallery from "@/components/sections/gymGallery/GymGallery";
import StoriesThatInspires from "@/components/sections/storiesThatInspires/StoriesThatInspires";
import Menifesto from "@/components/sections/menifesto/Menifesto";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <FeaturedExperience />
      <SignaturePrograms />
      <GymFamily />
      <GymGallery />
      <StoriesThatInspires />
      <Menifesto />
    </main>
  );
}
