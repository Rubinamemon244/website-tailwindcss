import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31]`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
        <a href="#home" className="nav-link-mobile" onClick={closeNav}>
          Home
        </a>
        <a href="#tour" className="nav-link-mobile" onClick={closeNav}>
          Tour
        </a>
        <a href="#hotel" className="nav-link-mobile" onClick={closeNav}>
          Hotel
        </a>
        <a href="#review" className="nav-link-mobile" onClick={closeNav}>
          Review
        </a>
        <a href="#contact" className="nav-link-mobile" onClick={closeNav}>
          Contact
        </a>
        <a
          href="#"
          className="relative inline-flex items-center justify-center px-8 py-3 overflow=hidden
//             fnt-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full 
          group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t
//        from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Book Now</span>
        </a>
      </div>

      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-4 right-4 w-8 h-8 text-white"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
