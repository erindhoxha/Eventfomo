import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto pt-6 mb-6 text-xs p-4 text-center text-muted-foreground">
      <p>&copy; {currentYear} Eventfomo</p>
    </footer>
  );
};

export default Footer;
