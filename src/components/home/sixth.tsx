export default function Sixth() {
  return (
    <div className="relative flex flex-col  w-full items-start fpl fpy bg-[url('/images/fine-dining.png')] bg-cover bg-center overflow-hidden">
        {/*  overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {/* End of  overlay */}

      {/* Content  */}
      <div className="relative z-10 flex flex-col w-full h-full gap-y-14 md:gap-y-18 2xl:gap-y-24 3xl:gap-y-27">
      <h3 className="f-h3 font-beautique font-medium text-secondary">Your stay at Terrace includes:</h3>

      <div className="flex w-full h-full gap-x-10 md:gap-x-16 justify-start items-center uppercase ">
        {/* Fitness Center*/}
        <div className="h-[264px] 2xl:h-[425px] 3xl:h-[480px] w-[155px] 2xl:w-[250px] 3xl:w-[380px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative shrink-0 ">
            <h4 className="f-h4 -rotate-90 absolute bottom-5 left-5 origin-bottom-left text-secondary whitespace-nowrap  font-mona font-light">Fitness Center</h4>
        </div>
        {/* End of Fitness Center */}

        {/* Beyond Limits */}
        <div className="h-[250px] 2xl:h-[250px] 3xl:h-[311px] w-[395px] 2xl:w-[425px] 3xl:w-[529px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative shrink-0 ">
            <h4 className="f-h4 absolute bottom-0 left-5 origin-bottom-left translate-y-1/2  text-secondary text-nowrap  font-mona font-light">Room Service</h4>
        </div>
        {/* End of Beyond Limits */}

         {/* Fitness Center*/}
         <div className="h-[264px] 2xl:h-[425px] 3xl:h-[480px] w-[155px] 2xl:w-[250px] 3xl:w-[380px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative shrink-0 ">
            <h4 className="f-h4 -rotate-90 absolute bottom-5 left-5 origin-bottom-left text-secondary whitespace-nowrap  font-mona font-light">Fitness Center</h4>
        </div>
        {/* End of Fitness Center */}

 {/* Beyond Limits */}
 <div className="h-[250px] 2xl:h-[250px] 3xl:h-[311px] w-[395px] 2xl:w-[425px] 3xl:w-[529px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative shrink-0 ">
            <h4 className=" f-h4 absolute bottom-0 left-5 origin-bottom-left translate-y-1/2  text-secondary text-nowrap  font-mona font-light">Room Service</h4>
        </div>
        {/* End of Beyond Limits */}
        
      </div>
      </div>
      {/* End of Content  */}
    </div>
  );
}