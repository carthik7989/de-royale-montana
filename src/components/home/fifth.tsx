"use client";

import Button from "../ui/Button";
import InfiniteHorizontalScroll from "@/components/ui/InfiniteHorizontalScroll";

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
      className="relative flex flex-col justify-end items-start h-[380px] md:h-[500px] 3xl:h-[600px] p-5 md:p-9 bg-cover bg-center overflow-hidden flex-shrink-0 w-[250px] md:w-[330px] lg:w-[400px] 3xl:w-[520px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      {/* End of Gradient overlay */}

      {/* Content */}
      <div className="relative w-full h-full flex items-end justify-start">
        <h4 className="f-h4 text-secondary leading-relaxed font-mona font-light pl-5 md:pl:8 border-l-8 border-accent absolute bottom-0 left-10 md:left-15 origin-bottom-left transform -rotate-90 whitespace-nowrap">
          {title}
        </h4>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full gap-y-16 gap-x-27 items-center fp bg-primary">
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex flex-col gap-y-6">
          <h4 className="f-h4 font-mona font-light text-accent">What Makes Your Stay</h4>
          <h3 className="f-h3 font-beautique font-medium text-secondary">Extraordinary</h3>
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
      <InfiniteHorizontalScroll
        duration={20}
        gapClassName="gap-6 md:gap-10"
        minItems={3}
      >
        <Card title="Bachanayaka Temple" bgImage="/images/fine-dining.png" />
        <Card title="Kukke Subramanya Temple" bgImage="/images/fine-dining.png" />
        <Card title="Patla Betta" bgImage="/images/fine-dining.png" />
      </InfiniteHorizontalScroll>
    </div>
  );
}