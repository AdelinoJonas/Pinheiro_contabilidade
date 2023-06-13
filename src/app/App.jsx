import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';
import GlobalStyles from '../global/GlobalStyles';
import ScrollToTop from './ScrollTotop';
import { MyRoutes } from './routes';
import * as Sc from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Sc.Nav>
          <ScrollToTop />
          <Navbar />
        </Sc.Nav>

        <MyRoutes />
        {/* <Home id="home"/>
        <About />
        <Services />
        <Customers />
        <Links />
        <News />
        <Contact />
        <Principal /> */}
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}