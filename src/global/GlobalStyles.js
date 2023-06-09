import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background: #000;
}
`;
