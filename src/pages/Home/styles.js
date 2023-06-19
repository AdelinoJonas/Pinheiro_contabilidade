import styled from "styled-components";
import homeBg from "../../assets/home-bg.png";

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${homeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;

    @media(max-width: 900px){

    } 

  div{
    padding: 5rem;
    section{
      min-height: 12rem;
      margin-bottom: 5rem;
      
      span{
        width: 80%;
        color: ${props => props.theme.color.title1};
        font-size: ${props => props.theme.sizeFonts.title1};
        font-weight: ${props => props.theme.weightFonts.title1};
        letter-spacing: 0.5px;

        @media(max-width: 900px){
          font-size: ${props => props.theme.sizeFonts.title};
        } 
      }
    }
    button {
      cursor: pointer;
      height: 6rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0rem 2rem;
      margin-left: 0%;
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.subtitle};
      font-weight: ${props => props.theme.weightFonts.title};
      background: ${props => props.theme.bg.sideFilter};
      border-radius: 4px;
      border: 1px solid #000;
      -webkit-box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
      -moz-box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
      box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
            
      &:hover{
        opacity: 0.8;
        transition: all 0.2s;
      }
    }
    img{
      position: fixed;
      z-index: 555;
      width: 80px;
      height: 80px;
      opacity: 1;
      right: 5rem;
      bottom: 2rem;
    }
  }
`;

export const Whatsapp= styled.div`
position: fixed;

`;


