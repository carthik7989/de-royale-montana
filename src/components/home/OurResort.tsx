"use client";

import Carousel from "@/components/ui/Carousel";
import { ResortIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps { }

export default function OurResort({ svgColor = "accent" }: SecondProps) {
  // Card component for reusability
  const Card = ({
    title,
    bgImage = "/images/home/fine-dining.webp"
  }: {
    title: string;
    bgImage?: string;
  }) => (
    <div
      className="relative flex flex-col justify-end items-center h-[240px] lg:h-[240px] xl:h-[300px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent shrink-0 w-full group hover:cursor-pointer overflow-hidden" >

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black"></div>
      {/* Content */}
      <div className="relative w-full z-10 flex flex-col items-center gap-y-4 2xl:gap-y-6 text-ivory font-mona font-light">
        <div className="h-px w-[30%] 3xl:w-[25%] mlg:w- bg-accent"></div>
        <h6 className="f-base ">{title}</h6>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-16 items-center fp bg-primary">
      <div className="flex flex-col gap-y-4 xl:gap-y-6 3xl:gap-y-8 items-center">
        <div className="flex flex-col items-center gap-y-4">
          <ResortIcon className="w-[60%] h-auto 2xl:w-[55%] 3xl:w-[72px] 3xl:h-[72px]" svgColor={svgColor} />
          <h6 className="f-sm 2xl:f-base text-ivory uppercase font-mona font-light">Our Resort</h6>
        </div>
        <div className="flex flex-col items-center gap-y-4 text-center">
          <h3 className="w-full mlg:max-w-9/10 sm:max-w-9/11 xl:max-w-8/11 3xl:max-w-9/11 f-md md:f-lg 3xl:f-xl text-ivory font-beautique font-regular tracking-wider leading-snug ">Escape to a mountain retreat where sacred tranquility meets luxurious indulgence.</h3>
          <p className="w-full lg:w-11/12 xl:w-4/6 text-accent f-sm mlg:f-base xl:f-sm 2xl:f-base  font-mona font-light leading-normal">Tucked away in the heart of the Western Ghats, De Royale Montana offers a harmonious blend of divine serenity, scenic beauty, and boutique elegance — all crowned with warm, heartfelt hospitality.</p>
        </div>
      </div>


      {/* Horizontal scrolling container */}
      <div className="w-full">
        <Carousel
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          autoplayDelay={3000}
          speed={0.8}
          loop={true}
          gap={32}
          slidesPerView={{
            mobile: 1,
            small: 2,
            tablet: 2,
            desktop: 3,
          }}
        >
          <Card
            title="Fine dining"
            bgImage="/images/home/fine-dining.webp"
          />
          <Card
            title="Private Cottages"
            bgImage="/images/home/private-cottage.webp"
          />
          <Card
            title="Scenic Adventures"
            bgImage="/images/home/scenic-adventures.webp"
          />
        </Carousel>
      </div>
    </div>
  );
}