import Image from "next/image";
import Button from "../ui/Button";

export default function Eighth() {
  return (
    <div className="flex flex-col w-full gap-y-12 gap-x-27 items-center fp bg-secondary">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Column 1 */}
        <div className="w-full lg:w-1/3 3xl:w-[30%] flex flex-col justify-center items-center lg:items-start">
        <h2 className="f-h2 font-medium font-beautique leading-tight -tracking-1">Book your <br className="hidden lg:block"/>stay with us</h2>
        <p className="f-base text-accent font-light font-mona">and enjoy</p>
        </div>
        {/* End of Column 1 */}

        {/* Column 2 */}
        <div className="w-full lg:w-1/3 3xl:w-[40%] flex flex-col items-center gap-y-6">
        <Image src="/images/floral-design.svg" width={243.97} height={69.1} alt="floral-design" className="w-[162px] md:w-[181px] 3xl:w-[243.97]" />
        <div className="w-full h-[387px] md:h-[513px] 2xl:h-[650px] 3xl:h-[782px] bg-[url('/images/fine-dining.png')] bg-cover bg-center"></div>
        </div>
        {/* End of Column 2 */}

        {/* Column 3 */}
        <div className="w-full lg:w-1/3 3xl:w-[30%] flex flex-col justify-center ">
        <Button 
          buttonBgColor="bg-secondary"
           borderColor="border-accent"
            text="Book your stay"
            bgColor="bg-accent"
            textColor="text-secondary"
            showIcon={true}
            iconColor="text-accent"
            className='self-center lg:self-end'
           
          />
        </div>
        {/* End of Column 3 */}
      </div>

      <div className="bg-accent w-full h-[3px] "></div>
    </div>
  );
}