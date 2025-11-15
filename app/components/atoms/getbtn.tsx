// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "rounded-full font-manrope font-semibold flex items-center justify-center transition duration-200";

  const sizeStyles = {
    sm: "w-[160px] h-[48px] text-[16px]",
    md: "w-[192px] h-[58px] text-[20px]",
    lg: "w-[220px] h-[64px] text-[22px]",
  }[size];

  const variantStyles = {
    primary: "bg-[#0F4E23] text-white hover:bg-[#0c3a1b]",
    secondary: "bg-[#DFEDE3] text-[#0F4E23] hover:bg-[#c9e3d3]",
    outline: "border border-[#0F4E23] text-[#0F4E23] hover:bg-[#e8f3ec]",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
