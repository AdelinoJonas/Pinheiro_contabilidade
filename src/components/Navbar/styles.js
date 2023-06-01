import styled from "styled-components";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";


export const Container = styled.nav`
  width: 100%;
  height: 7rem;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  border: 3px gray;

  section{
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
    h2{
      color: ${props => props.theme.color.active};
      text-transform: uppercase;
      font-weight: ${props => props.theme.weightFonts.title1};
      font-size: ${props => props.theme.sizeFonts.subtitle};
    }

  }
  div{
    display: flex;
    gap: 1rem;

    @media(max-width: 900px){
      display: none;
    } 
  }
  
`;

export const SelectItem = styled(NavLink)`
  all: unset;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.color.links};
  font-size: ${props => props.theme.sizeFonts.links};
  font-weight: ${props => props.theme.weightFonts.links};
  /* text-transform: uppercase; */
    
  &:hover{
    color: ${props => props.theme.color.active};
    font-weight: ${props => props.theme.weightFonts.title1};
    opacity: 0.8;
    transition: all 0.3s;
  }

  &.active {
    color: ${(props) => props.theme.color.active};
    font-weight: ${(props) => props.theme.weightFonts.title1};
    text-transform: uppercase;
  }
`;

export const darkTheme = styled(BsFillMoonStarsFill)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => (props.theme.color.links)};
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.color.active};
    transition: all 0.3s;
    }
    `;

export const lightTheme = styled(BsFillSunFill)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => (props.theme.color.links)};
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.color.active};
    transition: all 0.3s;
    }
  `;
