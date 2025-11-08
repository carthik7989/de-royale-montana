"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/hero';
import Second from '@/components/home/second';
import Third from '@/components/home/third';
import Fourth from '@/components/home/fourth';
import Fifth from '@/components/home/fifth';
import Sixth from '@/components/home/sixth';
import Seventh from '@/components/home/seventh';
import CallToAction from '@/components/ui/CallToAction';


export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col">
     
     <Header />
      <main className="">
       <Hero />
       <Second/>
       <Third/>
       <Fourth/>
       <Fifth/>
       <Sixth/>
       <Seventh/>
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
