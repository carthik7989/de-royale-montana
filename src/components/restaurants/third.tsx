"use client";

import { useRef } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import Carousel from "../ui/Carousel";
import type { Swiper as SwiperType } from "swiper";

interface RestaurantImage {
  id: number;
  image: string;
}

interface Restaurant {
  id: number;
  tagline: string;
  title: string;
  description: string;
  quote: string;
  images: RestaurantImage[];
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/fine-dining.png" },
      { id: 2, image: "/images/fine-dining.png" },
      { id: 3, image: "/images/fine-dining.png" },
    ],
  },
  {
    id: 2,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/fine-dining.png" },
      { id: 2, image: "/images/fine-dining.png" },
      { id: 3, image: "/images/fine-dining.png" },
    ],
  },
  {
    id: 3,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/fine-dining.png" },
      { id: 2, image: "/images/fine-dining.png" },
      { id: 3, image: "/images/fine-dining.png" },
    ],
  },
];

interface RestaurantRowProps {
  restaurant: Restaurant;
  index: number;
}

const RestaurantRow = ({ restaurant, index }: RestaurantRowProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isEven = index % 2 === 0;

  const contentSection = (
    <div className="w-1/2 flex flex-col justify-center gap-y-16">
      <div className="flex flex-col gap-y-4">
        <h6 className="f-xs mlg:f-sm font-mona font-semibold text-accent uppercase">{restaurant.tagline}</h6>
        <h3 className="f-md md:f-lg 2xl:f-xl font-beautique font-light leading-tight text-secondary">{restaurant.title}</h3>
        <hr className="w-[199px] h-0.5 bg-accent" />
      </div>
      <p className="f-sm mlg:f-base lg:f-sm 2xl:f-base font-mona font-light leading-normal text-secondary text-justify">{restaurant.description}</p>
      <h6 className="f-base font-mona text-accent">{restaurant.quote}</h6>
    </div>
  );

  const carouselSection = (
    <div className="w-1/2 h-[598px] relative">
      <Carousel
        onSwiperInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        showNavigation={false}
        showPagination={false}
        autoplay={true}
        autoplayDelay={4000}
        speed={0.8}
        gap={0}
        slidesPerView={{
          mobile: 1,
          small: 1,
          tablet: 1,
          desktop: 1,
        }}
        className="h-full"
      >
        {restaurant.images.map((image) => (
          <div 
            key={image.id}
            className="w-full h-[598px] bg-cover bg-center"
            style={{ backgroundImage: `url('${image.image}')` }}
          ></div>
        ))}
      </Carousel>
      <div className="absolute inset-0 flex justify-between items-center p-9 pointer-events-none z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer pointer-events-auto"
          aria-label="Previous slide"
        >
          <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer pointer-events-auto"
          aria-label="Next slide"
        >
          <RightArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full flex gap-x-30">
      {isEven ? (
        <>
          {contentSection}
          {carouselSection}
        </>
      ) : (
        <>
          {carouselSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

export default function Third() {
    
    return (
        <div className="flex flex-col fp gap-y-16 bg-primary">
            {restaurants.map((restaurant, index) => (
                <div key={restaurant.id} className="flex flex-col gap-y-16">
                    <RestaurantRow restaurant={restaurant} index={index} />
                    {index < restaurants.length - 1 && (
                        <>
                            {/* Divider */}
                            <div className="w-3/4 mx-auto flex flex-col gap-y-3">
                                <hr className="w-full h-0.5 bg-accent" />
                                <hr className="w-full h-1 bg-accent" />
                            </div>
                            {/* End of Divider */}
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}