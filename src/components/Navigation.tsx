import React from 'react';
import Nav from './Nav';
import { navs } from '@/Services/data';

const Navigation = () => {
  return (
    <div className="fixed z-40 md:left-12 left-1/2 md:top-1/2 top-4 md:-translate-y-1/2 -translate-x-1/2 bg-bglight px-3 py-3 rounded-xl flex md:flex-col items-center gap-4">
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
