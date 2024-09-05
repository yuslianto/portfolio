/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tautanLinks } from '../../Data';

const NavCustom = ({
  isActive,
  open,
  variants,
  itemVarianst,
  toggleDarkMode,
}) => {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek apakah layar berukuran lg atau lebih besar
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    // Panggil fungsi ketika komponen di-mount
    handleResize();

    // Tambahkan event listener untuk menangani perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      animate={open ? 'open' : 'closed'}
      id="navbar"
      className={`${
        isActive
          ? ' block py-5 bg-white shadow-lg bg-opacity-90 backdrop-filter:blur(8px) dark:bg-opacity-90 dark:backdrop-filter:blur(8px) rounded-lg max-w-[350px] w-full right-4 absolute top-full dark:text-white dark:bg-slate-700 lg:hidden'
          : ' hidden lg:block lg:static lg:bg-transparent lg:max-w-full'
      }`}
    >
      <motion.ul
        variants={isLgScreen ? {} : variants} // Nonaktifkan variants jika layar lg
        className="block lg:flex lg:items-center"
      >
        {tautanLinks.map((link) => (
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
        ))}

        <motion.li className="mt-4 flex flex-col gap-3 lg:hidden">
          <motion.button
            variants={isLgScreen ? {} : itemVarianst} // Nonaktifkan variants jika layar lg
            onClick={toggleDarkMode}
            className="mt-4 text-base text-center bg-primary font-semibold text-white mx-8 px-8 py-3 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Toggle Dark Mode
          </motion.button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default NavCustom;
