import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function About () {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  return (
    <Sc.Container theme={theme}>
      <h1>
        Sobre nós <img src="#" alt="toggle theme" />
      </h1>
    </Sc.Container>
  )
}
