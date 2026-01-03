import Image from "next/image";

export default function Second() {
  return (
    <div className="flex flex-col w-full gap-y-9 items-center fp bg-primary">


        {/* Global Flavors */}
        <div className="h-[304px] 3xl:h-[520px] w-[246px] 3xl:w-[406px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative sm:self-end ">
            <h4 className="f-md -rotate-90 absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 text-secondary text-nowrap uppercase font-mona font-light">GLOBAL FLAOVRS</h4>
        </div>
        {/* End of Global Flavors */}

        <div className="flex flex-col gap-y-4 w-full md:w-11/12 lg:w-9/12 xl:w-3/5 3xl:w-1/2 lg:-mt-20 ">
            <h3 className="text-accent f-md md:f-lg 2xl:f-xxl font-beautique font-light leading-tight text-center ">Flavours that <br/> comfort, spaces that<br/> welcome.</h3>
           
        </div>
        

         {/* South Indian */}
         <div className="h-[184px] 3xl:h-[341px] w-[246px] 3xl:w-[541px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative sm:self-start ">
            <h4 className="f-md  absolute bottom-0 right-0 translate-x-1/4 3xl:-translate-x-1/12 translate-y-1/2  text-secondary  text-nowrap uppercase font-mona font-light">SOUTH INDIAN</h4>
        </div>
        {/* End of South Indian */}

        <p className="mt-22 text-accent f-sm mlg:f-base lg:f-sm 2xl:f-base font-mona font-light leading-normal text-center">  A boutique retreat nestled in the heart of the Western Ghats, where luxury meets tranquility. Surrounded by lush greenery and sacred hills, our resort offers more than just a stay — it&apos;s an escape into serene landscapes, thoughtful comforts, and warm hospitality. Whether you&apos;re here for spiritual solace or mountain air, every moment is designed to relax, rejuvenate, and reconnect. </p>

       
    </div>
  );
}