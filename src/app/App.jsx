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
          {/* <Sc.Aside>
            <Navbar />
          </Sc.Aside>  */}
          {screenWidth > 900 ? 
            <Sc.Aside>
              <Navbar />
            </Sc.Aside>  : 
            <Sc.MobileContainer>
              <MobileNavbar /> 
            </Sc.MobileContainer>
          }
          <Sc.Main>
            <MyRoutes />
          </Sc.Main>
        </Sc.Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}
