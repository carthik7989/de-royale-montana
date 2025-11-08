import FloralIcon2 from "@/components/icons/FloralIcon2";

export default function Sixth(){
    return(
        <div className="flex flex-col items-center gap-16 p-16 ">
            {/* Row 1 */}
            <div className="flex flex-col items-center gap-9">
            <h3 className=" text-accent font-medium font-beautique leading-tight -tracking-1">Our People</h3>
              {/* Divider */}
          <div className="flex flex-col items-center gap-y-3">
          <span className="w-[400px] h-px bg-accent block"></span>
          <span className="w-[400px] h-1 bg-accent block"></span>
          </div>   
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col items-center gap-9 font-mona">
                <h4 className=" text-text font-light italic">“ Hospitality begins with heart. ” </h4>
                <p className="lg:max-w-4xltext-xl font-light text-center">At De Royale Montana, our team is not just trained — they are cultivated. Every member embodies the spirit of refined hospitality — warm, poised, and always present. Whether it’s a thoughtful gesture or an unspoken need met, our people are the soul of our promise.</p>
            </div>
            {/* End of Row 2 */}

            {/* Row 3 */}
            <div className="flex flex-col items-center gap-9 font-mona">
                <FloralIcon2  svgColor="accent" />
                <h4 className=" text-center text-text font-light">De Royale Montana is more than a destination. It’s a retreat for those who seek the rare and the real.</h4>
                <h6 className=" text-accent uppercase font-semibold">Welcome to your sanctuary — where luxury breathes, and nature listens.</h6>
            </div>
            {/* End of Row 3 */}


        </div>
    );
}