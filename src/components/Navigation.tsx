import React from 'react';
import Nav from './Nav';

const Navigation = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-bglight px-3 py-3 rounded-xl flex flex-col items-center gap-4">
      <Nav />
      <Nav />
      <Nav />
      <Nav />
    </div>
  );
};

export default Navigation;
