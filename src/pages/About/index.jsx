import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function About () {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  return (
    <Sc.Container theme={theme}>
      <div>
        <h1>Pinheiro Contabilidade: </h1>
        <span>
          Simplificando suas finanças online!
        </span>
        <button >Entre em Contato</button>
      </div>
    </Sc.Container>
  )
}
