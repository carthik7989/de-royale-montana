"use client";

import Image from "next/image";
import InfiniteHorizontalScroll from "@/components/animations/InfiniteHorizontalScroll";

export default function Second() {
  // Card component for reusability
  const Card = ({ 
    title, 
    bgImage = "/images/fine-dining.png" 
  }: { 
    title: string; 
    bgImage?: string;
  }) => (
    <div 
      className="relative flex flex-col justify-end items-center h-[240px] lg:h-[350px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent flex-shrink-0 w-[200px] lg:w-[357px] 3xl:w-[510px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary font-mona font-light">
        <div className="h-0.5 w-[150px] bg-accent"></div>
        <h6 className="f-h6">{title}</h6>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-y-9 items-center fp bg-primary">
      <div className="flex flex-col items-center gap-y-4">
        <Image src="/icons/resort.svg" width={72} height={72} alt="Resort" />
        <h6 className="f-h6 text-secondary uppercase font-mona font-light">Our Resort</h6>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center">
        <h3 className="f-h3 text-secondary font-beautique font-light leading-snug">Escape to a mountain retreat where sacred tranquility meets luxurious indulgence.</h3>
        <p className="w-full lg:w-11/12 xl:w-4/5 text-accent f-base font-mona font-light leading-normal">Tucked away in the heart of the Western Ghats, De Royale Montana offers a harmonious blend of divine serenity, scenic beauty, and boutique elegance — all crowned with warm, heartfelt hospitality.</p>
      </div>
      
      {/* Horizontal scrolling container */}
      <InfiniteHorizontalScroll
        duration={20}
        gapClassName="gap-6 md:gap-7 2xl:gap-16"
        minItems={3}
      >
        <Card 
          title="Fine dining" 
          bgImage="/images/fine-dining.png" 
        />
        <Card 
          title="Private Cottages" 
          bgImage="/images/fine-dining.png" 
        />
        <Card 
          title="Scenic Adventures" 
          bgImage="/images/fine-dining.png" 
        />
      </InfiniteHorizontalScroll>
    </div>
  );
}