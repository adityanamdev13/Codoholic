import React from "react";

const Button = ({ children, variant = "primary", icon, onClick, className = "" }) => {
  const baseStyles =
    "cursor-pointer relative flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary: `
      bg-[#1A1A1A] 
      text-white 
      shadow-sm
      border-3
      border-[#363434]
      hover:from-[#F89A3E] hover:to-[#E67817]
      before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-10
    `,
    secondary: `
      bg-gradient-to-r from-[#2F80ED] to-[#1E6FDB]
      text-white
      shadow-[0_4px_14px_0_rgba(47,128,237,0.35)]
      hover:shadow-[0_6px_20px_0_rgba(47,128,237,0.45)]
      hover:from-[#1E6FDB] hover:to-[#2F80ED]
      before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-10
      border border-[#2F80ED]/20
    `,
    outline: `
      bg-transparent
      text-[#E67817]
      border-2 border-[#E67817]
      hover:bg-[#E67817]
      hover:text-white
      hover:shadow-[0_4px_14px_0_rgba(230,120,23,0.25)]
      before:absolute before:inset-0 before:bg-[#E67817] before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    ghost: `
      bg-transparent
      text-[#1F2937]
      hover:bg-gray-100
      border border-black
      hover:border-gray-200
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {icon && (
          <span className="transition-transform duration-300  group-hover:rotate-12">
            {icon}
          </span>
        )}
        <span className="relative">
          {children}
        </span>
      </span>
      
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
    </button>
  );
};
export default Button;
