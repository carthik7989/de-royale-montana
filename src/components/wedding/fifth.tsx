import { SvgColorProps } from "@/utils/svgColor";
import FloralIcon from "../icons/FloralIcon";


export default function Fifth({ svgColor = "secondary" }: SvgColorProps) {
    return (
        <div className="flex flex-col items-center gap-4 bg-accent fp font-mona text-secondary">
            <FloralIcon svgColor={svgColor} />
<h4 className="f-base mlg:f-md 3xl:f-lg text-center">Your love story deserves a setting as beautiful as your bond.</h4>
        <div className="w-full flex justify-center items-center gap-8">
            <div className="min-w-[50px] max-w-[236px] flex-grow h-px bg-secondary"></div>
            <p className="f-sm mlg:f-base lg:f-sm 2xl:f-base text-center flex-shrink-1">Let De Royale Montana be the beginning of your forever</p>
            <div className="min-w-[50px] max-w-[236px] flex-grow h-px bg-secondary"></div>
        </div>
        </div>
    )
}