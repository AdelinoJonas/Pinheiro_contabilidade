import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import LogoOffice from "../../assets/pinheiro-cores.jpg";
import * as Sc from './styles';
import whatsapp from "../../assets/logo_whatsapp_icon3D.png";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();
  const whatsappNumber = 41987971725;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Pode%20me%20ajudar%20com%20minha%20contabilidade?`;
    window.open(whatsappLink);
  }

  return (
    <Sc.Container theme={theme}>
      <div onClick={() => navigate('/')}>
        <img src={LogoOffice} alt="Logo"/>
        <h1>&copy;&reg;</h1>
        <h2>{year}</h2>
      </div>
        <Sc.Whatsapp onClick={() => handleOpenWhatsapp(whatsappNumber)}>
          <img src={whatsapp} alt="whatsApp contact"/>
        </Sc.Whatsapp>
    </Sc.Container>
  )
}
