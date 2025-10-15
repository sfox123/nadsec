import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    // Navbar is absolute and transparent, providing text-white for visibility.
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center w-full **text-white** **bg-transparent** h-20">
      {/* Left side - Home */}
      <ul className="absolute left-1/4 transform -translate-x-1/2 flex">
        <li className="mx-4 cursor-pointer text-white hover:text-gray-400 transition-colors">
          Home
        </li>
      </ul>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Ensure you have a /logo.png that is visible on a dark background */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Right side - Services & Projects */}
      <ul className="absolute text-white right-1/4 transform translate-x-1/2 flex">
        <li className="mx-4  cursor-pointer hover:text-gray-400 transition-colors">
          Services
        </li>
        <li className="mx-4 cursor-pointer hover:text-gray-400 transition-colors">
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;