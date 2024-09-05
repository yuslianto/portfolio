/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { PiMoonStarsFill } from 'react-icons/pi';

import HamburgerMenu from './HamburgerMenu';
import NavCustom from './NavCustom';

const Header = ({ onClick, toggleDarkMode, darkMode }) => {
  // const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        duration: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVarianst = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const toggleHamburger = () => {
    // setIsActive(!isActive);
    setOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adanya spasi sebelum kelas fixed dan absolute adalah untuk memastikan kelas tersebut ditambahkan dengan benar ke dalam string navbarClasses. Jika tidak ada spasi, kelas-kelas tersebut akan digabungkan dengan kelas sebelumnya dalam string, yang akan menghasilkan kelas CSS yang tidak valid.

  let navbarClasses =
    'top-0 left-0 w-full mx-auto bg-transparent transition-all dark:bg-opacity-80 dark:backdrop-filter:blur(8px) duration-300 flex items-center z-10 dark:text-white dark:bg-slate-800';
  if (scrolled) {
    navbarClasses +=
      ' fixed bg-white shadow-md z-[9999] bg-opacity-80 backdrop-filter:blur(8px) mx-auto w-full ';
  } else {
    navbarClasses += ' absolute';
  }

  return (
    <header className={navbarClasses}>
      <div className="container max-w-screen-lg">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="text-lg font-bold text-primary block py-6"
            >
              Yuslianto
            </a>
          </div>
          <div className="flex items-center px-4 bg-transparent">
            {/* <Links /> */}
            {/* <HamburgerMenu /> */}
            {/* <FlexNav />
            <CardNav
            isActive={isActive}
            open={open}
            variants={variants}
            itemVarianst={itemVarianst}
            toggleDarkMode={toggleDarkMode}
            enableAutoMode={enableAutoMode}
            /> */}
            <NavCustom
              open={open}
              variants={variants}
              itemVarianst={itemVarianst}
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
            <PiMoonStarsFill
              onClick={onClick}
              className="cursor-pointer text-3xl hover:text-teal-500 duration-300 hidden lg:block"
            />
            <HamburgerMenu toggleHamburger={toggleHamburger} open={open} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
