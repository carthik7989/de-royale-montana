import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps {}

export default function Second({ svgColor = "primary" }: SecondProps)
{
    return(
        <section className="flex flex-col items-center gap-16 fp font-mona ">
            {/* Row 1 */}
            <div className="lg:max-w-5xl flex flex-col items-center justify-center gap-4">
                <h6 className="f-sm mlg:f-base text-accent uppercase  font-semibold">About us</h6>
                <QuoteIcon svgColor={svgColor} className="self-start ml-20" />
                <h4 className="mt-5 f-base sm:f-md  text-accent text-center  italic font-light">Luxury is not a thing, it&apos;s a feeling — and we make sure you feel it in every moment.</h4>
            
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="lg:max-w-[90%] flex flex-col lg:flex-row gap-16 ">
                <p className="w-full lg:w-[40%] flex flex-col gap-8 f-sm mlg:f-base lg:f-sm 2xl:f-base  text-justify ">
                    <div>Welcome to De Royale Montana, where sophistication meets serenity, and every stay tells a story. Tucked away in the sacred landscapes of Subramanya, our estate is not merely a destination — it is an experience. Inspired by the untouched beauty of nature and driven by a commitment to excellence, we offer a rare blend of curated luxury, heartfelt hospitality, and tranquil design.</div>
                    <div>Whether you seek a restful escape or a celebratory gathering, De Royale Montana redefines the idea of leisure — with refined interiors, personalized service, and views that take your breath away.</div>
                </p>
                <div className="relative w-full lg:w-[60%] h-[385px] md:h-[390px] lg:h-auto bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient"></div>
            </div>
            {/* End of Row 2 */}
        </section>
    );
}