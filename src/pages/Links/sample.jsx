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
          <a href="http://acesso.mte.gov.br/data/files/FF8080812BCB2790012BCB6D37AD2F14/in_19891107_01.pdf">http://acesso.mte.gov.br/data/files/FF8080812BCB2790012BCB6D37AD2F14/in_19891107_01.pdf</a>

          <a href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'>http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>

          <a href='http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm'>http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm</a>

          <a href='http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'>http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm</a>

          <a href='https://jurisprudencia.tst.jus.br/?tipoJuris=SUM&orgao=TST&pesquisar=1'>https://jurisprudencia.tst.jus.br/?tipoJuris=SUM&orgao=TST&pesquisar=1</a>

          <a href='https://jurisprudencia.tst.jus.br/?tipoJuris=OJ&orgao=TST&pesquisar=1'>https://jurisprudencia.tst.jus.br/?tipoJuris=OJ&orgao=TST&pesquisar=1</a>
          
          <a href='https://enquadramento.fecomercio.com.br/'>https://enquadramento.fecomercio.com.br/</a>

          <a href='https://in.gov.br/en/web/dou/-/portaria-359094139'>https://in.gov.br/en/web/dou/-/portaria-359094139</a>

          <a href='https://www.gov.br/receitafederal/pt-br'>https://www.gov.br/receitafederal/pt-br</a>

          <a href='https://www8.receita.fazenda.gov.br/SimplesNacional/'>https://www8.receita.fazenda.gov.br/SimplesNacional/</a>

          <a href='https://www.gov.br/empresas-e-negocios/pt-br/empreendedor'>https://www.gov.br/empresas-e-negocios/pt-br/empreendedor</a>

          <a href='https://www.gov.br/empresas-e-negocios/pt-br/redesim'>https://www.gov.br/empresas-e-negocios/pt-br/redesim</a>

          <a href='https://cfc.org.br/'>https://cfc.org.br/</a>
          
          <a href='https://receita.pr.gov.br/login'>LINK RECEITA ESTADUAL</a>
          
        </div>
      </Sc.Container>
    </motion.div>
  );
}