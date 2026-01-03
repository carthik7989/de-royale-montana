import Footer from "@/components/Footer";
import Header from "@/components/Header";
import First from "@/components/restaurants/first";
import Second from "@/components/restaurants/second";
import Third from "@/components/restaurants/third";
import Fourth from "@/components/restaurants/fourth";

export default function Restaurants() {
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
    <First/>
    <Second/>
    <Third/>
    <Fourth/>
      </main>
      <Footer />
    </div>
    );
}