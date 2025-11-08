import Image from "next/image";

export default function Third()
{
    return(
        <section className="flex flex-col gap-16 p-16 bg-primary text-secondary font-light">
            {/* Row 1 */}
            <div className="flex flex-col gap-9">
                {/* Inner Row 1 */}
                <div className="flex gap-29">
                    <div className="w-[60%] flex flex-col gap-16 ">
                        <div className="flex flex-col gap-6">
                        <h3 className="font-beautique font-medium tracking-wide ">Our Vision</h3>
                        <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <p className="font-mona text-justify ">
                        To be South India&apos;s most cherished luxury escape, seamlessly blending regal comfort with the untamed beauty of the Ghats — where guests rediscover what it means to truly relax, reconnect, and rejuvenate.
                        </p>
                    </div>
                    <div className="w-[40%] bg-[url('/images/fine-dining.png')] bg-cover bg-center "></div>

                </div>
                {/* End of Inner Row 1 */}

                <div className="h-0.5 w-full bg-accent"></div>

                {/* Inner Row 1 */}
                <div className="flex gap-29">
                <div className="w-[40%] bg-[url('/images/fine-dining.png')] bg-cover bg-center "></div>
                    <div className="w-[60%] flex flex-col items-end gap-16 ">
                        <div className="flex flex-col items-end gap-6">
                        <h3 className="font-beautique font-medium tracking-wide">Our Mission</h3>
                        <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <p className="font-mona text-justify">
                        We strive to go beyond service — we create memories, relationships, and experiences that leave a mark. With personalized attention, bespoke offerings, and an ethos of excellence.
                        </p>
                    </div>
                    

                </div>
                {/* End of Inner Row 1 */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col gap-9 items-center">
                {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[400px] h-px bg-accent block"></span>
          <span className="w-[400px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}

          <div className="flex flex-col items-center gap-4">
          <h6 className="text-accent uppercase font-semibold">our mission is simple</h6>
          <h4 className=" text-center italic font-light">&quot;To make every guest feel like royalty — naturally.&quot;</h4>
          
          </div>
          <Image className="w-[910px] h-[558px] object-cover object-center" src="/images/fine-dining.png" alt="" width={910} height={558} />
            </div>
            {/* End of Row 2 */}
        </section>
    );
}