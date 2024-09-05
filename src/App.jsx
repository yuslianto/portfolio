/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import Hero from './Hero';
import About from './components/About/About';
import Header from './components/Header/Header';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  useEffect(() => {
    if (autoMode) {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 6) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, [autoMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setAutoMode(false);
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header
        onClick={toggleDarkMode}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        autoMode={autoMode}
      />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
