import BreadCrumbs from "@/components/about/BreadCrumbs";
import AboutUs from "@/components/about/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurEssence from "@/components/about/OurEssence";
import OurPeople from "@/components/about/OurPeople";
import OurVision from "@/components/about/OurVision";
import Testimonials from "@/components/about/Testimonials";



export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
        <BreadCrumbs />
        <AboutUs />
        <OurVision />
        <OurEssence />
        <Testimonials />
        <OurPeople />
      </main>
      <Footer />
    </div>
  );
}