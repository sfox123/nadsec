import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-center w-full h-20 bg-brand-50 text-neutral-900 shadow-card">
      {/* Left side - Home */}
      <ul className="absolute left-1/4 transform -translate-x-1/2 flex">
        <li className="mx-4 cursor-pointer hover:text-gray-600 transition-colors">
          Home
        </li>
      </ul>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Right side - Services & Projects */}
      <ul className="absolute right-1/4 transform translate-x-1/2 flex">
        <li className="mx-4 cursor-pointer hover:text-gray-600 transition-colors">
          Services
        </li>
        <li className="mx-4 cursor-pointer hover:text-gray-600 transition-colors">
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
