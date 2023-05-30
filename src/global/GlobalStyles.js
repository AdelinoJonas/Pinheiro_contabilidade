import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
    background: ${(props) => props.theme.bg.primary};
    color: ${props => props.theme.color.text};        
    }
h1 {
    color: ${props => props.theme.color.title};        
}

textarea {
  &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      border: 3px solid rgba(85,85,85,0.6);
    }
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
`;
