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
import Eighth from '@/components/home/eighth';


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
       <Eighth/>
      </main>
      <Footer />
     </div>
   
  );
}
