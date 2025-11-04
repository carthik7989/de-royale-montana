export default function Seventh() {
  return (
    <div className="flex flex-col lg:flex-row w-full  gap-y-16 gap-x-14 2xl:gap-x-32 3xl:gap-x-50  fp bg-primary">
        {/* Left Side */}
       <div className="w-full lg:w-1/2 h-[490px] md:h-[650px] 3xl:h-[900px] bg-sky-100  bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-8 md:p-10 rounded-t-full overflow-clip">
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
       {/* End of Gradient overlay */}

       {/* Content */}
       <div className="border border-accent w-full h-full p-8 md:p-10 rounded-t-full z-10 relative">
            <div className="flex flex-col  items-center justify-end gap-y-6 border border-accent w-full h-full p-5 md:p-10 rounded-t-full">
              <h3 className="f-h3 text-secondary font-beautique font-medium z-10 ">Dining</h3>
              <span className="h-1 w-20 bg-accent block"></span>
              <p className="f-base text-secondary font-mona text-justify">Savor a curated culinary experience rooted in tradition and taste. At DRM, every meal is a celebration — from handcrafted local delicacies to international favorites, all served with a view that makes every bite memorable.</p>
            </div>
          </div>
          {/* End of Content */}
        
       </div>
       {/* End of Left Side */}


       {/* Right Side */}
       <div className="w-full lg:w-1/2 h-[490px] md:h-[650px] 3xl:h-[900px] bg-sky-100  bg-[url('/images/fine-dining.png')] bg-cover bg-center relative p-8 md:p-10 lg:mt-32 rounded-t-full overflow-clip">
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
       {/* End of Gradient overlay */}

       {/* Content */}
       <div className="border border-accent w-full h-full p-8 md:p-10 rounded-t-full z-10 relative">
            <div className="flex flex-col  items-center justify-end gap-y-6 border border-accent w-full h-full p-5  md:p-10 rounded-t-full">
              <h3 className="f-h3  text-secondary font-beautique font-medium z-10 ">Bar</h3>
              <span className="h-1 w-20 bg-accent block"></span>
              <p className="font-base text-secondary font-mona  text-justify">Raise a glass to elegance at our intimate bar. Whether you&apos;re sipping on classic cocktails or exploring handcrafted blends, our rooftop lounge offers the perfect setting to unwind under the stars.</p>
            </div>
          </div>
          {/* End of Content */}
        
       </div>
       {/* End of Right Side */}
    </div>
  );
}