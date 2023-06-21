import styled from "styled-components";
import { MdAccountBalance } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { TbTransform } from 'react-icons/tb';


export const Container = styled.div`
  background-color: ${(props) => props.theme.bg.sideFilter};
  padding: 2rem;
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

  .title{
    display: flex;
    justify-content: center;
    margin: 5rem 0 5rem ;
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
  cursor: pointer;

`;

export const Business = styled(MdBusinessCenter)`
  width: 7rem;
  height: 7rem;
  cursor: pointer;

`;

export const AlterCompany = styled(TbTransform)`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  
  `;

