import styled from "styled-components";
import { ImWhatsapp } from 'react-icons/im';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelegram } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  @media(max-width: 700px){
      width: 100vw;
    } 

  .header{
    padding: 4rem;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
      @media(max-width: 700px){
        flex-direction: column;
        padding: 1rem;
      } 
    h1{
      border-right: 6px groove ${props => props.theme.color.text};
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.title1};
      font-weight: ${props => props.theme.weightFonts.title1};
      line-height: 200%;
      padding-right: 2rem;
      @media(max-width: 700px){
        border-bottom: 6px groove ${props => props.theme.color.text};
        border-right:none;
        margin-bottom: 1rem;
        text-align: center;
      } 
    }
    img{
      padding-left: 2rem;
      border-radius: 4px;
    }
  }
  .sectionBox{
    width: 70%;
    margin-left: 15%;
    background-color: ${props => props.theme.bg.sideFilter};
    border-radius: 24px;
    box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    display: flex;
    justify-content: center;
      @media(max-width: 700px){
        width: 90%;
        margin-left: 0;
        margin-left: 5%;
        border-radius:0 40% 0 40%;
        } 
    section{ 
      max-width: 75%;
      height: 20vh;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      text-align: justify;
      padding: 2rem 2rem;

      @media(max-width: 700px){
        height: 50vh;
        } 
      span{
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.titleCards};
        font-weight: ${props => props.theme.weightFonts.text};
        line-height: 150%;
      }
    }
  }
  .bodyContact{
    display: flex;
    margin-top: 10rem;
    padding-bottom: 5rem;
    align-items: center;
    justify-content: center;

      @media(max-width: 700px){
        flex-direction: column;
        } 
    
    .left{
      background-color: ${props => props.theme.bg.sideFilter};
      width: 40%;
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.subtitle};
      font-weight: ${props => props.theme.weightFonts.text};
      line-height: 150%;
      border-radius:0 40% 0 40%;
      box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
      -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
      -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
      gap:3rem;
      display: flex;
      justify-content: center;
      padding: 2rem 0 2rem 0;
        @media(max-width: 700px){
          width: 90%;
          border-radius: 40% 0 40% 0;
          padding: 2rem 0 3rem 0;
        } 
      .contact-box{
        display: flex;
        flex-direction: column;
        padding-left: 5%;
        @media(max-width: 700px){
          padding-left: 0;
        } 
        .contact{
          max-width: 80%;
          margin-left: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          .contact-item{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 1rem;
            h3{
              padding: 1rem 0 1rem 0;
              color: ${props => props.theme.color.text};
              font-size: ${props => props.theme.sizeFonts.titleCards};
              font-weight: ${props => props.theme.weightFonts.title1};
              text-align: center;
            }
            span{
              color: ${props => props.theme.color.text};
              font-size: ${props => props.theme.sizeFonts.titleCards};
              font-weight: ${props => props.theme.weightFonts.subtitle};
            }
          }
        }
      }
    }
    .right{
      width: 50%;
      margin-left: 5rem;
      @media(max-width: 700px){
          width: 90%;
          margin-left: 0;
          margin-top: 5rem;
        } 
      .location{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        gap: 0.5rem;
        color: ${props => props.theme.color.text};
        h3{
          color: ${props => props.theme.color.text};
          font-size: ${props => props.theme.sizeFonts.titleCards};
          font-weight: ${props => props.theme.weightFonts.title1};
        }
      }
      span{
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.subtitle};
        font-weight: ${props => props.theme.weightFonts.subtitle};
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const Email = styled(HiOutlineMail)`
  width: 30px;
  height: 30px;
`;
export const Phone = styled(BsTelephoneInbound)`
  width: 30px;
  height: 30px;
`;
export const WhatsApp = styled(ImWhatsapp)`
  width: 30px;
  height: 30px;
`;
export const Location = styled(CiLocationOn)`
  width: 30px;
  height: 30px;
`;
export const Telegram = styled(BsTelegram)`
  width: 30px;
  height: 30px;
`;
export const Instagram = styled(BsInstagram)`
  width: 30px;
  height: 30px;
`;
export const LinkedIn = styled(BsLinkedin)`
  width: 30px;
  height: 30px;
`;