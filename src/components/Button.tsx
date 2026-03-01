import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-off-white text-pure-black hover:bg-white hover:shadow-[0_0_30px_rgba(245,245,245,0.5)]',
    secondary: 'glass-effect text-off-white hover:bg-white/10 border border-off-white/20'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
