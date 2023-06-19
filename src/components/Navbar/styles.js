import styled from "styled-components";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";


export const Container = styled.nav`
  height: 100vh;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 3rem 2rem;
  border: 3px gray;

  section{
    width: 95%;
    height: 32%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${(props) => props.theme.bg.tertiary};
    border-radius: 50%;

    img {
      width: 80%;
      height: 80%;
      margin-top: -1rem;
    }
  }
  div{
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  
  `;

export const SelectItem = styled(NavLink)`
  all: unset;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.color.links};
  font-size: ${props => props.theme.sizeFonts.subtitle};
  font-weight: ${props => props.theme.weightFonts.links};
  
  padding: 1.3rem;
  border-top: 2px solid rgba(245, 244, 244, 0.575);
    
  &:hover{
    color: ${props => props.theme.color.active};
    font-weight: ${props => props.theme.weightFonts.title1};
    opacity: 0.8;
    transition: all 0.3s;
    background: rgba(245, 244, 244, 0.275);
  }

  &.active {
    color: ${(props) => props.theme.color.active};
    font-weight: ${(props) => props.theme.weightFonts.title1};
    text-transform: uppercase;
  }
`;

export const ToggleTheme = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
`;

export const ToggleContainer = styled.label`
  display: inline-block;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(245, 244, 244, 0.251);
  position: relative;
  cursor: pointer;
  border: 2px solid #07351f;

`;

export const ToggleBall = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #7ea291;
  background-color: #07351f;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease-in-out;
  left: ${({ isActive }) => (isActive ? 'calc(100% - 35px)' : '5px')};
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const DarkTheme = styled(BsFillMoonStarsFill)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => (props.theme.color.toggleTheme)};
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.color.toggleTheme};
    transition: all 0.3s;
    }
  `;

export const LightTheme = styled(BsFillSunFill)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => (props.theme.color.toggleTheme)};
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.color.toggleTheme};
    transition: all 0.3s;
    }
  `;
