import React from 'react';

const BgPattern = () => {
  return (
    <div className="h-screen bg-bg absolute top-0 left-0 right-0 z-0">
      {/* <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-bg to-transparent"></div> */}
      <div className="absolute top-0 z-0 size-full bg-bg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  );
};

export default BgPattern;
