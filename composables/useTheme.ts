import { useState } from '#app';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => {
    if (import.meta.server) return 'light';
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);

    if (import.meta.client) {
      localStorage.setItem('theme', newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light');
  };

  onMounted(() => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  });

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
