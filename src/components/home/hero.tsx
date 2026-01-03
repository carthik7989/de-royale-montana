import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className=" relative overflow-hidden flex flex-col items-center fp pt-32 md:pt-46 xl:pt-56 3xl:pt-65">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hotel-background.mp4" type="video/mp4" />
        <source src="/videos/hotel-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-end relative z-10 text-center text-secondary gap-y-24 lg:gap-y-28 xl:gap-y-32 2xl:gap-y-52 3xl:gap-y-82  w-full ">
        <h1 className="f-xl md:f-xxl 2xl:f-xxxl font-bold mb-6 font-beautique tracking-wider">Paradise of Serenity</h1>

        <div className="flex flex-col items-center gap-y-8 w-full">
        {/* <button className="flex items-center gap-5 bg-primary/70 backdrop-blur-lg rounded-full pr-7">
            <div className="uppercase bg-secondary text-primary rounded-full px-14 py-6">Book Now</div>
            <Image src="/icons/Arrow.svg" width={16} height={16} alt="Arrow Right" />
        </button> */}
        <Button 
          buttonBgColor="bg-primary/70"
           borderColor="border-none"
            text="Book Now"
            bgColor="bg-secondary"
            textColor="text-primary"
            showIcon={true}
            iconColor="text-secondary"
            className='backdrop-blur-lg'
           
          />

        <span className="p-3 xl:p-4 3xl:p-5 pb-10 xl:pb-12 3xl:pb-17 rounded-full bg-primary/70 backdrop-blur-lg">
            <span className="w-1.5 xl:w-2 3xl:w-2.5 h-1.5 xl:h-2 3xl:h-2.5 bg-secondary rounded-full block"></span>
        </span>
        <div className="h-0.5 w-full bg-secondary "></div>
        
        </div>
        
      </div>
    </div>
  );
}