import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Menifesto from "@/components/sections/menifesto/Menifesto";
import Story from "@/components/sections/story/Story";
import TransformationStories from "@/components/sections/transformationStories/TransformationStories";
import StoriesThatInspires from "@/components/sections/storiesThatInspires/StoriesThatInspires";
import CustomerReview from "@/components/sections/customerReview/CustomerReview";
import Faq from "@/components/sections/faq/Faq";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menifesto />
      <Story />
      <TransformationStories />
      <StoriesThatInspires />
      <CustomerReview />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
