export default function BreadCrumbs(){
    return(
        <div className="relative fpx fbpy bg-[url('/images/fine-dining.png')] bg-cover bg-center ">
            {/*  overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* End of  overlay */}

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center gap-0 text-center">
        <h2 className="f-md sm:f-lg 2xl:f-xl 3xl:f-xxl font-beautique font-medium text-secondary">In the heart of the Western Ghats,</h2>
            <div className="w-full flex items-center justify-center gap-6">
                {/* Divider */}
        <div className="w-full mlg:flex flex-col  gap-1 sm:gap-2 3xl:gap-3 hidden">
            <div className=" h-0.5 bg-accent"></div>
            <div className=" h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
            <h2 className="f-md sm:f-lg 2xl:f-xl 3xl:f-xxl font-beautique font-medium text-secondary mlg:whitespace-nowrap">We didn’t just build a retreat</h2>
             {/* Divider */}
        <div className="w-full mlg:flex flex-col  gap-1 sm:gap-2 3xl:gap-3 hidden">
            <div className=" h-0.5 bg-accent"></div>
            <div className=" h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
            </div>
            <h2 className="f-md sm:f-lg 2xl:f-xl 3xl:f-xxl font-beautique font-medium text-secondary">We carved out a sanctuary of timeless elegance.</h2>
        </div>
        {/* End of Content */}
            
        </div>
    );
}