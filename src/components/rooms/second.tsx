import PeopleIcon from "../icons/PeopleIcon";
import Button from "../ui/Button";

interface Room {
  id: number;
  tagline: string;
  title: string;
  capacity: string;
  description: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    tagline: "Secluded comfort, surrounded by nature.",
    title: "Cottage Room",
    capacity: "2 People",
    description: "Our Cottages offer a peaceful stay amidst lush greenery, blending rustic charm with refined comfort. Ideal for couples or families, each cottage is thoughtfully designed with spacious interiors, modern amenities, and calming views — perfect for those seeking privacy, space, and a closer connection to nature.",
    image: "/images/fine-dining.png",
  },
  {
    id: 2,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/fine-dining.png",
  },
  {
    id: 3,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/fine-dining.png",
  },
  {
    id: 4,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/fine-dining.png",
  },
  {
    id: 5,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/fine-dining.png",
  },
];

interface RoomCardProps {
  room: Room;
  index: number;
  svgColor?: string;
}

const RoomCard = ({ room, index, svgColor = "accent" }: RoomCardProps) => {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-secondary" : "bg-primary";
  const textColor = isEven ? "text-text" : "text-secondary";
  const buttonBgColor = isEven ? "bg-secondary" : "bg-primary";
  const flexDirection = isEven ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row";
  const contentAlignment = isEven ? "lg:items-start" : "lg:items-end";

  const contentSection = (
    <div className={`w-full lg:w-1/2 flex flex-col ${contentAlignment} fp gap-6 2xl:gap-9 ${bgColor}`}>
      <h6 className="f-xs mlg:f-sm text-accent font-mona uppercase font-semibold">{room.tagline}</h6>
      <h3 className={`f-md mlg:f-lg 2xl:f-xl font-beautique ${textColor} font-medium`}>{room.title}</h3>
      <div className="flex justify-start gap-x-6 z-10">
        <PeopleIcon svgColor={svgColor} width={24} height={24} />
        <h6 className="f-sm 2xl:f-base text-accent font-mona uppercase font-semibold">{room.capacity}</h6>
      </div>
      <p className={`f-sm mlg:f-base lg:f-sm 2xl:f-base ${textColor} font-mona text-justify`}>{room.description}</p>
      <Button 
        buttonBgColor={buttonBgColor}
        borderColor="border-accent"
        text="Book Now"
        bgColor="bg-accent"
        textColor="text-secondary"
        showIcon={true}
        iconColor="text-accent"
        className="self-start"
      />
    </div>
  );

  const imageSection = (
    <div 
      className="w-full lg:w-1/2 h-[300px] lg:h-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${room.image})` }}
    ></div>
  );

  return (
    <div className={`flex ${flexDirection}`}>
      {isEven ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

export default function Second() {
  const svgColor = "accent";
  
  return (
    <div className="flex flex-col fpt lg:pt-0">
      {rooms.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} svgColor={svgColor} />
      ))}
    </div>
  );
}