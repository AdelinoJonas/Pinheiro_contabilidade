import React, { useState } from 'react';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../global/GlobalStyles';
import { lightTheme, darkTheme } from '../global/themes/theme';
import { About } from '../pages/About';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Suspense fallback={null}>
        <Navbar />
        <About />
        <Footer />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
