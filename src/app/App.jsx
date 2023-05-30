import React from 'react';
import GlobalStyles from '../global/GlobalStyles';
import { About } from '../pages/About';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
        {/* <About />
        <Footer /> */}
    </ThemeProvider>
  );
}