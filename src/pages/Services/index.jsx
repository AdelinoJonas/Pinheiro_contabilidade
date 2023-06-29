import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Reveal } from "../../utils/Reveal";
import pine from "../../assets/pine-logo.png";
import iob from "../../assets/customers/parceiroAutorizadoIOB.png";
import Footer from "../../components/Footer";
import * as Sc from './styles';
import whatsapp from "../../assets/logo_whatsapp_icon3D.png";
import { motion } from 'framer-motion';

export function Services() {
  const { theme, handleOpenWhatsapp, whatsappNumber } = useContext(ThemeContext);
  
  return (
      <>
        <Sc.Container theme={theme} >
          <div className="content">

            <div className="mktBox">
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{duration: 1, delay: 0.25}} 
                className="mktItem">
                <div className="image">

                <Sc.Company/> 
                </div>
                <span>Já tem sua empresa?</span> 
                <p>Fazemos sua contabilidade</p>
              </motion.div>
              <motion.div 
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -100}}
                transition={{duration: 1, delay: 0.25}}
                className="mktMiddleItem"
              >
                <div className="image">

                <Sc.Business/>
                </div>
                <span>Deseja abrir sua empresa?</span> 
                <p>Te explicamos e cuidamos de tudo pra você</p>
              </motion.div>
              <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 1, delay: 0.25}}
                className="mktItem">
                <div className="image">

                <Sc.AlterCompany/>
                </div>
                <span>Sua empresa é MEI?</span> 
                <p>Transformamos MEI em ME</p>
              </motion.div>
            </div>
            
            <Reveal >
              <div className='title' >
                <h1>PRINCIPAIS SERVIÇOS</h1>
              </div>
            </Reveal>
            
            <Sc.ServiceContainer theme={theme}>
              <div className="leftSide">
                <Reveal >
                  <div className="flexRow">
                    <div className="text">
                      <span>Contabilidade</span> 
                      <p>Nosso departamento contábil está pronto a atender as necessidades legais da sua empresa.</p> 
                    </div>
                    <Sc.Calculator theme={theme}/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="control flexRow">
                    <div className="text">
                      <span>Fiscal</span>
                      <p>Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.</p>
                    </div>
                    <Sc.Boxes theme={theme}/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="pD flexRow">
                    <div className="text">
                      <span>Departamento Pessoal</span>
                      <p>Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.</p>
                    </div>
                    <Sc.Pd theme={theme}/>
                  </div>
                </Reveal>
              </div>

              <Sc.backgroundServices theme={theme}>
                <h1>PINHEIRO</h1>
                <img src={pine} alt="logo" className='imgLogo'/>
                <h1>CONTABILIDADE</h1>
              </Sc.backgroundServices >

              <div className="rightSide">

                <Reveal >
                  <div className="society flexRow">
                    <div className="text">
                      <span>Sociétario</span>
                      <p>Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.</p>
                    </div>
                    <Sc.Account theme={theme}/>
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
                    <Sc.Society theme={theme}/>
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
                    <Sc.Graph theme={theme}/>
                  </div>
                </Reveal>
              </div>
            </Sc.ServiceContainer>

              <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{duration: 1, delay: 0.25}} className="iob"
                theme={theme}
              >
                <img src={iob} alt="IOB Autorizado" />
                <span>Parceiro Onboarding da IOB TECH - líder do mercado contábil. Realizamos instalações, Importações XML e-Social, Consultoria do sistema IOB Gestão Contábil.</span>
              </motion.div>

            <Reveal>
              <div className="contactButton">
              <img src={whatsapp} onClick={() => handleOpenWhatsapp(whatsappNumber)} alt="whatsApp contact"/>
              </div>
            </Reveal>
                        
          </div>
          <div className="footer">
            <Reveal >
              <Footer/>
            </Reveal>
          </div>
        </Sc.Container>
    </>
  );
}