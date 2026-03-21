import { useState, useEffect } from 'react';
import { getTheme, toggleTheme, Theme } from '../../utils/theme';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    const updateTheme = () => {
      setTheme(getTheme());
    };

    // Check for changes periodically
    const interval = setInterval(updateTheme, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <button 
      className="theme-toggle-button"
      onClick={handleToggle}
      title={theme === 'light' ? 'Aktivizo dark mode' : 'Aktivizo light mode'}
      aria-label={theme === 'light' ? 'Aktivizo dark mode' : 'Aktivizo light mode'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

