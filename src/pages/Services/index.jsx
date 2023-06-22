import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Reveal } from "../../utils/Reveal";
import pine from "../../assets/pine-logo.png";
import Footer from "../../components/Footer";
import * as Sc from './styles';

export function Services() {
  const { theme } = useContext(ThemeContext);
  
  return (
      <>
        <Sc.Container theme={theme} >
          <div className="mktBox">
            <div className="mktItem">
              <div className="image">

              <Sc.Company/> 
              </div>
              <span>Já sem sua empresa?</span> 
              <p>Fazemos sua contabilidade</p>
            </div>
            <div className="mktMiddleItem">
              <div className="image">

              <Sc.Business/>
              </div>
              <span>Deseja abrir sua empresa?</span> 
              <p>Te explicamos e cuidamos de tudo pra você</p>
            </div>
            <div className="mktItem">
              <div className="image">

              <Sc.AlterCompany/>
              </div>
              <span>Sua empresa é MEI?</span> 
              <p>Transformamos MEI em ME</p>
            </div>
          </div>
          
          <Reveal >
            <div className='title' >
              <h1>PRINCIPAIS SERVIÇOS</h1>
            </div>
          </Reveal>
            
            <Sc.ServiceContainer>
              <div className="leftSide">
                <Reveal >
                  <div className="flexRow">
                    <div className="text">
                      <span>Contabilidade</span> 
                      <p>Nosso departamento contábil está pronto a atender as necessidades legais da sua empresa.</p> 
                    </div>
                    <Sc.Calculator/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="control flexRow">
                    <div className="text">
                      <span>Fiscal</span>
                      <p>Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.</p>
                    </div>
                    <Sc.Boxes/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="pD flexRow">
                    <div className="text">
                      <span>Departamento Pessoal</span>
                      <p>Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.</p>
                    </div>
                    <Sc.Pd/>
                  </div>
                </Reveal>
              </div>

              <Sc.backgroundServices >
                <img src={pine} alt="logo" className='imgLogo'/>
              </Sc.backgroundServices >

              <div className="rightSide">

                <Reveal >
                  <div className="society flexRow">
                    <div className="text">
                      <span>Sociétario</span>
                      <p>Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.</p>
                    </div>
                    <Sc.Account/>
                  </div>
                  </Reveal>
                  <Reveal >
                  <div className="openCompany flexRow">
                    <div className="text">
                      <span>Abertura De Empresa</span>
                      <p>
                        Abra sua empresa com a estrutura societária mais adequada, sempre com foco na economia tributária.
                        </p>
                    </div>
                    <Sc.Society/>
                  </div>
                  </Reveal>
                  <Reveal >
                  <div className="accountingIntegration flexRow">
                    <div className="text">
                      <span>Integração Contábil</span>
                      <p>
                        Dispensando o lançamento manual das informações, agilizando o processo e reduzindo a possibilidade de erros.
                      </p>
                    </div>
                    <Sc.Graph/>
                  </div>
                </Reveal>
              </div>
            </Sc.ServiceContainer>
        </Sc.Container>
      <Reveal >
        <div className="d">

        <Footer/>
        </div>
      </Reveal>
    </>
  );
}