import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Reveal } from "../../utils/Reveal";
import inss from "../../assets/links/inss.jpg";
import mte from "../../assets/links/MTE.jpg";
import notaFiscal from "../../assets/links/notaFiscal.jpg";
import receitaFederal from "../../assets/links/receitaFederal.jpg";
import receitaEstadual from "../../assets/links/receitaEstadual.jpg";
import redeSim from "../../assets/links/rededim.jpg";
import caixaEconomica from "../../assets/links/caixaEconomica.jpg";
import SimplesNacional from "../../assets/links/SimplesNacional.jpg";
import conselho from "../../assets/links/logo_cfc_vertical.jpg";
import gov from "../../assets/links/logo.png";
import tst from "../../assets/links/tst-tribunal.png";

import * as Sc from './styles';

export function Links() {
  const { theme } = useContext(ThemeContext);

  const images = [
    {
      name: 'inss',
      src: inss,
      site:"https://www.inss.gov.br/"
    },
    {
      name: 'Ministério do Emprego',
      src: mte,
      site:"http://acesso.mte.gov.br"
    },
    {
      name: 'Nota Fiscal',
      src: notaFiscal,
      site:"http://www.nfe.fazenda.gov.br"
    },
    {
      name: 'Receita Federal',
      src: receitaFederal,
      site:"https://www.gov.br/receitafederal/pt-br"
    },
    {
      name: 'Receita Estadual',
      src: receitaEstadual,
      site:"http://acesso.mte.gov.br"
    },
    {
      name: 'Rede Sim',
      src: redeSim,
      site:"https://www.gov.br/empresas-e-negocios/pt-br/redesim"
    },
    {
      name: 'Gov',
      src: gov,
      site:"https://www.gov.br/"
    },
    {
      name: 'Caixa Economica',
      src: caixaEconomica,
      site:"https://www.caixa.gov.br/Paginas/home-caixa.aspx"
    },
    {
      name: 'Simples Nacional',
      src: SimplesNacional,
      site:"https://www8.receita.fazenda.gov.br/SimplesNacional/"
    },
    {
      name: 'Conselho Federal de Contabilidade',
      src: conselho,
      site:"https://cfc.org.br/"
    },
    {
      name: 'Pesquisa de Jusisprudência',
      src: tst,
      site:"https://jurisprudencia.tst.jus.br/"
    }
  ];
  
  return (
    <Sc.Container theme={theme} >
      <div className="header">
        <h1>Links uteis</h1>
      </div>
      <div className="body">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <Reveal>
              <img src={image.src} alt={image.name} />
            </Reveal>
            <div className="titleCard">
              <Reveal>
                <span>{image.name}</span>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </Sc.Container>
  );
}