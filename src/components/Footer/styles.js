import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 7rem;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem 0 3rem;
  div{
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    div{
      background: ${(props) => props.theme.color.active};
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 8rem;
        height: 8rem;
      }
    }
    h1{
      color: ${props => props.theme.color.active};
      text-transform: uppercase;
      font-weight: ${props => props.theme.weightFonts.title1};
      font-size: ${props => props.theme.sizeFonts.subtitle};
    }
    h2{
      color: ${props => props.theme.color.links};
      text-transform: uppercase;
      font-weight: ${props => props.theme.weightFonts.title1};
      font-size: ${props => props.theme.sizeFonts.subtitle};
    }

  }
  div{
    display: flex;
    gap: 1rem;
  }
`;