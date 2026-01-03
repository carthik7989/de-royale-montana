import Image from "next/image";
import { SvgColorProps } from "@/utils/svgColor";
import { WeddingIcon } from "@/components/icons";

export default function Fourth({ svgColor = "accent" }: SvgColorProps) {
    return(
        <div className="flex flex-col items-center gap-9 fp">
        {/* Row 1 */}
        <div className="w-full flex flex-col  items-center gap-4 font-mona">
        <WeddingIcon svgColor={svgColor} />
            <h4 className="f-base mlg:f-md md:f-lg text-accent font-light">Crafting Your Dream Wedding</h4>
              {/* Divider */}
      <div className="w-full flex flex-col items-center gap-y-3">
      <span className="w-full lg:w-[800px] h-px bg-accent block"></span>
      <span className="w-full lg:w-[800px] h-1 bg-accent block"></span>
      </div>
      {/* End of Divider */}
        </div>
        {/* End of Row 1 */}

        {/* Row 2 */}
        <div className="max-w-11/12 flex flex-col items-center text-center gap-9 font-mona f-sm mlg:f-base lg:f-sm 2xl:f-base text-text">
            
           <p>From the first welcome to the final farewell, our team is devoted to bringing your vision to life. With luxurious guest accommodations, gourmet in-house catering, decor tailored to your theme, and seamless event coordination, we offer a full-service wedding experience — elegant, effortless, and unforgettable.</p>
           
        </div>
        {/* End of Row 2 */}
    </div>
    );
}