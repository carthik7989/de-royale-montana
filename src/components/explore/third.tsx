"use client";

import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import { FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface Attraction {
  id: number;
  title: string;
  description: string;
  alignment: "left" | "right";
  mainImage: string;
  galleryImages: string[];
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Kukke Subrahmanya Temple",
    description: "A renowned pilgrimage site dedicated to Lord Subrahmanya, this sacred temple is just minutes away. Known for its spiritual ambiance and rituals, it draws thousands of devotees year-round.",
    alignment: "left",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 2,
    title: "Pushpagiri / Kumara Parvatha",
    description: "A favorite among trekkers, this trail is as rewarding as it is challenging. Experience dense forests, panoramic ridge walks, and a summit that feels like touching the clouds.",
    alignment: "right",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 3,
    title: "Patla Betta",
    description: "A lesser-known gem offering breathtaking views and a quiet escape into nature. Perfect for a short hike or picnic amidst rolling hills.",
    alignment: "left",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 4,
    title: "Bisle Ghat",
    description: "Often called the 'heaven on the Western Ghats', Bisle Ghat is a biodiversity hotspot. Enjoy dense jungles, waterfalls, and the thrill of nature at its rawest.",
    alignment: "right",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 5,
    title: "Mankanahalli Ridge Point",
    description: "This scenic viewpoint offers a sweeping panorama of the surrounding valleys and peaks. A beautiful spot for photography, sunrise, or quiet contemplation.",
    alignment: "left",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 6,
    title: "Mallalli Falls",
    description: "One of the most stunning waterfalls in Karnataka, Mallalli Falls gushes down from the Kumaradhara River. Best visited during or post-monsoon for full flow and dramatic views.",
    alignment: "right",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 7,
    title: "Bildwara Cave",
    description: "A mysterious cave temple believed to be steeped in history and spiritual energy. Ideal for a quiet visit and a touch of the mystical.",
    alignment: "left",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
  {
    id: 8,
    title: "Sakleshpur",
    description: "A quaint hill town surrounded by plantations, historic forts, and charming trails. A perfect day-trip destination filled with greenery and old-world charm.",
    alignment: "right",
    mainImage: "/images/fine-dining.png",
    galleryImages: ["/images/fine-dining.png", "/images/fine-dining.png", "/images/fine-dining.png"],
  },
];

interface AttractionCardProps {
  attraction: Attraction;
}

function AttractionCard({ attraction }: AttractionCardProps) {
  const isLeft = attraction.alignment === "left";

  const ImageDiv = () => (
    <div
      className="w-full lg:w-[30%] h-[385px] lg:h-auto relative bg-cover bg-center overlay-gradient"
      style={{ backgroundImage: `url('${attraction.mainImage}')` }}
    ></div>
  );

  const ContentDiv = () => (
    <div className="w-full lg:w-[70%] flex flex-col gap-8 lg:gap-20 py-0 lg:py-12">
      {/* Inner Row 1 */}
      <div
        className={`flex flex-col gap-4 lg:gap-9 font-mona font-light ${
          isLeft ? "" : "items-start lg:items-end"
        }`}
      >
        <h4
          className={`f-base sm:f-md text-text z-10 ${
            isLeft
              ? "border-l-4 border-accent pl-6"
              : "border-l-4 lg:border-l-0 lg:border-r-4 border-accent pl-6 lg:pl-0 lg:pr-6"
          }`}
        >
          {attraction.title}
        </h4>
        <p
          className={`f-sm mlg:f-base lg:f-sm 2xl:f-base text-accent text-left ${
            isLeft ? "" : "lg:text-right"
          }`}
        >
          {attraction.description}
        </p>
      </div>
      {/* End of Inner Row 1 */}

      {/* Inner Row 2 */}
      <div className="flex flex-col items-center gap-10">
        <Image
          src="/icons/floral-design2.svg"
          width={145}
          height={36}
          alt="floral-design"
          className="w-[145px]"
        />
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
            {attraction.galleryImages.map((image, index) => (
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
          {attraction.galleryImages.map((image, index) => (
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
      className={`flex gap-9 ${
        isLeft
          ? "flex-col lg:flex-row "
          : "flex-col-reverse lg:flex-row "
      }`}
    >
      {isLeft ? (
        <>
          <ImageDiv />
          <ContentDiv />
        </>
      ) : (
        <>
          <ContentDiv />
          <ImageDiv />
        </>
      )}
    </div>
  );
}

interface ThirdProps extends SvgColorProps {}

export default function Third({ svgColor = "accent" }: ThirdProps) {
  return (
    <div className="flex flex-col gap-12 fp">
      {/* Row 1 */}
      <div className="flex flex-col items-center gap-6">
      <FloralIcon2 svgColor={svgColor} />
        <h3 className="f-md md:f-lg 2xl:f-xl text-accent font-medium font-beautique leading-tight -tracking-1">
          Top Nearby Attractions
        </h3>
        {/* Divider */}
        <div className="w-full flex flex-col items-center gap-y-3">
          <span className="w-full sm:w-[400px] h-px bg-accent block"></span>
          <span className="w-full sm:w-[400px] h-1 bg-accent block"></span>
        </div>
        {/* End of Divider */}
      </div>
      {/* End of Row 1 */}

      {/* Attractions */}
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
}
