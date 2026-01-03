import React from 'react';

export type ButtonIconColor =
  | 'text-red-500'
  | 'text-blue-500'
  | 'text-green-500'
  | 'text-yellow-500'
  | 'text-purple-500'
  | 'text-pink-500'
  | 'text-orange-500'
  | 'text-secondary'
  | 'text-primary'
  | 'text-accent';

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  buttonBgColor?: string;
  borderColor?: string;
  showIcon?: boolean;
  iconAlt?: string;
  iconColor?: ButtonIconColor;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = 'bg-secondary',
  textColor = 'text-primary',
  buttonBgColor = 'bg-secondary',
  borderColor = 'border-accent',
  showIcon = false,
  iconAlt = 'Arrow Right',
  iconColor = 'text-secondary',
  className = '',
  onClick
}) => {
  return (
    <button 
      className={`flex items-center  gap-3 xl:gap-4 3xl:gap-6 ${buttonBgColor} border-2 ${borderColor} rounded-full  ${className}`}
      onClick={onClick}
    >
      <div className={`f-xs xl:f-sm 3xl:f-base  uppercase  ${bgColor} ${textColor} rounded-full px-8 xl:px-10 3xl:px-13 py-4 xl:py-5 3xl:py-7`}>
        {text}
      </div>
      {showIcon && (
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 14 14" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5 xl:mr-7 3xl:mr-9"
        >
          <path 
            d="M14.0002 1.84254C14.0002 1.29026 13.5525 0.842541 13.0002 0.842541L4.00023 0.842542C3.44795 0.842542 3.00023 1.29026 3.00023 1.84254C3.00023 2.39483 3.44795 2.84254 4.00023 2.84254L12.0002 2.84254L12.0002 10.8425C12.0002 11.3948 12.4479 11.8425 13.0002 11.8425C13.5525 11.8425 14.0002 11.3948 14.0002 10.8425L14.0002 1.84254ZM1.68652 13.1562L2.39363 13.8634L13.7073 2.54965L13.0002 1.84254L12.2931 1.13543L0.979417 12.4491L1.68652 13.1562Z" 
            fill={iconColor === 'text-red-500' ? '#ef4444' :
                  iconColor === 'text-blue-500' ? '#3b82f6' :
                  iconColor === 'text-green-500' ? '#22c55e' :
                  iconColor === 'text-yellow-500' ? '#eab308' :
                  iconColor === 'text-purple-500' ? '#a855f7' :
                  iconColor === 'text-pink-500' ? '#ec4899' :
                  iconColor === 'text-orange-500' ? '#f97316' :
                  iconColor === 'text-secondary' ? '#FFFBF4' :
                  iconColor === 'text-primary' ? '#182B21' :
                  iconColor === 'text-accent' ? '#AF8D57' :
                  '#FFFBF4'} // default white
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
