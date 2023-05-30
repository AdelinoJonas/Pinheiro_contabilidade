import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <h1>
        Sobre nós <img src="#" alt="toggle theme" />
      </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Sc.Container>
  );
}