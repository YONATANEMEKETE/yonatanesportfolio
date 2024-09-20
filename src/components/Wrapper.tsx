import React from 'react';

type WrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={`max-w-[600px]  mx-4 min-[600px]:mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
