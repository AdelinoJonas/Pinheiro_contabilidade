import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import nho from "../../assets/customers/nhô_alimentos.png";
import lelulita from "../../assets/customers/lelulita.jpg";
import { Reveal } from "../../utils/Reveal";
import * as Sc from './styles';

export function Customers() {
  const { theme } = useContext(ThemeContext);
  
  const images = [
    {
      name: 'inss',
      src: nho,
      site:"https://www.nhoalimentos.com.br/"
    },
    {
      name: 'Ministério do Emprego',
      src: lelulita,
    }
  ];

  return (
    <Sc.Container theme={theme} >
      <div className="body">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <Reveal>
              <img src={image.src} alt={image.name} />
            </Reveal>
          </div>
        ))}
      </div>
    </Sc.Container>
  );
}