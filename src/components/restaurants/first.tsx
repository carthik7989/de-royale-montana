"use client";

import { useRef } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import Carousel from "../ui/Carousel";
import type { Swiper as SwiperType } from "swiper";

interface RestaurantImage {
  id: number;
  image: string;
}

const restaurantImages: RestaurantImage[] = [
  {
    id: 1,
    image: "/images/fine-dining.png",
  },
  {
    id: 2,
    image: "/images/fine-dining.png",
  },
  {
    id: 3,
    image: "/images/fine-dining.png",
  },
];

export default function First() {
    const swiperRef = useRef<SwiperType | null>(null);
   
    return (
        <div className="flex flex-col gap-y-26 bg-primary fbpy fpx items-center">
            <div className="flex flex-col gap-y-4 items-center">
            <h6 className="f-xs mlg:f-sm text-accent font-mona uppercase font-semibold">Dine at Montana</h6>
            {/* Content */}
      <div className="relative flex flex-col mlg:flex-row justify-center gap-6">
        {/* Divider */}
        <div className="w-full sm:w-25  mlg:flex flex-col flex-shrink justify-center gap-1 sm:gap-2 3xl:gap-3 hidden">
          <div className="h-0.5 bg-accent"></div>
          <div className="h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
        <h2 className="flex-1 sm:flex-0 f-xl md:f-xxl 2xl:f-xxxl font-beautique font-medium text-secondary text-center whitespace-nowrap leading-none ">
          Restaurants
        </h2>
        {/* Divider */}
        <div className="w-full sm:w-25  mlg:flex flex-col flex-shrink justify-center gap-1 sm:gap-2 3xl:gap-3 hidden">
          <div className="h-0.5 bg-accent"></div>
          <div className="h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
      </div>
      {/* End of Content */}
            </div>

           <div className="flex w-full items-center gap-12">
           <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer flex-shrink-0 hidden lg:flex"
                aria-label="Previous slide"
            >
                <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
            <div className="flex-1 min-w-0 w-full overflow-hidden">
            <Carousel
              onSwiperInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              showNavigation={false}
              showPagination={true}
              autoplay={true}
              autoplayDelay={4000}
              speed={0.8}
              gap={20}
              slidesPerView={{
                mobile: 1,
                small: 1,
                tablet: 1,
                desktop: 1,
              }}
              className="w-full"
            >
              {restaurantImages.map((restaurant) => (
                <div 
                  key={restaurant.id}
                  className="w-full h-[696px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${restaurant.image}')` }}
                ></div>
              ))}
            </Carousel>
            </div>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer flex-shrink-0 hidden lg:flex"
                aria-label="Next slide"
            >
                <RightArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
           </div>
    </div>
  );
}