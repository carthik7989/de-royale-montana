import Button from '../ui/Button';
import Image from "next/image";

export default function Fourth() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10 xl:gap-x-27 xl:gap-y-9 items-center fp bg-secondary">
      {/* Left Side */}
     <div className="w-full md:w-1/2 flex flex-col gap-y-9 md:gap-y-11 xl:gap-y-18 ">
        <h2 className="f-h2 font-beautique text-primary  font-light ">Rooms</h2>
        <div className="flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15">
       

        {/* Each Room */}
        <div>
            <div className="w-full h-[550px]  3xl:h-[720px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <h3 className="f-h3 text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</h3>
              <div className="flex justify-start gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" />
                <h6 className="f-h6 text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}
         {/* Each Room */}
         <div>
            <div className="w-full h-[550px] 3xl:h-[720px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <h3 className="f-h3 text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</h3>
              <div className="flex justify-start gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" />
                <h6 className="f-h6 text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}
        </div>
     </div>
     {/* End of Left Side */}

     {/* Right Side */}
     <div className="w-full md:w-1/2 flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-15  ">
      {/* Each Room */}
      <div>
            <div className="w-full h-[550px] 3xl:h-[720px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <h3 className="f-h3 text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</h3>
              <div className="flex justify-start gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" />
                <h6 className="f-h6 text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}

         {/* Each Room */}
         <div>
            <div className="w-full h-[550px] 3xl:h-[720px] bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-10">
             {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          {/* Content */}
          <div className="border border-accent w-full h-full p-10">
            <div className="flex flex-col  items-start justify-end gap-y-6 border border-accent w-full h-full p-10">
              <h3 className=" f-h3 text-secondary font-beautique font-medium z-10 border-l-4 border-accent pl-6">Suite Room</h3>
              <div className="flex justify-start gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" />
                <h6 className="f-h6 text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* End of Each Room */}

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
  );
}