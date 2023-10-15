import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LinkComponent from '../Link/Link';
import Link from 'next/link';

const Header = () => {
  return (
    <div className=" w-full items-center justify-between font-mono text-sm flex">
      <div className="z-20 flex items-center text-sm text-muted-foreground">
        <Link href="/">eventfomo_</Link>
      </div>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <LinkComponent href="/login">Login</LinkComponent>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
