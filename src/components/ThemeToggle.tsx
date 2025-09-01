import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="ri-sun-line text-xl"></i>
      ) : (
        <i className="ri-moon-line text-xl"></i>
      )}
    </button>
  );
}; 