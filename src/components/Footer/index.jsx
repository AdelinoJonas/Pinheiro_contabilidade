import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import LogoOffice from "../../assets/pineLogo.png";
import * as Sc from './styles';

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <Sc.Container theme={theme}>
      <div onClick={() => navigate('/')}>
        <div>
          <img src={LogoOffice} alt="light theme"/>
        </div>
        <h1>Pinheiro Contabilidade &copy; &reg;</h1>
        <h2>{year}</h2>
      </div>
    </Sc.Container>
  )
}
