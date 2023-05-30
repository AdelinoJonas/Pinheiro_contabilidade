import styled from "styled-components";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  height: 6rem;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  position: fixed;
  ul{
    display: flex;
    gap: 1.6rem;
  }
  li{
    all: unset;
    cursor: pointer;
    color: ${props => props.theme.color.links};
    font-size: ${props => props.theme.sizeFonts.links};
    font-weight: ${props => props.theme.weightFonts.links};
    
    &:hover{
      text-transform: uppercase;
      color: ${props => props.theme.color.active};
      font-weight: ${props => props.theme.weightFonts.title1};
      opacity: 0.8;
      transition: all 0.6s;
    }
  }
`;

export const SelectItem = styled(NavLink)`
  all: unset;
  text-decoration: none;
  width: inherit;
  height: inherit;
  span {
    flex: 1;
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
  cursor: pointer
`;

export const lightTheme = styled(BsFillSunFill)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => (props.theme.color.links)};
  cursor: pointer
`;