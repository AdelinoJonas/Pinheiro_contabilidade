import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import nho from "../../assets/customers/nho.jpeg";
import lelulita from "../../assets/customers/lelulita.jpg";
import aguia from "../../assets/customers/aguia.jpeg";
import boxecoville from "../../assets/customers/boxecoville.jpeg";
import dure from "../../assets/customers/dure.jpeg";
import exalt from "../../assets/customers/exalt.jpeg";
import gge from "../../assets/customers/gge.jpeg";
import ljr from "../../assets/customers/ljr.jpeg";
import oticaMartins from "../../assets/customers/oticaMartins.png";
import luanna_barros from "../../assets/customers/luanna_barros.jpeg";
import iob from "../../assets/customers/iob.png";
import odonto from "../../assets/customers/odonto.jpg";
import piadoqueijo from "../../assets/customers/piadoqueijo.jpeg";
import seven_coffee from "../../assets/customers/seven_coffee.jpeg";

import { Reveal } from "../../utils/Reveal";
import * as Sc from './styles';

export function Customers() {
  const { theme } = useContext(ThemeContext);
  
  const images = [
    {
      name: 'nho',
      src: nho,
      site:"https://www.nhoalimentos.com.br/"
    },
    {
      name: 'lelulita',
      src: lelulita,
    },
    {
      name: 'aguia',
      src: aguia,
    },
    {
      name: 'boxecoville',
      src: boxecoville,
    },
    {
      name: 'dure',
      src: dure,
    },
    {
      name: 'exalt',
      src: exalt,
    },
    {
      name: 'gge',
      src: gge,
    },
    {
      name: 'ljr',
      src: ljr,
    },
    {
      name: 'luanna_barros',
      src: luanna_barros,
    },
    {
      name: 'oticaMartins',
      src: oticaMartins,
    },
    {
      name: 'seven_coffee',
      src: seven_coffee,
    },
    {
      name: 'iob',
      src: iob,
    },
    {
      name: 'odonto',
      src: odonto,
    },
    {
      name: 'pia do queijo',
      src: piadoqueijo,
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