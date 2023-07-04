import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LogoOffice from "../../assets/pinheirocores.jpg";
import * as Sc from "./styles";
import { MobileNavbar } from "../MobileNavbar";

export function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <section>
        <MobileNavbar />
      </section>
      <Sc.Logo>
        <img src={LogoOffice} alt="Logo" onClick={() => navigate("/")} />
      </Sc.Logo>
    </Sc.Container>
  );
}
