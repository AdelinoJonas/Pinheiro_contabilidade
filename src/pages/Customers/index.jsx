import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function Customers() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
   
  return (
    <Sc.Container theme={theme}>
      <div>
        <h1>CLIENTES</h1>
      </div>
    </Sc.Container>
  );
}