import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import LogoOffice from "../../assets/pineLogo.png";

export function Navbar() {
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <div>
        <div>
          <img src={LogoOffice} alt="light theme"/>
        </div>
        <h2>Pinheiro Contabilidade</h2>
      </div>
      <div>
        <Sc.SelectItem exact active theme={theme} to="/home">
          Início
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/about">
          Sobre nós
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/services">
          Serviços
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/custumers">
          Clientes
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/links">
          Links Uteis
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/news">
          Notícias
        </Sc.SelectItem>
      
        <Sc.SelectItem active theme={theme} to="/contact">
          Contato
        </Sc.SelectItem>
      </div>
      {!isDarkTheme ? 
      <Sc.darkTheme onClick={toggleTheme} theme={theme} alt="Dark theme"/> : 
      <Sc.lightTheme onClick={toggleTheme} theme={theme} alt="light theme"/>}
    </Sc.Container>
  );
}