import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadCrumbs from "@/components/wedding/breadcrumbs";
import Fourth from "@/components/wedding/fourth";
import Second from "@/components/wedding/second";
import Third from "@/components/wedding/third";

export default function Wedding() {
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
      <BreadCrumbs/>
      <Second/>
      <Third/>
      <Fourth/>
      </main>
      <Footer />
    </div>
    );
}