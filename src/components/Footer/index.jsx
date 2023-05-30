import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <Sc.Container theme={theme}>
      <h1>
        Sobre nós
      </h1>
    </Sc.Container>
  )
}
