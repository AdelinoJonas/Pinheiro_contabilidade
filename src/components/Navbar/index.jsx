import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function Navbar() {
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <ul>
        <li>
          Início
        </li>
        <li>
          Serviços
        </li>
        <li>
          Clientes
        </li>
        <li>
          Links Uteis
        </li>
        <li>
          Notícias
        </li>
        <li>
          Contato
        </li>
      </ul>
      {isDarkTheme ? 
      <Sc.darkTheme onClick={toggleTheme} theme={theme}/> : 
      <Sc.lightTheme onClick={toggleTheme} theme={theme}/>}
    </Sc.Container>
  );
}