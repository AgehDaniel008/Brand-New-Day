import { useEffect } from 'react';
import sunIcon from '../assets/sun-regular-full.svg';
import moonIcon from '../assets/moon-regular-full.svg';

const ThemeToggleButton = ({ theme, setTheme }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      return;
    }

    const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkmode ? 'dark' : 'light');
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <img src={sunIcon} alt="light mode" className="size-8.5 border border-gray-500 rounded-full" />
      ) : (
        <img src={moonIcon} alt="dark mode" className="size-8.5 border border-gray-500 rounded-full" />
      )}
    </button>
  );
};

export default ThemeToggleButton;