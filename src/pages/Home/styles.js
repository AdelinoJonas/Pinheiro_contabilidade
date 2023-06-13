import styled from "styled-components";
import homeBg from "../../assets/home-bg.png";

export const Container = styled.div`
   background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${homeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 14rem);
  display: flex;
  align-items: center;
  padding: 0 5rem 0 5rem;

    @media(max-width: 500px){
      padding-left: 0 10rem 0 10rem;
    } 

  div{
    section{
      min-height: 12rem;
      margin-bottom: 5rem;

      
      span{
        color: ${props => props.theme.color.title1};
        font-size: ${props => props.theme.sizeFonts.title1};
        font-weight: ${props => props.theme.weightFonts.title1};
        letter-spacing: 0.5px;

        @media(max-width: 500px){
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
  }
`;


