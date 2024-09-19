import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: any;
  text: string;
};

const Button = ({ variant = 'secondary', icon, text }: ButtonProps) => {
  if (variant === 'secondary') {
    return (
      <div
        className={`px-4 py-2 rounded-md bg-bg  border border-bglighter hover:border-accent text-sm text-text font-body font-medium cursor-pointer `}
      >
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div
      className={`px-4 py-2 rounded-md bg-bglight/30 border border-bglighter text-sm text-text font-body font-medium cursor-pointer `}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
