import Button from '../ui/Button';
import Image from "next/image";
import Carousel from "../ui/Carousel";

interface Room {
  title: string;
  capacity: string;
  image: string;
}

const rooms: Room[] = [
  {
    title: "Suite Room 1",
    capacity: "2 People",
    image: "/images/fine-dining.png",
  },
  {
    title: "Suite Room 2",
    capacity: "2 People",
    image: "/images/fine-dining.png",
  },
  {
    title: "Suite Room 3",
    capacity: "2 People",
    image: "/images/fine-dining.png",
  },
  {
    title: "Suite Room 4",
    capacity: "2 People",
    image: "/images/fine-dining.png",
  },
];

const RoomCard = ({ room, className = "" }: { room: Room; className?: string }) => (
  <div className={className}>
    <div className="w-full h-[250px] mlg:h-[350px] lg:h-[450px] 2xl:h-[550px] 3xl:h-[720px] bg-cover bg-center relative p-4 mlg:p-6 lg:p-8 2xl:p-10" style={{ backgroundImage: `url(${room.image})` }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      {/* Content */}
      <div className="border border-accent w-full h-full p-4 mlg:p-6 lg:p-8 2xl">
        <div className="flex flex-col items-start justify-end gap-y-6 border border-accent w-full h-full p-4 mlg:p-6 lg:p-8 2xl">
          <h3 className="f-h3 text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">{room.title}</h3>
          <div className="flex justify-start gap-x-6 z-10">
            <Image src="/icons/people.svg" width={24} height={24} alt="People" />
            <h6 className="f-h6 text-accent font-mona uppercase font-semibold">{room.capacity}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Fourth() {
  return (
    <div className='w-full'>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row w-full gap-5 md:gap-10 xl:gap-x-27 xl:gap-y-9 items-center fp bg-secondary">
      {/* Left Side */}
     <div className="w-full md:w-1/2 flex flex-col gap-y-9 md:gap-y-11 xl:gap-y-18 ">
        <h2 className="f-h2 font-beautique text-primary  font-light ">Rooms</h2>
        <div className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15">
          {rooms.slice(0, 2).map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
     </div>
     {/* End of Left Side */}

     {/* Right Side */}
     <div className="w-full md:w-1/2 flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15  ">
        {rooms.slice(2, 4).map((room, index) => (
          <RoomCard key={index + 2} room={room} />
        ))}

        <div className="flex flex-col gap-y-9 ">
          {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[300px] h-px bg-accent block"></span>
          <span className="w-[300px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}

          <h5 className="f-h5 font-mona text-primary font-light">A radiant blend of classic opulence and modern refinement.</h5>
          <Button 
          buttonBgColor="bg-secondary"
           borderColor="border-accent"
            text="All Rooms"
            bgColor="bg-accent"
            textColor="text-secondary"
            showIcon={true}
            iconColor="text-accent"
            className='self-start'
           
          />
        </div>
     </div>
     {/* End of Right Side */}
    </div>
    {/* End of Desktop View */}

    {/* Mobile View */}
    <div className=" md:hidden flex flex-col w-full gap-5 fp bg-secondary">
     
    <h2 className="f-h2 font-beautique text-primary  font-light ">Rooms</h2>
      
      <Carousel
        gap={20}
        speed={0.6}
        showNavigation={true}
        showPagination={false}
        className="w-full"
        slidesPerView={{
          mobile: 1,
          small: 2,
          tablet: 2,
          desktop: 3,
        }}
      >
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </Carousel>
    </div>
    {/* End of Mobile View */}
    </div>
  );
}