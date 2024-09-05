/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { tautanLinks } from '../../Data';

const CardNav = ({
  isActive,
  open,
  variants,
  itemVarianst,
  toggleDarkMode,
  enableAutoMode,
}) => {
  return (
    <motion.nav
      animate={open ? 'open' : 'closed'}
      id="navbar"
      className={`${
        isActive
          ? ' block py-5 bg-white shadow-lg bg-opacity-90 backdrop-filter:blur(8px) dark:bg-opacity-90 dark:backdrop-filter:blur(8px) rounded-lg max-w-[350px] w-full right-4 absolute top-full dark:text-white dark:bg-slate-700 lg:hidden'
          : ' hidden'
      } `}
    >
      <motion.ul variants={variants} className="block">
        {tautanLinks.map((link) => (
          <motion.li key={link.key} className="group">
            <motion.a
              variants={itemVarianst}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href={`#${link.link}`}
              className="group-hover:text-primary dark:text-white  text-base px-8 py-2 text-dark flex capitalize cursor-pointer"
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}

        <motion.li variants={variants} className=" mt-4 flex flex-col gap-3">
          <motion.button
            variants={itemVarianst}
            onClick={toggleDarkMode}
            className="mt-4 text-base text-center bg-primary font-semibold text-white mx-8  px-8 py-3 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Toggle Dark Mode
          </motion.button>
          <motion.button
            variants={itemVarianst}
            onClick={enableAutoMode}
            className="text-center text-base bg-primary font-semibold text-white mx-8  px-8 py-3 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Enable Auto Mode
          </motion.button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default CardNav;
