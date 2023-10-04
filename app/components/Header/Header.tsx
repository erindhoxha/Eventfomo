import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <div className=" w-full items-center justify-between font-mono text-sm flex">
      <p className="text-muted-foreground">eventfomo</p>
      <ThemeToggle />
    </div>
  );
};

export default Header;
