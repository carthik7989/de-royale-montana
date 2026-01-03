
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Second from "@/components/rooms/second";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import CallToAction from "@/components/ui/CallToAction";

export default function Rooms() {
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
      <BreadCrumbs title="Rooms & Suites" backgroundImage="/images/fine-dining.png" />
      <Second/>
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
    )
}