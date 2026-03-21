const THEME_KEY = 'math_platform_theme';

export type Theme = 'light' | 'dark';

export const getTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Default to light
    return 'light';
  } catch (error) {
    return 'light';
  }
};

export const setTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  } catch (error) {
    console.error('Failed to save theme preference');
  }
};

export const toggleTheme = (): Theme => {
  const current = getTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
    root.classList.remove('dark-mode');
  }
};

// Initialize theme on load
export const initTheme = (): void => {
  const theme = getTheme();
  applyTheme(theme);
};

