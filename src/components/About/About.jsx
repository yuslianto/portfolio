/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useInView } from 'framer-motion';

import { sosMedLinks } from '../../Data';

const About = () => {
  const ref = React.useRef();

  const inView = useInView(ref, { margin: '-100px' });
  const leftVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const rightVariants = {
    initial: {
      x: 50,
      y: 10,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="pt-40 pb-32 dark:bg-slate-700 h-screen">
      <div className="container max-w-screen-lg">
        <div className="flex flex-wrap">
          <motion.div
            variants={leftVariants}
            initial="initial"
            whileInView="animate"
            // ref={ref}
            // animate={inView && 'animate'}
            className="w-full mb-6 px-4 lg:w-1/2"
          >
            <motion.h4
              variants={leftVariants}
              className="font-bold uppercase text-dark text-lg dark:text-slate-200"
            >
              Tentang saya
            </motion.h4>
            <motion.h2
              variants={leftVariants}
              className="font-bold text-primary text-3xl mb-5 max-w-md"
            >
              Yuk, belajar React JS bareng saya!!
            </motion.h2>
            <motion.p
              variants={leftVariants}
              className="fonmt-medium text-lg lg:text-lg mb-5 text-secondary dark:text-slate-400 max-w-xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              sapiente impedit, dolorem accusamus ducimus libero!
            </motion.p>
          </motion.div>
          <motion.div
            variants={leftVariants}
            initial="initial"
            whileInView="animate"
            className="w-full px-4 lg:w-1/2"
          >
            <motion.h1
              variants={leftVariants}
              className="font-semibold text-dark dark:text-slate-200 text-2xl mb-4 lg:text-3xl lg:pt-8"
            >
              Mari berteman
            </motion.h1>
            <motion.p
              variants={leftVariants}
              className="fonmt-medium text-base lg:text-lg dark:text-slate-400 text-secondary"
            >
              {' '}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor?
              Lorem ipsum dolor sit amet.
            </motion.p>
            <motion.div variants={leftVariants} className="flex gap-4 mt-8">
              {sosMedLinks.map((sosmed) => (
                <a
                  // variants={rightVariants}
                  target="_blank"
                  href={sosmed.link}
                  key={sosmed.key}
                  className="text-2xl transition duration-300 ease-in-out w-9 h-9 rounded-full flex justify-center items-center border border-slate-400  hover:border-primary hover:bg-primary hover:text-white dark:text-slate-400"
                >
                  {sosmed.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
