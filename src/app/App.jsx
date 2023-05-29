import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../global/GlobalStyles';
import theme from '../global/theme/theme';
import { MyRoutes } from './routes';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={null}>
        <MyRoutes />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
