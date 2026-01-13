import { useState } from 'react';
import Button from '../ui/Button';
import Image from "next/image";
import Carousel from "../ui/Carousel";
import { PeopleIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import type { Swiper as SwiperType } from "swiper";

interface Room {
  title: string;
  capacity: string;
  image: string;
}

const rooms: Room[] = [
  {
    title: "Cottage Room",
    capacity: "2 People",
    image: "/images/home/cottage-room.webp",
  },
  {
    title: "Deluxe Room",
    capacity: "2 People",
    image: "/images/home/deluxe-room.webp",
  },
  {
    title: "Suite Room",
    capacity: "2 People",
    image: "/images/home/suite-room.webp",
  },
  {
    title: "Standard Room",
    capacity: "2 People",
    image: "/images/home/deluxe-room.webp",
  },
];

interface RoomCardProps extends SvgColorProps {
  room: Room;
  className?: string;
}

const RoomCard = ({ room, className = "", svgColor = "secondary" }: RoomCardProps) => (
  <div className={`${className} group hover:cursor-pointer overflow-hidden relative w-full h-[250px] mlg:h-[350px] lg:h-[450px] 2xl:h-[550px] 3xl:h-[720px]`}>
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
      style={{ backgroundImage: `url('${room.image}')` }}
    ></div>

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black pointer-events-none"></div>

    {/* Content */}
    <div className="relative h-full w-full p-4 mlg:p-6 lg:p-8 3xl:p-12 z-10 flex flex-col items-stretch">
      <div className="border border-accent/50 w-full h-full p-4 mlg:p-6 lg:p-8 3xl:p-12">
        <div className="flex flex-col items-start justify-end gap-y-6 border border-accent/50 w-full h-full p-4 mlg:p-6 lg:p-8 3xl:p-12">
          <h3 className="f-md mlg:f-lg sm:f-md xl:f-lg 3xl:f-xl text-ivory font-beautique font-regular tracking-wider z-10 border-l-4 border-accent pl-6">{room.title}</h3>
          <div className="flex justify-start gap-x-6 z-10">
            <PeopleIcon svgColor={svgColor} width={24} height={24} />
            <h6 className="f-sm 3xl:f-base text-accent font-mona uppercase font-semibold">{room.capacity}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface RoomProps extends SvgColorProps { }

export default function Rooms({ svgColor = "secondary" }: RoomProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className='w-full'>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row w-full gap-5 md:gap-10 xl:gap-x-27 xl:gap-y-9 items-center fp bg-secondary">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-9 md:gap-y-11 xl:gap-y-18 ">
          <h2 className="f-lg md:f-xl 2xl:f-2xl font-beautique text-primary tracking-wider font-regular ">Rooms</h2>
          <div className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15">
            {rooms.slice(0, 2).map((room, index) => (
              <RoomCard key={index} room={room} svgColor={svgColor} />
            ))}
          </div>
        </div>
        {/* End of Left Side */}

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15  ">
          {rooms.slice(2, 4).map((room, index) => (
            <RoomCard key={index + 2} room={room} svgColor={svgColor} />
          ))}

          <div className="flex flex-col gap-y-9 ">
            {/* Divider */}
            <div className="flex flex-col gap-y-3">
              <span className="w-[300px] h-px bg-accent block"></span>
              <span className="w-[300px] h-1 bg-accent block"></span>
            </div>
            {/* End of Divider */}

            <h5 className="f-base 3xl:f-md font-mona text-primary font-light">A radiant blend of classic opulence and modern refinement.</h5>
            <Button
              buttonBgColor="bg-secondary"
              borderColor="border-accent"
              text="All Rooms"
              bgColor="bg-accent"
              textColor="text-secondary"
              showIcon={true}
              iconClassName="fill-accent"
              className='self-start'

            />
          </div>
        </div>
        {/* End of Right Side */}
      </div>
      {/* End of Desktop View */}

      {/* Mobile View */}
      <div className=" md:hidden flex flex-col w-full gap-5 fp bg-secondary">

        <div className='flex justify-between'>
          <h2 className="f-xl font-beautique text-primary  font-light ">Rooms</h2>
          {/* Custom Navigation */}
          <div className='flex gap-x-3 items-center'>
            {/* Left Arrow */}
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-10 h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* End of Left Arrow */}

            {/* Right Arrow */}
            <button
              onClick={() => swiper?.slideNext()}
              className="w-10 h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* End of Right Arrow */}
          </div>
          {/* End of Custom Navigation */}
        </div>

        <Carousel
          gap={20}
          speed={0.6}
          showNavigation={false}
          showPagination={false}
          onSwiperInit={(s) => setSwiper(s)}
          className="w-full"
          slidesPerView={{
            mobile: 1,
            small: 2,
            tablet: 2,
            desktop: 3,
          }}
        >
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} svgColor={svgColor} />
          ))}
        </Carousel>

        <div className="flex flex-col gap-y-7 mt-5 ">
          {/* Divider */}
          <div className="flex flex-col gap-y-3">
            <span className="w-full h-px bg-accent block"></span>
            <span className="w-full h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}

          <h5 className="f-base 2xl:f-md font-mona text-center text-primary font-light">A radiant blend of classic opulence and modern refinement.</h5>
          <Button
            buttonBgColor="bg-secondary"
            borderColor="border-accent"
            text="All Rooms"
            bgColor="bg-accent"
            textColor="text-secondary"
            showIcon={true}
            iconClassName="fill-accent"
            className='self-center'

          />
        </div>
      </div>
      {/* End of Mobile View */}
    </div>
  );
}