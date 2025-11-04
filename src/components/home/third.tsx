import Image from "next/image";

export default function Third() {
  return (
    <div className="flex flex-col w-full gap-y-9 items-center fp bg-primary">

<div className="flex flex-col gap-y-4 w-full md:w-11/12 lg:w-9/12 xl:w-3/5 3xl:w-1/2 lg:-mt-20 sm:order-2">
            <h3 className="text-accent f-h3  font-beautique font-light leading-relaxed text-center ">A Sanctuary of Luxury <br></br>and Peace</h3>
            <p className="text-secondary f-base font-mona font-light leading-normal text-center">  A boutique retreat nestled in the heart of the Western Ghats, where luxury meets tranquility. Surrounded by lush greenery and sacred hills, our resort offers more than just a stay — it&apos;s an escape into serene landscapes, thoughtful comforts, and warm hospitality. Whether you&apos;re here for spiritual solace or mountain air, every moment is designed to relax, rejuvenate, and reconnect. </p>
        </div>
        {/* Beyond Limits */}
        <div className="h-[304px] 3xl:h-[400px] w-[246px] 3xl:w-[330px] bg-[url('/images/beyond-limits.png')] bg-cover bg-center relative sm:self-end sm:order-1">
            <h4 className="f-h4 -rotate-90 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-secondary text-nowrap uppercase font-mona font-light">Beyond Limits</h4>
        </div>
        {/* End of Beyond Limits */}


        <Image src="/images/sanctuary.png" width={687} height={489} alt="Sanctuary" className="sm:mt-15 w-full lg:w-[551px] md:w-[400px] 3xl:w-[687px] h-[271px] lg:h-[392px] md:h-[258px] 3xl:h-[489px] sm:order-4" />

       

         {/* Beyond Limits */}
         <div className="h-[184px] 3xl:h-[250px] w-[246px] 3xl:w-[334px] bg-[url('/images/true-perfection.png')] bg-cover bg-center relative sm:self-start sm:order-3">
            <h4 className="f-h4 absolute bottom-0 left-0 translate-x-1/4 3xl:translate-x-1/2 translate-y-1/2  text-secondary  text-nowrap  font-mona font-light">True Perfection</h4>
        </div>
        {/* End of Beyond Limits */}

       
    </div>
  );
}