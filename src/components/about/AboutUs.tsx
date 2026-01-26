import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps { }

export default function AboutUs({ svgColor = "primary" }: SecondProps) {
    return (
        <section className="flex flex-col items-center gap-8 md:gap-16 fp font-mona ">
            {/* Row 1 */}
            <div className="lg:max-w-5xl flex flex-col items-center justify-center gap-4 ">
                <h6 className="f-sm mlg:f-base text-accent uppercase  font-semibold">About us</h6>
                <QuoteIcon svgColor={svgColor} className="self-start md:ml-20 w-[17%] h-auto sm:w-[13%] lg:w-[10%] xl:w-[8%] 3xl:w-[10%]" />
                <h4 className="md:mt-5 f-base sm:f-md  text-accent text-center  italic font-light">Luxury is not a thing, it&apos;s a feeling — and we make sure you feel it in every moment.</h4>

            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="lg:max-w-[90%] flex flex-col lg:flex-row gap-8 md:gap-16 ">
                <p className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-8 f-sm mlg:f-base lg:f-sm 2xl:f-base  text-justify ">
                    <div>Welcome to De Royale Montana, where sophistication meets serenity, and every stay tells a story. Tucked away in the sacred landscapes of Subramanya, our estate is not merely a destination — it is an experience. Inspired by the untouched beauty of nature and driven by a commitment to excellence, we offer a rare blend of curated luxury, heartfelt hospitality, and tranquil design.</div>
                    <div>Whether you seek a restful escape or a celebratory gathering, De Royale Montana redefines the idea of leisure — with refined interiors, personalized service, and views that take your breath away.</div>
                </p>
                <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[390px] lg:h-auto bg-[url('/images/about/about.webp')] bg-cover bg-center overlay-gradient"></div>
            </div>
            {/* End of Row 2 */}
        </section>
    );
}