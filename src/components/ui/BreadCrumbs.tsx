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
      className={`relative fbp fpx bg-cover bg-center ${className}`}
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
      <div className="relative flex justify-center gap-6">
        {/* Divider */}
        <div className="flex flex-col justify-center gap-3">
          <div className="w-25 h-0.5 bg-accent"></div>
          <div className="w-25 h-1 bg-accent"></div>
        </div>
        {/* End of Divider */}
        <h2 className=" font-beautique font-medium text-secondary text-center">
          {title}
        </h2>
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

