import Image from "next/image";
export default function Fourth(){
    return(
        <div className="flex flex-col items-center gap-9 fp">
        {/* Row 1 */}
        <div className="flex flex-col items-center gap-4 font-mona">
            <Image src="/images/floral-design.svg" alt="Floral Design" width={181.26} height={54.72} />
            <h5 className="text-accent font-light">Crafting Your Dream Wedding</h5>
              {/* Divider */}
      <div className="flex flex-col gap-y-3">
      <span className="w-[800px] h-px bg-accent block"></span>
      <span className="w-[800px] h-1 bg-accent block"></span>
      </div>
      {/* End of Divider */}
        </div>
        {/* End of Row 1 */}

        {/* Row 2 */}
        <div className="max-w-11/12 flex flex-col items-center text-center gap-9 font-mona  text-text">
            
           <p>From the first welcome to the final farewell, our team is devoted to bringing your vision to life. With luxurious guest accommodations, gourmet in-house catering, decor tailored to your theme, and seamless event coordination, we offer a full-service wedding experience — elegant, effortless, and unforgettable.</p>
           
        </div>
        {/* End of Row 2 */}
    </div>
    );
}