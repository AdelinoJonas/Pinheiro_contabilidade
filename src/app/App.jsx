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
        <Sc.Body>
          <Navbar />
          <MyRoutes />
        </Sc.Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}