import BreadCrumbs from "@/components/about/breadcrumbs";
import Fifth from "@/components/about/fifth";
import Fourth from "@/components/about/fourth";
import Second from "@/components/about/second";
import Sixth from "@/components/about/sixth";
import Third from "@/components/about/third";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Explore()
{
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
      <BreadCrumbs/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      </main>
      <Footer />
    </div>
    );
}