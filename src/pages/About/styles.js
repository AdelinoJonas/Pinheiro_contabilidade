import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secondary};
  height: 100vh;
  padding: 3rem;
  div{
    display: flex;
    flex-direction: column;
    h1{
      color: ${props => props.theme.color.title};
        font-size: ${props => props.theme.sizeFonts.title};
        font-weight: ${props => props.theme.weightFonts.title};
    }
    p{
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.text};
      font-weight: ${props => props.theme.weightFonts.text};
    }
  }
`;


