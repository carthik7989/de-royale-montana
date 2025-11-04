import Image from "next/image";

export default function Second(){
    return(
        <div className="flex flex-col items-center gap-9 fp">
            {/* Row 1 */}
            <div className="flex flex-col items-center gap-4 font-mona">
                <Image src="/images/floral-design.svg" alt="Floral Design" width={181.26} height={54.72} />
                <h5 className="text-accent font-light">Begin your forever where the hills echo with joy, and every moment feels like a dream.</h5>
                  {/* Divider */}
          <div className="flex flex-col gap-y-3">
          <span className="w-[400px] h-px bg-accent block"></span>
          <span className="w-[400px] h-1 bg-accent block"></span>
          </div>
          {/* End of Divider */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="max-w-11/12 flex flex-col items-center text-center gap-9 font-mona  text-text">
                
               <p>A wedding is more than a celebration — it's a memory in the making, a story that deserves a setting as timeless as your love. At De Royale Montana, we offer a destination that balances natural grandeur with refined luxury, creating an atmosphere that is as intimate as it is breathtaking.</p>
               <p>With both elegant indoor spaces and sweeping outdoor landscapes, your wedding here is not just an event — it’s an experience woven into nature, comfort, and grace.</p>
            </div>
            {/* End of Row 2 */}
        </div>
    )
}