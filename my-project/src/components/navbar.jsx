import React from 'react';
import logoLight from '../assets/marketing_icon (1).svg';
import logoDark from '../assets/logo_dark (1).svg';
import assets from '../assets/right.svg';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between p-4 sm:px-12 lg:px-24 xl:px-40 top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" className="w-32 sm:w-40" />

      <div className={`flex gap-4 sm:gap-8 text-gray-900 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 overflow-hidden'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 sm:items-center transition-all`}>
        <img src={assets} alt="Right Arrow" width={20} className="w-5 absolute right-4 top-4 sm:hidden" onClick={() => setSidebarOpen(false)} />

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
        <img src={assets} alt="Right Arrow" width={20} className="w-5 sm:hidden" onClick={() => setSidebarOpen(true)} />

        <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
          Connect <img src={assets} width={20} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
