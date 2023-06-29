import styled from "styled-components";
import { MdAccountBalance } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { TbTransform } from 'react-icons/tb';
import { GiCalculator } from 'react-icons/gi';
import { BsInboxes } from 'react-icons/bs';
import { LuNewspaper } from 'react-icons/lu';
import { SlPeople } from 'react-icons/sl';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';

export const Container = styled.div`
  background-color: ${(props) => props.theme.bg.sideFilter};

  .content{
    padding: 3rem;

    .contactButton{
      height: 20vh;
      display: flex;
      justify-content: end;
      align-items: center;
      margin-right: 5rem;
      img{
        height: 10rem;
      }
    }

    .iob{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3rem;
      gap: 2rem;
      img{
        width: 22vw;
      }
      span{
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.subtitle};
        font-weight: ${props => props.theme.weightFonts.text};
        margin-left: 1rem;
        text-align: center;
      }
    }
    .mktBox{
      display: flex;
      justify-content: space-evenly;
      .mktItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-top: 6rem;
        margin-bottom: 1rem;
        color: ${props => props.theme.color.text};
        span {
          font-size: ${props => props.theme.sizeFonts.subtitle};
          font-weight: ${props => props.theme.weightFonts.title};
        }

        p {
          font-size: ${props => props.theme.sizeFonts.text};
          font-weight: ${props => props.theme.weightFonts.subtitle};
        }
      }

      .mktMiddleItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: ${props => props.theme.color.text};

        span {
          font-size: ${props => props.theme.sizeFonts.subtitle};
          font-weight: ${props => props.theme.weightFonts.title};
        }
        p {
          font-size: ${props => props.theme.sizeFonts.text};
          font-weight: ${props => props.theme.weightFonts.subtitle};
        }
      }
    }
      
}
.title{
  display: flex;
  justify-content: center;
  margin: 5rem 0 8rem 0 ;
  h1{
    width: max-content;
    text-align: center;
    background: ${(props) => props.theme.bg.primary};
    color: ${props => props.theme.color.active};
    font-size: ${props => props.theme.sizeFonts.title};
    font-weight: ${props => props.theme.weightFonts.title};
    letter-spacing: 0.25rem;
    border-radius: 6px;
    padding: 1rem;
    box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
  }
}
`;

export const Company = styled(MdAccountBalance)`
  width: 7rem;
  height: 7rem;
`;

export const Business = styled(MdBusinessCenter)`
  width: 7rem;
  height: 7rem;
 
`;

export const AlterCompany = styled(TbTransform)`
  width: 7rem;
  height: 7rem;
`;

export const Calculator = styled(GiCalculator)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;
export const Boxes = styled(BsInboxes)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;
export const Pd = styled(LuNewspaper)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;
export const Society = styled(SlPeople)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;
export const Account = styled(MdOutlineAccountBalance)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;
export const Graph = styled(BsGraphUpArrow)`
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${props => props.theme.bg.quarternary};
`;

export const ServiceContainer = styled.section`
  display: flex;
  margin: 5rem,  0 7rem 0;
  .leftSide{
    
    .flexRow{
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      gap: 2rem;
      
      .text{
        min-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-bottom: 2rem;
        span {
          font-size: 2rem;
          font-weight: 700;
          line-height: 2.5rem;
          color: ${props => props.theme.bg.quarternary};
        }
        p{
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 2rem;
          text-align: end;
          color: ${props => props.theme.bg.quarternary};
          margin-top: 1rem;
        }
      }
    }
  }
  
  .rightSide{
    .flexRow{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-bottom: 2rem;
      gap: 2rem;
    }
    
    .text{
      min-width: 80%;
      margin-bottom: 2rem;
      span {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
        color: ${props => props.theme.bg.quarternary};
      }
      p{
        color: ${props => props.theme.bg.quarternary};
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2rem;
        margin-top: 1rem;
      }
    }
  }

`;

export const backgroundServices = styled.div`
  position: relative;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    text-align: center;
    letter-spacing: 1rem;
    color: ${props => props.theme.bg.quarternary};
    margin-top: -5rem;
    opacity: 0.3;
  }
  .imgLogo{
    position: relative;
    opacity: 0.3;
    height: 100%;
    width: 25vw;
  }
`;
