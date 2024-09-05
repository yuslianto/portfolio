/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const HamburgerMenu = ({ toggleHamburger, open }) => {
  return (
    <button
      className="relative flex flex-col items-center justify-center w-12 h-12 lg:hidden"
      onClick={toggleHamburger}
    >
      <div
        className={`w-8 h-[2px] bg-black dark:bg-slate-200 mb-1 transition-transform duration-300 ${
          open ? 'transform rotate-45 translate-y-2' : ''
        }`}
      ></div>
      <div
        className={`w-8 h-[2px] bg-black dark:bg-slate-200 mb-1 transition-opacity duration-300 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`w-8 h-[2px] bg-black dark:bg-slate-200 transition-transform duration-300 ${
          open ? 'transform -rotate-45 -translate-y-1' : ''
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
