import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import LogoOffice from "../../assets/pinheirocores.jpg";
import { Reveal } from "../../utils/Reveal";
import office1 from "../../assets/escritoriodecontabilidade.jpg";
import office2 from "../../assets/escritoriocontabil.jpg";
import Footer from "../../components/Footer";
import whatsapp from "../../assets/logowhatsappicon3D.png";
import * as Sc from './styles';
import { motion } from 'framer-motion';

export function About() {
  const { theme, handleOpenWhatsapp, whatsappNumber } = useContext(ThemeContext);
  
  return (
    <Sc.Container theme={theme} >
      <div className="content">
        <div className="sectionBox">
          <Reveal >
            <header style={{ width:"100%",
              display:"flex",
              justifyContent:"center", 
              alignItems:"center",
              marginBottom: "5rem"
            }}>
              <img src={LogoOffice} alt="Logo" style={{ width:"80%",
              borderRadius: "24px",
              boxShadow: "9px 11px 23px -2px rgba(142, 202, 179, 0.76)"
            }}/>
            </header>
          </Reveal>
          <div>
            <Reveal >
            <h1 className='company'>EMPRESA</h1>
            </Reveal>
            <div className="row">
              <div className="left">
              <Reveal>
                <p >
                  Um escritório contábil que oferece uma ampla gama de serviços financeiros para atender às suas necessidades. Com anos de experiência e uma equipe altamente qualificada, estamos prontos para auxiliá-lo na gestão eficiente das suas finanças e no cumprimento de obrigações fiscais.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Nossos serviços abrangem desde a contabilidade básica até a consultoria financeira avançada. Podemos ajudá-lo com a preparação de demonstrações financeiras, balanços patrimoniais e demonstrações de resultados. Além disso, oferecemos suporte completo na gestão de folha de pagamento, incluindo cálculos de salários, benefícios e retenções.
                </p>
              </Reveal>
              </div>

              <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 1, delay: 0.25}}
                className="right"
              >
              
                <img src={office1} alt="accounting table"/>
              
              </motion.div>

            </div>
          </div>

          <div className="full-row">
            <div>
              <Reveal>
                <p>
                  Nossa equipe de contadores especializados também está preparada para lidar com questões tributárias complexas. Podemos ajudá-lo no planejamento tributário estratégico, buscando a redução de impostos de forma legal e eficiente. Além disso, cuidaremos de todas as obrigações fiscais, como a preparação e envio de declarações de imposto de renda e demais obrigações acessórias.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Nosso compromisso é fornecer um atendimento personalizado e soluções sob medida para cada cliente. Valorizamos a confiança e a transparência em nossos relacionamentos comerciais, garantindo que suas informações financeiras sejam tratadas com o mais alto nível de confidencialidade.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Se você está procurando um parceiro confiável para lidar com todas as suas necessidades contábeis e financeiras, não hesite em entrar em contato conosco. Estamos ansiosos para ajudá-lo a alcançar o sucesso financeiro e o crescimento sustentável.
                </p>
              </Reveal>
            </div>
              <motion.div 
                initial={{opacity: 0, x: -500}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -500}}
                transition={{duration: 2, delay: 0.2}} className="contactButtomBox"
                >
                <button onClick={() => handleOpenWhatsapp(whatsappNumber)}> 
                  TIRE SUAS DÚVIDAS
                </button>
              </motion.div>
          </div>
        </div>

        <div>
          <Reveal>
          <h1 className="mission">
            MISSÃO, VISÃO, VALORES E POLÍTICA
          </h1>
          </Reveal>
          <Reveal>
          <div className='subtitle'>
            Missão: Nossa missão é fornecer serviços contábeis confiáveis, precisos e personalizados para nossos clientes, ajudando-os a alcançar seus objetivos financeiros e a tomar decisões informadas. Buscamos ser parceiros de confiança, fornecendo soluções inovadoras e orientação especializada em todas as áreas contábeis.
            Valores:
          </div>
          </Reveal>

            <ul>
              <li> 
              <Reveal>
                <span>Integridade</span>
                <br /><br /> <p>
                  Agimos com honestidade, ética e transparência em todas as nossas interações e práticas contábeis.
                </p>
              </Reveal>
              </li>
              <li>
              <Reveal>
                <span>Profissionalismo</span><br /><br />
                <p>
                  Mantemos os mais altos padrões profissionais, fornecendo serviços de qualidade e mantendo a confidencialidade das informações dos nossos clientes.
                </p>
              </Reveal>
              </li>
              <li>
              <Reveal>
                <span>Excelência</span><br /><br /> <p>
                  Buscamos constantemente a excelência em nossos serviços, por meio da melhoria contínua, do desenvolvimento profissional e do uso das melhores práticas contábeis
                </p>
              </Reveal>
              </li>
              <li>
              <Reveal>
                <span>Orientação ao cliente</span><br /><br /> 
                <p>
                  Colocamos nossos clientes em primeiro lugar, compreendendo suas necessidades individuais e fornecendo soluções personalizadas e orientação especializada.
                </p>
              </Reveal>
              </li>
              <li>
              <Reveal>
                <span>Colaboração</span><br /><br />
                <p>
                  Trabalhamos em parceria com nossos clientes, promovendo uma comunicação aberta e colaborativa, e atuamos como uma extensão de sua equipe financeira.
                </p> 
              </Reveal>
              </li>
          
            </ul>
          <Reveal>
            <Sc.ImageOffice className="office2">
              <img src={office2} alt="Logo"/>
            </Sc.ImageOffice>
          </Reveal>
          <Reveal>
          <div className='subtitle2'>
            Visão: Nossa visão é ser reconhecidos como a empresa de contabilidade líder em nosso mercado, conhecida por nossa excelência, confiabilidade e compromisso com a satisfação do cliente. Buscamos constantemente expandir nossa carteira de clientes, construir relacionamentos duradouros e sermos referência em soluções contábeis inovadoras.
          </div>
          </Reveal>
          <Reveal>
          <div className='subtitle'>
            Política de Qualidade: Nossa política de qualidade é baseada em fornecer serviços contábeis de alta qualidade que atendam e excedam as expectativas dos nossos clientes. Para alcançar isso, nos comprometemos com os seguintes princípios:
          </div>
          </Reveal>
          <ul>
            <li> 

            <Reveal>
              <span>Qualidade e precisão</span><br /><br /> 
              <p>
                Realizamos nossas tarefas com precisão, garantindo a exatidão e integridade dos registros contábeis.
              </p>
              </Reveal>
            </li>
            <li>
            <Reveal>
              <span>Atendimento ao cliente</span><br /><br />
              <p>
                Nosso objetivo é oferecer um atendimento excepcional ao cliente, sendo responsivos, proativos e compreendendo plenamente as necessidades dos nossos clientes.
              </p>
              </Reveal>
            </li>
            <li>
            <Reveal>
              <span>Melhoria contínua</span><br /><br />
              <p>
                Buscamos constantemente melhorar nossos processos, sistemas e habilidades por meio da aprendizagem contínua, da adoção de tecnologias inovadoras e da atualização das práticas contábeis.
              </p>
              </Reveal>
            </li>
            <li>
            <Reveal>
              <span>Conformidade regulatória</span><br /><br /> 
              <p>
                Comprometemo-nos a cumprir todas as leis e regulamentos contábeis, garantindo a conformidade de nossas operações e a segurança dos dados dos nossos clientes.
              </p>
              </Reveal>
            </li>
            <li>
            <Reveal>
              <span>Desenvolvimento da equipe</span><br /><br /> 
              <p>
                Investimos no desenvolvimento profissional de nossa equipe, proporcionando treinamentos e oportunidades de crescimento, a fim de garantir a competência e o conhecimento atualizado em nossa área de atuação.
              </p>
              </Reveal>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="footer">
        <Reveal>
          <img src={whatsapp} onClick={() => handleOpenWhatsapp(whatsappNumber)} alt="whatsApp contact"/>
        </Reveal>
        <Reveal >
          <Footer/>
        </Reveal>
      </div>
    </Sc.Container>
  );
}