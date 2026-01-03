interface BreadCrumbsProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  className?: string;
}

export default function BreadCrumbs({
  title,
  backgroundImage,
  overlayOpacity = 60,
  className = "",
}: BreadCrumbsProps) {
  return (
    <div
      className={`relative fbpy fpx bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      {/* End of Overlay */}

      {/* Content */}
      <div className="relative flex flex-col mlg:flex-row justify-center gap-6">
        {/* Divider */}
        <div className="w-full sm:w-25  mlg:flex flex-col flex-shrink justify-center gap-1 sm:gap-2 3xl:gap-3 hidden">
          <div className="h-0.5 bg-accent"></div>
          <div className="h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
        <h2 className="flex-1 sm:flex-0 f-lg sm:f-xl 2xl:f-xxl font-beautique font-medium text-secondary text-center whitespace-nowrap ">
          {title}
        </h2>
        {/* Divider */}
        <div className="w-full sm:w-25  mlg:flex flex-col flex-shrink justify-center gap-1 sm:gap-2 3xl:gap-3 hidden">
          <div className="h-0.5 bg-accent"></div>
          <div className="h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
      </div>
      {/* End of Content */}
    </div>
  );
}

