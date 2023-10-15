import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LinkComponent from '../Link/Link';

const Header = () => {
  return (
    <div className=" w-full items-center justify-between font-mono text-sm flex">
      <p className="text-muted-foreground">eventfomo_</p>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <LinkComponent href="/login">Login</LinkComponent>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
