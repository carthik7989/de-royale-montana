import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Second from "@/components/explore/second";
import Third from "@/components/explore/third";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import CallToAction from "@/components/ui/CallToAction";

export default function Explore()
{
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
      <BreadCrumbs title="Nearby Attractions" backgroundImage="/images/fine-dining.png" />
      <Second/>
      <Third/>
      <CallToAction
      title="Book your <br class='hidden lg:block'/>stay with us"
      subtitle="and enjoy"
      buttonText="Book your stay"
      backgroundImage="/images/fine-dining.png"
      svgColor="accent"
    />
      </main>
      <Footer />
    </div>
    );
}