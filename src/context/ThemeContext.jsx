import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../global/themes/theme";

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

  const whatsappNumber = 41996376899;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Pode%20me%20ajudar%20com%20minha%20contabilidade?`;
    window.open(whatsappLink);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDarkTheme,
        handleToggleMenu,
        openMenu,
        setOpenMenu,
        handleOpenWhatsapp,
        whatsappNumber,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
