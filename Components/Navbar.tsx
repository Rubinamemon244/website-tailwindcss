import { Bars3Icon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex w-[90%] lg:w-[80%] mx-auto items-center justify-between h-[10vh]">
        {/* Logo */}
        <div className="relative w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
          <Image src="/images/logo.png" alt="logo" layout="fill" className="object-contain" />
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#tour" className="nav-link">
            Tour
          </a>
          <a href="#hotel" className="nav-link">
            Hotel
          </a>
          <a href="#review" className="nav-link">
            Review
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a
            href="#"
            className="relative inline-flex items-center justify-center px-6 py-2 text-white bg-gray-800 rounded-lg group hover:bg-gray-900"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t
//                 from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <Bars3Icon
          onClick={openNav}
          className="w-8 h-8 text-blue-800 lg:hidden cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
