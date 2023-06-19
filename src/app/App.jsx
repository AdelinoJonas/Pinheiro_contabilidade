import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { MobileNavbar } from '../components/MobileNavbar';
import { ThemeProvider } from '../context/ThemeContext';
import GlobalStyles from '../global/GlobalStyles';
import { MyRoutes } from './routes';
import * as Sc from './styles';
import { Header } from '../components/Header';

export default function App() {

  let screenWidth = window.innerWidth;

  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Sc.Body>
          {screenWidth > 900 ? 
            <Sc.Aside>
              <Navbar />
            </Sc.Aside>  : 
            // <Sc.Header>
            //   <Sc.MobileContainer>
            //     <MobileNavbar /> 
            //   </Sc.MobileContainer>
            // </Sc.Header>
            <Header/>
          }
          <Sc.Main>
            <MyRoutes />
          </Sc.Main>
        </Sc.Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}
