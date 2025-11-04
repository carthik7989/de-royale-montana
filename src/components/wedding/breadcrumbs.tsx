export default function BreadCrumbs(){
    return(
        <div className="relative px-16 pt-64 pb-32 bg-[url('/images/fine-dining.png')] bg-cover bg-center">
            {/*  overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* End of  overlay */}

        {/* Content */}
        <div className="relative flex justify-center gap-6">
            {/* Divider */}
        <div className="flex flex-col justify-center gap-3">
            <div className="w-25 h-0.5 bg-accent"></div>
            <div className="w-25 h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
            <div className="text-7xl font-beautique font-medium text-secondary">Wedding Spaces</div>
             {/* Divider */}
        <div className="flex flex-col justify-center gap-3">
            <div className="w-25 h-0.5 bg-accent"></div>
            <div className="w-25 h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
        </div>
        {/* End of Content */}
            
        </div>
    );
}