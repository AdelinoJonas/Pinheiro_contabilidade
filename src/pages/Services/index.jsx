import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Reveal } from "../../utils/Reveal";
import pine from "../../assets/pinheiroverticalcores.png";
import iob from "../../assets/customers/parceiroAutorizadoIOB.png";
import Footer from "../../components/Footer";
import * as Sc from './styles';
import whatsapp from "../../assets/logowhatsappicon3D.png";
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
                <Reveal >
                  <div className="pD flexRow">
                    <div className="text">
                      <span>Assessoria Contábil</span>
                      <p>Oferecemos uma ampla gama de serviços de assessoria contábil para atender às necessidades específicas da sua empresa. Nossos profissionais altamente qualificados e experientes estão prontos para fornecer suporte contábil personalizado e orientação especializada.</p>
                    </div>
                    <Sc.Pd theme={theme}/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="pD flexRow">
                    <div className="text">
                      <span>Terceirização da Folha de Pagamento</span>
                      <p>Oferecemos serviços especializados de terceirização de folha de pagamento para empresas que desejam simplificar e otimizar o processo de administração de salários e benefícios dos seus colaboradores. Nossa equipe de especialistas em folha de pagamento está preparada para cuidar de todas as etapas desse processo, garantindo conformidade com as leis trabalhistas e previdenciárias, bem como a segurança e confidencialidade dos dados dos funcionários.</p>
                    </div>
                    <Sc.Pd theme={theme}/>
                  </div>
                </Reveal>
                <Reveal >
                  <div className="openCompany flexRow">
                    <div className="text">
                      <span>Consultoria E-Social</span>
                      <p>
                      Nossa consultoria em eSocial visa garantir que sua empresa esteja em conformidade com todas as obrigações legais relacionadas ao sistema. Trabalhamos de forma personalizada, adaptando nossos serviços às necessidades específicas da sua organização, auxiliando na otimização de processos e na redução de riscos.
                        </p>
                    </div>
                    <Sc.Society theme={theme}/>
                  </div>
                  </Reveal>
              </div>

              <Sc.BackgroundServices theme={theme}>
                <img src={pine} alt="logo" className='imgLogo'/>
                <img src={pine} alt="logo" className='imgLogo'/>
              </Sc.BackgroundServices >

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
                  <div className="openCompany flexRow">
                    <div className="text">
                      <span>Consultoria Fiscal, Contábil e Folha de Pagamento</span>
                      <p>
                      Nossa equipe está atualizada com as mudanças nas leis fiscais e contábeis, garantindo que sua empresa esteja em conformidade com as obrigações legais em constante evolução. Além disso, priorizamos a confidencialidade e a segurança dos dados da sua empresa.
                        </p>
                    </div>
                    <Sc.Society theme={theme}/>
                  </div>
                  </Reveal>
                  <Reveal >
                  <div className="openCompany flexRow">
                    <div className="text">
                      <span>Consultoria ECD e ECF</span>
                      <p>
                      Nossa consultoria em ECD e ECF tem como objetivo principal garantir que sua empresa esteja em conformidade com todas as obrigações legais relacionadas a essas obrigações acessórias. Trabalhamos de forma personalizada, adaptando nossos serviços às necessidades específicas da sua organização.
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
                <a href="https://iob.com.br/" target="_blank" rel="noopener noreferrer">
                  <img src={iob} alt="IOB Autorizado" />
                </a>
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