import React, { FC } from 'react';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="border-b py-5">
      <div className="layout-container flex justify-between items-center ">
        <Logo />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
