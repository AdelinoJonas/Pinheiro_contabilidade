import styled from "styled-components";
import { ImWhatsapp } from 'react-icons/im';
import { BsTelephoneInbound } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelegram } from 'react-icons/bs';
// import { PiTelegramLogoBold } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};

  .header{
    padding: 4rem;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    h1{
      border-right: 6px groove ${props => props.theme.color.text};
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.title1};
      font-weight: ${props => props.theme.weightFonts.title1};
      line-height: 200%;
      padding-right: 2rem;
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
    section{ 
      max-width: 75%;
      height: 20vh;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      text-align: justify;
      padding: 2rem 2rem;
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
    padding-bottom: 10rem;
    align-items: center;
    justify-content: center;
    
    .left{
      background-color: ${props => props.theme.bg.sideFilter};
      width: 50%;
      margin-bottom: 4rem;
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

      .contact-box{
        display: flex;
        flex-direction: column;
        padding-left: 5%;

        .contact{
          max-width: 50%;
          margin-left: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          .contact-item{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 1rem;
            h3{
              padding: 1rem 0 1rem 0;
              color: ${props => props.theme.color.text};
              font-size: ${props => props.theme.sizeFonts.titleCards};
              font-weight: ${props => props.theme.weightFonts.title1};
            }
          }
          span{
            padding-left: 1rem;
            color: ${props => props.theme.color.text};
            font-size: ${props => props.theme.sizeFonts.titleCards};
            font-weight: ${props => props.theme.weightFonts.subtitle};
          }
        }
      }
    }
    .right{
      width: 40%;
      padding: 5%;
      display: flex;
      align-self: end;
      img{
        width: 100%;
        background-color: ${props => props.theme.bg.sideFilter};
        border-radius: 24px;
        margin-bottom: 4rem;
        box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
        -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
        -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
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
// export const Location = styled(FaMapLocationDot)`
//   width: 30px;
//   height: 30px;
// `;
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