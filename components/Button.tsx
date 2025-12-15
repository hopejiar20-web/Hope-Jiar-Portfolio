import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href,
  target,
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "border-transparent text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm rounded-full",
    outline: "border-zinc-200 text-zinc-900 bg-white hover:bg-zinc-50 shadow-sm rounded-full",
    ghost: "border-transparent text-zinc-900 hover:bg-zinc-100 rounded-md"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;