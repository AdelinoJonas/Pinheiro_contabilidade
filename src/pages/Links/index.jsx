import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import { motion } from 'framer-motion';

export function Links() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
   
  return (
    <motion.div 
      initial={{x: 1000}}
      animate={{x: 0}}
      exit={{x: window.innerWidth, transition:{duration: 0.1}}}
    >
      <Sc.Container theme={theme}>
        <div>
          <h1> LINKS ÚTEIS </h1>
          <h2>
          http://acesso.mte.gov.br/data/files/FF8080812BCB2790012BCB6D37AD2F14/in_19891107_01.pdf</h2>

          <h2>http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</h2>

          <h2>http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm</h2>

          <h2>http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm</h2>

          <h2>https://jurisprudencia.tst.jus.br/?tipoJuris=SUM&orgao=TST&pesquisar=1</h2>

          <h2>https://jurisprudencia.tst.jus.br/?tipoJuris=OJ&orgao=TST&pesquisar=1</h2>
          
          <h2>https://enquadramento.fecomercio.com.br/</h2>

          <h2>https://in.gov.br/en/web/dou/-/portaria-359094139</h2>

          <h2>https://www.gov.br/receitafederal/pt-br</h2>

          <h2>https://www8.receita.fazenda.gov.br/SimplesNacional/</h2>

          <h2>https://www.gov.br/empresas-e-negocios/pt-br/empreendedor</h2>

          <h2>https://www.gov.br/empresas-e-negocios/pt-br/redesim</h2>

          <h2>https://cfc.org.br/</h2>
          
          <h2>LINK RECEITA ESTADUAL</h2>
          
        </div>
      </Sc.Container>
    </motion.div>
  );
}