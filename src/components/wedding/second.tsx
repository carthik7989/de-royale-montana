import Image from "next/image";
import { FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps {}

export default function Second({ svgColor = "accent" }: SecondProps){
    return(
        <div className="flex flex-col items-center gap-9 fp">
            {/* Row 1 */}
            <div className="flex flex-col items-center gap-4 font-mona">
                <FloralIcon2 svgColor={svgColor} />
                <h4 className="f-base sm:f-md text-accent font-light text-center">Begin your forever where the hills echo with joy, and every moment feels like a dream.</h4>
                  {/* Divider */}
          <div className="w-full flex flex-col items-center gap-y-3">
          <span className="w-full sm:w-[400px] h-px bg-accent block"></span>
          <span className="w-full sm:w-[400px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="max-w-11/12 flex flex-col items-center text-center gap-9 font-mona  text-text f-sm mlg:f-base lg:f-sm 2xl:f-base">
                
               <p>A wedding is more than a celebration — it's a memory in the making, a story that deserves a setting as timeless as your love. At De Royale Montana, we offer a destination that balances natural grandeur with refined luxury, creating an atmosphere that is as intimate as it is breathtaking.</p>
               <p>With both elegant indoor spaces and sweeping outdoor landscapes, your wedding here is not just an event — it’s an experience woven into nature, comfort, and grace.</p>
            </div>
            {/* End of Row 2 */}
        </div>
    )
}