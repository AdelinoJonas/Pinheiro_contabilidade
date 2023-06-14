import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../global/themes/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme, handleToggleMenu, openMenu, setOpenMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};