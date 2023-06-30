import styled from "styled-components";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { RiMenuLine } from 'react-icons/ri';
import { NavLink } from "react-router-dom";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 555;
`;

export const Container = styled.nav`
  height: 100vh;
  width: 35%;
  background: ${(props) => props.theme.bg.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 3rem 2rem;
  border: 3px gray;
    @media(max-width: 700px){
      width: 180px;
    } 

  section{
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${(props) => props.theme.bg.tertiary};
    border-radius: 50%;

    img {
      width: 80%;
      height: 80%;
      margin-top: -2rem;
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
  
  padding: 1.5rem;
  border-top: 2px solid rgba(245, 244, 244, 0.575);
    
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

export const Menu = styled(RiMenuLine)`
  width: 4rem;
  height: 4rem;
  color: #FFF;
  cursor: pointer;

  &:hover{
    color: #FFF;
    transition: all 0.3s;
    }
  `;