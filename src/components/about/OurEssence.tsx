export default function OurEssence() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 fp">
            <div className="w-full lg:w-[55%] flex flex-col gap-8 xl:gap-16 ">
                <div className="flex flex-col gap-6">
                    <h3 className="f-md md:f-lg 2xl:f-xl font-beautique font-medium tracking-wide ">Our Essence</h3>
                    <div className="h-0.5 w-[200px] bg-accent"></div>
                </div>

                <div className="flex flex-col gap-8 font-mona f-sm mlg:f-base lg:f-sm 2xl:f-base text-justify ">
                    <p> Every corner of De Royale Montana whispers stories of craftsmanship and care. From handpicked materials in our suites to the flavors served in our kitchen, we believe in curating experiences that are both authentic and indulgent.</p>
                    <p> Here, the line between the indoors and outdoors blurs — as the lush mountainscapes pour into your windows, and the scent of fresh earth mingles with fine linen. It&apos;s not just where you stay; it&apos;s where your soul unwinds.</p>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-[286px] md:h-[373px] lg:h-auto bg-[url('/images/about/essence.webp')] bg-cover bg-center "></div>

        </div>
    );
}