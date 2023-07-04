import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LogoOffice from "../../assets/pinheirocores.jpg";
import * as Sc from "./styles";
import whatsapp from "../../assets/logowhatsappicon3D.png";

export default function Footer() {
  const { theme, whatsappNumber, handleOpenWhatsapp } =
    useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <Sc.Container theme={theme}>
      <div onClick={() => navigate("/")}>
        <h1>PINHEIRO CONTABILIDADE </h1>
        <h1>&copy;&reg;</h1>
        <h2>{year}</h2>
      </div>
    </Sc.Container>
  );
}
