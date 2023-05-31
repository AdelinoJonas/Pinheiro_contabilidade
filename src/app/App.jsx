import React from 'react';
import GlobalStyles from '../global/GlobalStyles';
import { Home } from '../pages/Home';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Customers } from '../pages/Customers';
import { News } from '../pages/News';
import { Contact } from '../pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Customers />
      <News />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}