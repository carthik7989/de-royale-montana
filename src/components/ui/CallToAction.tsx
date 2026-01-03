import Button, { type ButtonIconColor } from "./Button";
import ScrollZoomImage from "@/components/animations/ScrollZoomImage";
import { FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface CallToActionProps extends SvgColorProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  backgroundImage: string;
  zoomScale?: number;
  buttonBgColor?: string;
  buttonBorderColor?: string;
  buttonTextColor?: string;
  buttonIconColor?: ButtonIconColor;
  showIcon?: boolean;
  dividerColor?: string;
  subtitleColor?: string;
  className?: string;
}

export default function CallToAction({
  title,
  subtitle = "and enjoy",
  buttonText,
  backgroundImage,
  zoomScale = 1.3,
  svgColor = "accent",
  buttonBgColor = "bg-accent",
  buttonBorderColor = "border-accent",
  buttonTextColor = "text-secondary",
  buttonIconColor = "text-accent",
  showIcon = true,
  dividerColor = "bg-accent",
  subtitleColor = "text-accent",
  className = "",
}: CallToActionProps) {
  return (
    <div className={`flex flex-col w-full gap-y-12 gap-x-27 items-center fp bg-secondary ${className}`}>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Column 1 */}
        <div className="w-full lg:w-1/3 3xl:w-[30%] flex flex-col justify-center items-center lg:items-start">
          <h2 
            className="f-xl 2xl:f-xxl font-medium font-beautique leading-tight -tracking-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`f-sm mlg:f-base lg:f-sm 2xl:f-base ${subtitleColor} font-light font-mona`}>{subtitle}</p>
        </div>
        {/* End of Column 1 */}

        {/* Column 2 */}
        <div className="w-full lg:w-1/3 3xl:w-[40%] flex flex-col items-center gap-y-6">
          <FloralIcon2 svgColor={svgColor} />
          <ScrollZoomImage
            zoomScale={zoomScale}
            className="w-full h-[387px] md:h-[513px] 2xl:h-[650px] 3xl:h-[782px]"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
          </ScrollZoomImage>
        </div>
        {/* End of Column 2 */}

        {/* Column 3 */}
        <div className="w-full lg:w-1/3 3xl:w-[30%] flex flex-col justify-center">
          <Button 
            buttonBgColor="bg-secondary"
            borderColor={buttonBorderColor}
            text={buttonText}
            bgColor={buttonBgColor}
            textColor={buttonTextColor}
            showIcon={showIcon}
            iconColor={buttonIconColor}
            className="self-center lg:self-end"
          />
        </div>
        {/* End of Column 3 */}
      </div>

      <div className={`${dividerColor} w-full h-[3px]`}></div>
    </div>
  );
}

