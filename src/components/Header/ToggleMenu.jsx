/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const ToggleMenu = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="fixed w-[50px] h-[50px] rounded-full z-[999] top-0 right-0 bg-primary border-none cursor-pointer"
    >
      button
      {/* <GiHamburgerMenu className="text-3xl text-slate-50" /> */}
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path
          strokeWidth="3"
          stroke="#fff"
          fill="none"
          d="M 2 5 L 17 5 M 2 12 L 17 12 M 2 19 L 17 19"
        />
      </svg>
    </button>
  );
};

export default ToggleMenu;
