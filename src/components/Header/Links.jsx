/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const tautanLinks = [
  {
    key: 1,
    name: 'beranda',
    icon: 'Home',
    link: 'home',
  },
  {
    key: 2,
    name: 'tentang saya',
    icon: 'About',
    link: 'about',
  },
  {
    key: 3,
    name: 'Portfolio',
    icon: 'Portfolio',
    link: 'portfolio',
  },
  {
    key: 4,
    name: 'Clients',
    icon: 'Clients',
    link: 'clients',
  },
  {
    key: 5,
    name: 'Blog',
    icon: 'Blog',
    link: 'blog',
  },
  {
    key: 6,
    name: 'Contact',
    icon: 'Contact',
    link: 'contact',
  },
];

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

const Links = () => {
  return (
    <motion.div
      variants={variants}
      className="absolute top-10 w-full h-full bg-slate-400 flex flex-col justify-center items-center gap-3"
    >
      {tautanLinks.map((link) => (
        <motion.a
          variants={itemVarianst}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href={link.link}
          key={link.key}
          className="group-hover:text-primary dark:text-white text-base mx-8 py-2 text-dark flex capitalize"
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
