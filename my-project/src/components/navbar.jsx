import React from 'react';
import logoLight from '../assets/marketing_icon (1).svg';
import logoDark from '../assets/logo_dark (1).svg';
import assets from '../assets/right.svg';
import ThemeToggleButton from './ThemeToggleButton';
import { motion } from "motion/react";

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <motion.div 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex items-center justify-between p-4 sm:px-12 lg:px-24 xl:px-40 top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img src={theme === 'dark' ? logoLight : logoDark} alt="Logo" className="w-32 sm:w-40 shrink-0 opacity-100" />


      {/* Sidebar for mobile */}
      <div className={`
        flex gap-4 sm:gap-8 text-black dark:text-white sm:text-sm
        max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 sm:items-center transition-all
        ${sidebarOpen ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 max-sm:pl-0 max-sm:overflow-hidden'}
      `}>
        {/* Close icon inside sidebar */}
        <img src={assets} alt="Close Sidebar" width={20} className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" onClick={() => setSidebarOpen(false)} />

        <a href="#home" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Home
        </a>
        <a href="#services" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Services
        </a>
        <a href="#our-works" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Our works
        </a>
        <a href="#contact-us" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-4 sm:gap-8">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />

        {/* Hamburger menu icon for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white"></span>
        </button>

        <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
          Connect <img src={assets} width={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
