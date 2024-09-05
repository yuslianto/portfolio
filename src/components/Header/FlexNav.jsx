/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

import { tautanLinks } from '../../Data';

const FlexNav = () => {
  return (
    <motion.nav className="hidden lg:block lg:static lg:bg-transparent lg:max-w-full">
      <motion.ul className="lg:flex lg:items-center">
        {tautanLinks.map((link) => (
          <motion.li key={link.key} className="group">
            <motion.a
              href={`#${link.link}`}
              className="group-hover:text-primary dark:text-white text-base mx-8 py-2 text-dark flex capitalize"
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default FlexNav;
