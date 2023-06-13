import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import LogoOffice from "../../assets/pinheiro-cores.jpg";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <section onClick={() => navigate('/')}>
        <img src={LogoOffice} alt="light theme"/>
      </section>
      <div>
        <Sc.SelectItem exact='true' active='true' theme={theme} to="/">
          Início
        </Sc.SelectItem>
      
        <Sc.SelectItem active='false' theme={theme} to="/about">
          Sobre nós
        </Sc.SelectItem>
          
        <Sc.SelectItem active='false' theme={theme} to="/customers">
          Clientes
        </Sc.SelectItem>
      
        <Sc.SelectItem active='false' theme={theme} to="/links">
          Links Uteis
        </Sc.SelectItem>
      
        <Sc.SelectItem active='false' theme={theme} to="/news">
          Notícias
        </Sc.SelectItem>
      
        <Sc.SelectItem active='false' theme={theme} to="/contact">
          Contato
        </Sc.SelectItem>
      </div>
      {!isDarkTheme ? 
      <Sc.darkTheme onClick={toggleTheme} theme={theme} alt="Dark theme"/> : 
      <Sc.lightTheme onClick={toggleTheme} theme={theme} alt="light theme"/>}
    </Sc.Container>
  );
}