import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Second from "@/components/explore/second";
import Third from "@/components/explore/third";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Eighth from "@/components/home/eighth";

export default function Explore()
{
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
      <BreadCrumbs title="Nearby Attractions" backgroundImage="/images/fine-dining.png" />
      <Second/>
      <Third/>
      <Eighth/>
      </main>
      <Footer />
    </div>
    );
}