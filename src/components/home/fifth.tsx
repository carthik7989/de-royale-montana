"use client";

import Button from "../ui/Button";
import Carousel from "@/components/ui/Carousel";

export default function Fifth() {
  // Card component for temple/place cards
  const Card = ({
    title,
    bgImage = "/images/fine-dining.png",
  }: {
    title: string;
    bgImage?: string;
  }) => (
    <div
      className="relative flex flex-col justify-end items-start h-[380px] md:h-[500px] 3xl:h-[600px] p-5 md:p-9 bg-cover bg-center overflow-hidden flex-shrink-0 w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      {/* End of Gradient overlay */}

      {/* Content */}
      <div className="relative w-full h-full flex items-end justify-start">
        <h4 className="f-md text-secondary leading-relaxed font-mona font-light pl-5 md:pl:8 border-l-8 border-accent absolute bottom-0 left-10 md:left-15 origin-bottom-left transform -rotate-90 whitespace-nowrap">
          {title}
        </h4>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full gap-y-16 gap-x-27 items-center fp bg-primary">
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex flex-col gap-y-6">
          <h4 className="f-md font-mona font-light text-accent">What Makes Your Stay</h4>
          <h2 className="f-xl  2xl:f-xxl font-beautique font-medium text-secondary">Extraordinary</h2>
        </div>

        <Button
          buttonBgColor="bg-primary"
          borderColor="border-secondary"
          text="View All"
          bgColor="bg-secondary"
          textColor="text-primary"
          showIcon={true}
          iconColor="text-secondary"
          className="self-start hidden md:flex"
        />
      </div>

      {/* Horizontal scrolling container */}
      <div className="w-full">
        <Carousel
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          autoplayDelay={3000}
          speed={0.8}
          gap={24}
          slidesPerView={{
            mobile: 1,
            small: 2,
            tablet: 2,
            desktop: 3,
          }}
        >
          <Card title="Bachanayaka Temple" bgImage="/images/fine-dining.png" />
          <Card title="Kukke Subramanya Temple" bgImage="/images/fine-dining.png" />
          <Card title="Patla Betta" bgImage="/images/fine-dining.png" />
        </Carousel>
      </div>
    </div>
  );
}