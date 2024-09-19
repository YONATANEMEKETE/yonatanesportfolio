import React from 'react';
import Nav from './Nav';
import { navs } from '@/Services/data';

const Navigation = () => {
  return (
    <div className="fixed z-40 left-4 top-1/2 -translate-y-1/2 bg-bglight px-3 py-3 rounded-xl flex flex-col items-center gap-4">
      {navs.map((nav) => (
        <Nav
          key={nav.tooltip}
          text={nav.tooltip}
          link={nav.link}
          Icon={nav.icon}
        />
      ))}
    </div>
  );
};

export default Navigation;
