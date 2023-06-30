import styled from "styled-components";
import homeBg from "../../assets/homebg.png";

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${homeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;

    @media(max-width: 900px){
      align-items: start;
      justify-content: space-evenly;
    } 

  div{
    padding: 5rem;
      @media(max-width: 700px){
        padding: 3rem 2rem;
      } 
    section{
      min-height: 12rem;
      margin-bottom: 5rem;
      margin-top: 5rem;
      @media(max-width: 900px){
          height: 25vh;
          margin-top: 0;
        } 
      
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
    div{
      button {
        cursor: pointer;
        height: 6rem;
        display: flex;
        align-items: center;
        padding: 0rem 2rem;
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.subtitle};
        font-weight: ${props => props.theme.weightFonts.title};
        background: ${props => props.theme.bg.sideFilter};
        border-radius: 6px;
        border: 1px solid #000;
        
        -webkit-box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
        -moz-box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
        box-shadow: 1px -6px 28px 1px rgba(0,0,0,1);
            
        @media(max-width: 900px){
          position: absolute;
          left: 5rem;
        } 

        &:hover{
          opacity: 0.8;
          transition: all 0.2s;
        }
      }
    }
    img{
      position: fixed;
      z-index: 5;
      width: 80px;
      height: 80px;
      opacity: 1;
      right: 5rem;
      bottom: 2rem;
      cursor: pointer;
    }
  }
`;


