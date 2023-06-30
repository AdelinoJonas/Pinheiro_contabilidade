import React, { useContext, useEffect, useRef, useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import LogoOffice from "../../assets/pinheiroverticalcores.png";
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function MobileNavbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme, isDarkTheme, openMenu, handleToggleMenu } = useContext(ThemeContext);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleToggleMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu, menuRef])

  return (
    <>
      <Sc.Menu onClick={handleToggleMenu}>
        <RiMenuLine />
      </Sc.Menu>
      {openMenu && (
        <Sc.BackDrop onClick={handleToggleMenu}>
          <Sc.Container theme={theme}>
            <section onClick={() => navigate('/')}>
              <img src={LogoOffice} alt="light theme" />
            </section>
            <div>
              <Sc.SelectItem exact="true" active="true" theme={theme} to="/" onClick={handleToggleMenu}>
                Início
              </Sc.SelectItem>
            
              <Sc.SelectItem active='false' theme={theme} to="/about" onClick={handleToggleMenu}>
                Sobre nós
              </Sc.SelectItem>
                
              <Sc.SelectItem active='false' theme={theme} to="/services" onClick={handleToggleMenu}>
                Services
              </Sc.SelectItem>
              
              <Sc.SelectItem active='false' theme={theme} to="/customers" onClick={handleToggleMenu}>
                Clientes
              </Sc.SelectItem>
            
              <Sc.SelectItem active='false' theme={theme} to="/links" onClick={handleToggleMenu}>
                Links Uteis
              </Sc.SelectItem>
            
              <Sc.SelectItem active='false' theme={theme} to="/news" onClick={handleToggleMenu}>
                Notícias
              </Sc.SelectItem>
            
              <Sc.SelectItem active='false' theme={theme} to="/contact" onClick={handleToggleMenu}>
                Contato
              </Sc.SelectItem>
            </div>

            <Sc.ToggleTheme>

              <Sc.LightTheme onClick={toggleTheme} theme={theme} alt="light theme"/>

              <Sc.ToggleContainer htmlFor="toggle">
                <Sc.ToggleBall isActive={isDarkTheme} />
                <Sc.HiddenCheckbox
                  type="checkbox"
                  id="toggle"
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
              </Sc.ToggleContainer>

              <Sc.DarkTheme onClick={toggleTheme} theme={theme} alt="Dark theme"/> 
            </Sc.ToggleTheme>
          </Sc.Container>
          </Sc.BackDrop>
      )}
    </>
  );
}







