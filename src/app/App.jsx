import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { MobileNavbar } from '../components/MobileNavbar';
import { ThemeProvider } from '../context/ThemeContext';
import GlobalStyles from '../global/GlobalStyles';
import { MyRoutes } from './routes';
import * as Sc from './styles';

export default function App() {

  let screenWidth = window.innerWidth;

  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Sc.Body>
          {screenWidth > 900 ? 
            <Navbar /> : 
            <Sc.MobileContainer>
              <MobileNavbar /> 
            </Sc.MobileContainer>
          }
          
          <MyRoutes />
        </Sc.Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}
