import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function Navbar() {
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <ul>
      <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/">
            Início
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/about">
            Sobre nós
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/services">
            Serviços
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/custumers">
            Clientes
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/links">
            Links Uteis
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/news">
            Notícias
          </Sc.SelectItem>
        </li>
        <li>
          <Sc.SelectItem exact activeClassName="active" theme={theme} to="/contact">
            Contato
          </Sc.SelectItem>
        </li>
      </ul>
      {isDarkTheme ? 
      <Sc.darkTheme onClick={toggleTheme} theme={theme}/> : 
      <Sc.lightTheme onClick={toggleTheme} theme={theme}/>}
    </Sc.Container>
  );
}