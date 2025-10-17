import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <span>© {currentYear} Apon Datta. All rights reserved.</span>
          </div>

          {/* Right - Built with */}
          <div className="text-center md:text-right">
            <span>Built with React, Tailwind CSS </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;