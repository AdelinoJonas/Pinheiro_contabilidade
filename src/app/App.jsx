import React, { useState } from 'react';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../global/GlobalStyles';
import { lightTheme, darkTheme } from '../global/themes/theme';
import { About } from '../pages/About';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Suspense fallback={null}>
        {/* <About /> */}
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>theme</button>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
