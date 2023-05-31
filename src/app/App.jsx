import React from 'react';
import GlobalStyles from '../global/GlobalStyles';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import { MyRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Navbar />
        <MyRoutes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}