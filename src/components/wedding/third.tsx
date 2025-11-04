import Image from "next/image";
export default function Third(){
    return(
        <div className="flex flex-col gap-24 fp">
             {/* Row 1 left */}
             <div className="flex gap-14">
                <div className="w-[40%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient rounded-t-full p-10 overflow-hidden  ">
                <div className="w-full h-full flex items-end p-10 border border-accent rounded-t-full z-10 ">
                <div className="w-full flex flex-col items-center  gap-y-6 z-10">
                        <h3 className="font-beautique text-center text-secondary">The Banquet Hall</h3>
                        <span className="w-[80px] h-1 bg-accent block"></span>
                    </div>
                </div>
                </div>
                <div className="w-[60%] flex flex-col gap-32 ">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                        <div className="flex flex-col gap-y-4 border-l-4 border-accent pl-6">
                        <div className=" text-5xl text-text   z-10 ">Indoor Celebrations in Grand Style</div>
                        <div className="flex justify-start gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" className="" />
                <h6 className="text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
                        </div>
                   
                    <p className="text-accent text-justify">Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.</p>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col gap-y-4 items-center">
                        <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                        <h5 className="text-accent font-mona text-center">A space where tradition meets modern elegance, and every detail speaks of grace.</h5>
                        </div>
                    
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
            </div>
            {/* End of Row 1 left */}


             {/* Row 1 Right */}
             <div className="flex gap-14">
                
                <div className="w-[60%] flex flex-col gap-32 ">
                    {/* Inner Row 1 */}
                    <div className="flex flex-col gap-9 font-mona font-light">
                        <div className="flex flex-col items-end gap-y-4 border-r-4 border-accent pr-6">
                        <div className=" text-5xl text-text z-10 ">Outdoor Vows Under Open Skies</div>
                        <div className="flex justify-end gap-x-6 z-10">
                <Image src="/icons/people.svg" width={24} height={24} alt="People" className="" />
                <h6 className="text-accent font-mona  uppercase font-semibold">2 People</h6>
              </div>
                        </div>
                   
                    <p className="text-accent text-justify ">Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.</p>
                    </div>
                    {/*End of Inner Row 1 */}

                    {/* Inner Row 2 */}
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col gap-y-4 items-center">
                        <Image src="/icons/floral-design2.svg" width={145} height={36} alt="floral-design" className="w-[145px]" />
                        <h5 className="text-accent font-mona text-center">A space where tradition meets modern elegance, and every detail speaks of grace.</h5>
                        </div>
                    
                    <div className="w-full grid grid-cols-3 gap-8">
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                        <div className="relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient w-full h-[214px]"></div>
                    </div>
                    </div>
                    {/* End of Inner Row 2 */}

                </div>
                <div className="w-[40%]  relative bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient rounded-t-full p-10 overflow-hidden  ">
                <div className="w-full h-full flex items-end p-10 border border-accent rounded-t-full z-10 ">
                    <div className="w-full flex flex-col items-center  gap-y-6 z-10">
                        <h3 className="font-beautique text-center text-secondary ">The Lawn</h3>
                        <span className="w-[80px] h-1 bg-accent block"></span>
                    </div>
                </div>
                </div>
            </div>
            {/* End of Row 1 Right */}
        </div>
    )
}