import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps {}

export default function Second({ svgColor = "primary" }: SecondProps)
{
    return(
        <section className="flex flex-col items-center gap-16 p-16 font-mona ">
            {/* Row 1 */}
            <div className="lg:max-w-5xl flex flex-col items-center justify-center gap-4">
                <div className="text-accent uppercase text-base font-semibold">About us</div>
                <QuoteIcon svgColor={svgColor} className="self-start ml-20" />
                <div className="mt-5  text-accent text-center text-4xl italic font-light">Luxury is not a thing, it&apos;s a feeling — and we make sure you feel it in every moment.</div>
            
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="lg:max-w-[90%] flex gap-16 ">
                <div className="w-[40%] flex flex-col gap-8 text-xl text-justify ">
                    <div>Welcome to De Royale Montana, where sophistication meets serenity, and every stay tells a story. Tucked away in the sacred landscapes of Subramanya, our estate is not merely a destination — it is an experience. Inspired by the untouched beauty of nature and driven by a commitment to excellence, we offer a rare blend of curated luxury, heartfelt hospitality, and tranquil design.</div>
                    <div>Whether you seek a restful escape or a celebratory gathering, De Royale Montana redefines the idea of leisure — with refined interiors, personalized service, and views that take your breath away.</div>
                </div>
                <div className="relative w-[60%] bg-[url('/images/fine-dining.png')] bg-cover bg-center overlay-gradient"></div>
            </div>
            {/* End of Row 2 */}
        </section>
    );
}