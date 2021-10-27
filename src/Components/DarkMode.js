import { useState , useEffect } from "react";

export const useDarkMode = () => {
  const [Theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    switch (Theme) {
      case "light":
        window.localStorage.setItem('theme' , 'dark');
        setTheme("dark");
        break;
      case "dark":
        window.localStorage.setItem('theme' , 'light');
        setTheme("light");
        break;
      default:
        window.localStorage.setItem('theme' , 'light');
        setTheme("light");
        break;
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return [Theme, toggleTheme];
};
