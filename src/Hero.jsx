/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, stagger, useScroll } from 'framer-motion';

import ProfileAv from './assets/profile.png';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const textVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
      scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      },
    },
  };

  const txtVariants = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        repeat: Infinity,
      },
    },
  };

  const imageVariants = {
    initial: {
      x: 100,
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
    // Hero section
    <section id="home" className="pt-36 dark:bg-slate-600 h-screen">
      <div className="container max-w-screen-lg">
        <div className="flex flex-wrap mx-auto">
          {/* Hero Describ */}
          <motion.div
            variants={textVariants}
            initial="initial"
            // animate="animate"
            whileInView="animate"
            className="w-full self-center px-4 lg:w-1/2"
          >
            <motion.h1
              variants={textVariants}
              className="text-base md:text-xl  text-dark dark:text-white font-semibold"
            >
              Hallo Semua 👋, saya{' '}
              <span className="block text-4xl lg:text-5xl mt-1 text-primary font-bold">
                Yuslianto
              </span>
            </motion.h1>

            <motion.h3
              variants={textVariants}
              className="text-lg mb-5 font-medium dark:text-slate-300 text-slate-500 lg:text-2xl"
            >
              React Developer
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="font-medium to-slate-500 mb-10 leading-relaxed text-gray-800 md:text-lg max-w-xl line-clamp-4 dark:text-slate-200"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quas consequuntur, minima quaerat tenetur mollitia!
              Ea esse est officia excepturi cupiditate aliquid.
            </motion.p>
            <motion.a
              variants={textVariants}
              animate="scrollButton"
              href=""
              className="text-base bg-primary font-semibold text-white px-8 py-3 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Contact me
            </motion.a>
          </motion.div>
          {/* Hero o=image */}
          <div className="w-full self-end px-4 lg:w-1/2 overflow-hidden">
            <div className="mt-10 relative lg:mt-0 lg:right-0">
              <motion.img
                variants={imageVariants}
                initial="initial"
                // animate="animate"
                whileInView="animate"
                src={ProfileAv}
                alt="profile"
                className="mx-auto max-w-sm md:max-w-lg -mt-20 md:-mt-40 lg:mt-0 z-[1] relative"
              />
              <span className="absolute -bottom-2 z-0 left-1/2 -translate-x-1/2 scale-75 sm:scale-75 md:scale-75">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="rgb(20 184 166)"
                    d="M50,-56.3C62.6,-49,69.1,-31.2,73,-12.4C76.9,6.4,78.2,26.2,71,43.2C63.8,60.3,48.1,74.6,31,77.6C13.8,80.5,-4.7,72.1,-17.7,61.8C-30.8,51.4,-38.4,39,-47.7,26C-57,13.1,-68,-0.4,-66.8,-12.6C-65.6,-24.7,-52.2,-35.5,-39,-42.7C-25.9,-49.9,-12.9,-53.5,2.9,-56.9C18.7,-60.3,37.4,-63.6,50,-56.3Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
