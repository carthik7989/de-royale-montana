import Image from "next/image";

export default function Second() {
  return (
    <div className=" flex flex-col gap-y-9 items-center fp bg-primary">

      <div className="flex flex-col items-center gap-y-4">
        <Image src="/icons/resort.svg" width={72} height={72} alt="Resort" />
        <h6 className="f-h6 text-secondary  uppercase font-mona font-light">Our Resort</h6>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center">
        <h3 className="f-h3 text-secondary font-beautique font-light leading-snug">Escape to a mountain retreat where sacred tranquility meets luxurious indulgence.</h3>
        <p className="w-full lg:w-11/12 xl:w-4/5 text-accent f-base font-mona font-light leading-normal">Tucked away in the heart of the Western Ghats, De Royale Montana offers a harmonious blend of divine serenity, scenic beauty, and boutique elegance — all crowned with warm, heartfelt hospitality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr w-full gap-6 md:gap-7 2xl:gap-16">  
        {/* First Card */}
        <div className="relative flex flex-col justify-end items-center h-[240px] lg:h-[350px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary  font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <h6 className="f-h6">Fine dining</h6>
            
          </div>
        </div>
        {/* End of First Card */}
     
        {/* Second Card */}
        <div className="relative flex flex-col justify-end items-center  h-[240px] lg:h-[350px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary  font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <h6 className="f-h6">Private Cottages</h6>
            
          </div>
        </div>
        {/* End of Second Card */}
     
        {/* Third Card */}
        <div className="relative flex flex-col justify-end items-center h-[240px] lg:h-[350px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent bg-[url('/images/fine-dining.png')]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-6 text-secondary  font-mona font-light ">
            <div className="h-0.5 w-[150px] bg-accent"></div>
            <h6 className="f-h6">Scenic Adventures</h6>
            
          </div>
        </div>
        {/* End of Third Card */}
     
        
      
      </div>
    </div>
  );
}