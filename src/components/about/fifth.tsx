"use client";

import { useRef } from "react";
import { QuoteIcon, LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import Carousel from "@/components/ui/Carousel";
import type { Swiper as SwiperType } from "swiper";

interface Testimonial {
    id: number;
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem Ipsum"
    },
    {
        id: 2,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem Ipsum"
    },
    {
        id: 3,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe"
    },
    {
        id: 4,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Jane Smith"
    }
];

interface TestimonialCardProps extends SvgColorProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial, svgColor = "primary" }: TestimonialCardProps) => (
    <div className="flex flex-col gap-9">
        {/* First Row */}
        <div className="flex flex-col gap-9 bg-secondary p-9">
            {/* Inner First Row */}
            <div className="flex flex-col gap-6">
                <QuoteIcon svgColor={svgColor} className="max-w-[80px]" />
                <p className="f-sm mlg:f-base lg:f-sm 2xl:f-base text-text font-light">{testimonial.quote}</p>
            </div>
            {/* End of Inner First Row */}

            {/* Inner Second Row */}
            <div className="flex gap-9 items-center">
                <h6 className="f-sm mlg:f-base whitespace-nowrap uppercase text-accent ">{testimonial.author}</h6>
                <div className="h-0.5 bg-accent w-full"></div>
            </div>
            {/* End of Inner Second Row */}
        </div>
        {/* End of First Row */}

        {/* Second Row */}
        <div className="flex flex-col items-center gap-y-3">
            <div className="w-[90%] h-px bg-secondary"></div>
            <div className="w-[90%] h-1 bg-secondary"></div>
        </div>
        {/* End of Second Row */}
    </div>
);

interface FifthProps extends SvgColorProps {}

export default function Fifth({ svgColor = "primary" }: FifthProps)
{
    const swiperRef = useRef<SwiperType | null>(null);

    return(
        <div className="flex items-center gap-10 2xl:gap-31 fp bg-accent font-mona">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer flex-shrink-0 hidden lg:flex"
                aria-label="Previous testimonial"
            >
                <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
            <div className="flex-1 min-w-0 overflow-hidden">
                <Carousel
                    onSwiperInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    showNavigation={false}
                    showPagination={false}
                    autoplay={true}
                    gap={36}
                    slidesPerView={{
                        mobile: 1,
                        small: 1,
                        tablet: 2,
                        desktop: 2
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard 
                            key={testimonial.id} 
                            testimonial={testimonial} 
                            svgColor={svgColor} 
                        />
                    ))}
                </Carousel>
            </div>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer flex-shrink-0 hidden lg:flex"
                aria-label="Next testimonial"
            >
                <RightArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
        </div>
    );
}