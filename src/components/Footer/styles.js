import styled from "styled-components";

export const Container = styled.div`

  height: 7rem;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 3rem 0 3rem;
  div{
    display: flex;
    align-items: start;
    cursor: pointer;

    img {
      max-height: 6rem;
      border-radius: 6px;
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
`;

export const Whatsapp= styled.div`
position: absolute;
width: 75%;
display: flex;
justify-content: end;
  img{
    position: relative;
    z-index: 555;
    margin-top: -10rem;
    opacity: 1;
  }
`;