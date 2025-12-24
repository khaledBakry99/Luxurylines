'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: string;
  fullWidth?: boolean;
}

export default function Button({ 
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] hover:shadow-xl hover:from-[#D4C5B9] hover:to-[#FFFFFF]',
    secondary: 'bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] text-white hover:shadow-xl hover:from-[#0F3A3E] hover:to-[#1C474A]',
    outline: 'border-2 border-[#CBC1B8] text-[#CBC1B8] hover:bg-[#CBC1B8] hover:text-[#0A1F21]',
    icon: 'bg-white/10 hover:bg-red-500/20 rounded-full'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <i className={`${icon} text-lg`}></i>}
      {children}
    </button>
  );
}
