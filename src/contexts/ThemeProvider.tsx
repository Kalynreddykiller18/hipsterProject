import type { ThemeType } from "../themes/themes";
import { themeMeta } from "../themes/themes";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const defaultTheme: ThemeType = "theme1";

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    return (localStorage.getItem("theme") as ThemeType) || defaultTheme;
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(themeMeta[theme].className);
    document.body.style.fontFamily = themeMeta[theme].fontFamily;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
