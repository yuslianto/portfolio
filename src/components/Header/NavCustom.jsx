/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tautanLinks } from '../../Data';

const NavCustom = ({
  itemVarianst,
  variants,
  open,
  toggleDarkMode,
  darkMode,
}) => {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaChange = (e) => {
      setIsLgScreen(e.matches);
    };

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const renderLinkItems = () =>
    tautanLinks.map((link) => (
      <motion.li key={link.key} className="group">
        <motion.a
          variants={isLgScreen ? {} : itemVarianst} // Nonaktifkan variants jika layar lg
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href={`#${link.link}`}
          className="group-hover:text-primary dark:text-white text-base px-8 py-2 text-dark flex capitalize cursor-pointer"
        >
          {link.name}
        </motion.a>
      </motion.li>
    ));

  return (
    <motion.nav
      animate={open ? 'open' : 'closed'}
      id="navbar"
      className={`${
        open
          ? ' block py-5 bg-white shadow-lg bg-opacity-90 backdrop-filter:blur(8px) dark:bg-opacity-90 dark:backdrop-filter:blur(8px) rounded-lg max-w-[350px] w-full right-4 absolute top-full dark:text-white dark:bg-slate-700 lg:hidden'
          : ' hidden lg:block lg:static lg:bg-transparent lg:max-w-full'
      }`}
    >
      <motion.ul
        variants={isLgScreen ? {} : variants}
        className="block lg:flex lg:items-center"
      >
        {renderLinkItems()}

        {!isLgScreen && (
          <li className="mt-4 flex flex-col gap-3 z-[999]">
            <>
              <label className="flex cursor-pointer select-none items-center mx-8">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      darkMode ? 'bg-primary' : 'bg-dark'
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                      darkMode ? 'translate-x-full' : ''
                    }`}
                  ></div>
                </div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {darkMode ? 'Dark Mode On' : 'Dark Mode Off'}
                </span>
              </label>
            </>
            {/* <button
              onClick={toggleDarkMode}
              className="mt-4 text-base text-center bg-primary font-semibold text-white mx-8 px-8 py-3 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Toggle Dark Mode
            </button> */}
          </li>
        )}
      </motion.ul>
    </motion.nav>
  );
};

export default NavCustom;
