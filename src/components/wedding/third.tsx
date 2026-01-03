"use client";

import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import { FloralIcon, PeopleIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface WeddingSpace {
  id: number;
  name: string;
  title: string;
  capacity: number;
  description: string;
  quote: string;
  alignment: "left" | "right";
  mainImage: string;
  galleryImages: string[];
}

const weddingSpaces: WeddingSpace[] = [
  {
    id: 1,
    name: "The Banquet Hall",
    title: "Indoor Celebrations in Grand Style",
    capacity: 2,
    description:
      "Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.",
    quote:
      "A space where tradition meets modern elegance, and every detail speaks of grace.",
    alignment: "left",
    mainImage: "/images/fine-dining.png",
    galleryImages: [
      "/images/fine-dining.png",
      "/images/fine-dining.png",
      "/images/fine-dining.png",
    ],
  },
  {
    id: 2,
    name: "The Lawn",
    title: "Outdoor Vows Under Open Skies",
    capacity: 2,
    description:
      "Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.",
    quote:
      "A space where tradition meets modern elegance, and every detail speaks of grace.",
    alignment: "right",
    mainImage: "/images/fine-dining.png",
    galleryImages: [
      "/images/fine-dining.png",
      "/images/fine-dining.png",
      "/images/fine-dining.png",
    ],
  },
];

interface WeddingSpaceCardProps extends SvgColorProps {
  space: WeddingSpace;
}

function WeddingSpaceCard({ space, svgColor = "accent" }: WeddingSpaceCardProps) {
  const isLeft = space.alignment === "left";

  const ImageCard = () => (
    <div className="w-full lg:w-[40%]  flex justify-center">
    <div
      className="w-full sm:w-[458px] lg:w-full h-[385px] sm:h-[450px] lg:h-auto  relative bg-cover bg-center overlay-gradient rounded-t-full p-10 overflow-hidden"
      style={{ backgroundImage: `url('${space.mainImage}')` }}
    >
      <div className="w-full h-full flex items-end p-10 border border-accent rounded-t-full z-10">
        <div className="w-full flex flex-col items-center gap-y-6 z-10">
          <h3 className="f-md md:f-lg 2xl:f-xl font-beautique text-center text-secondary">
            {space.name}
          </h3>
          <span className="w-[80px] h-1 bg-accent block"></span>
        </div>
      </div>
    </div>
    </div>
  );

  const ContentSection = () => (
    <div className="w-full lg:w-[60%] flex flex-col gap-8 lg:gap-16 2xl:gap-32">
      {/* Inner Row 1 */}
      <div className="flex flex-col gap-4 lg:gap-9 font-mona font-light">
        <div
          className={`flex flex-col gap-y-4 ${
            isLeft
              ? "border-l-4 border-accent pl-6"
              : "items-start lg:items-end border-l-4 lg:border-l-0 lg:border-r-4 border-accent pl-6 lg:pl-0 lg:pr-6"
          }`}
        >
          <h4 className="f-base sm:f-md text-text z-10">{space.title}</h4>
          <div
            className={`flex gap-x-6 z-10 justify-start ${
              isLeft ? "" : "lg:justify-end"
            }`}
          >
            <PeopleIcon svgColor={svgColor} width={24} height={24} />
            <h6 className="f-xs mlg:f-sm  text-accent font-mona uppercase font-semibold">
              {space.capacity} People
            </h6>
          </div>
        </div>

        <p className="f-sm mlg:f-base lg:f-sm 2xl:f-base text-accent text-justify">{space.description}</p>
      </div>
      {/* End of Inner Row 1 */}

      {/* Inner Row 2 */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-y-4 items-center">
          <FloralIcon svgColor={svgColor} className="" />
          <h5 className="f-sm mlg:f-base 2xl:f-md text-accent font-mona text-center">{space.quote}</h5>
        </div>

        {/* Mobile Carousel */}
        <div className="w-full md:hidden">
          <Carousel
            showNavigation={false}
            showPagination={true}
            autoplay={false}
            gap={32}
            slidesPerView={{
              small: 2,
              mobile: 1,
            }}
          >
            {space.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center overlay-gradient w-full h-[214px]"
                style={{ backgroundImage: `url('${image}')` }}
              ></div>
            ))}
          </Carousel>
        </div>
        {/* Desktop Grid */}
        <div className="w-full hidden md:grid grid-cols-3 gap-8">
          {space.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center overlay-gradient w-full h-[214px]"
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
          ))}
        </div>
      </div>
      {/* End of Inner Row 2 */}
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-14 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <ImageCard />
      <ContentSection />
    </div>
  );
}

interface ThirdProps extends SvgColorProps {}

export default function Third({ svgColor = "accent" }: ThirdProps) {
  return (
    <div className="flex flex-col  gap-12 md:gap-16 2xl:gap-24 fpx lg:fpy">
      {weddingSpaces.map((space) => (
        <WeddingSpaceCard key={space.id} space={space} svgColor={svgColor} />
      ))}
    </div>
  );
}
