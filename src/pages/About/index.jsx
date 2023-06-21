import { motion, useAnimation, useInView} from "framer-motion";
import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import LogoOffice from "../../assets/pinheiro-cores.jpg";
import office1 from "../../assets/escritorio-de-contabilidade.jpg";
import office2 from "../../assets/escritorio-contabil.jpg";
import Footer from "../../components/Footer";

import * as Sc from './styles';

export function About() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const controls = useAnimation();
  const slideControls = useAnimation();

  const { theme, handleOpenWhatsapp, whatsappNumber } = useContext(ThemeContext);

  useEffect(() => {
    if(isInView){
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  
  return (
  <>
    <Sc.Container theme={theme} ref={ref}>
      <motion.div 
        className="box-animated"
        variants={{
          hidden: {opacity:0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={controls}
        exit={{opacity: 0, y: 75}}
        transition={{duration: 0.5, delay: 0.25}}
      >
        <img src={LogoOffice} alt="Logo" className='logoPage'/>
        <h1 className='company'>EMPRESA</h1>
        <div className="row">
          <div className="left">
            <p >
              Um escritório contábil que oferece uma ampla gama de serviços financeiros para atender às suas necessidades. Com anos de experiência e uma equipe altamente qualificada, estamos prontos para auxiliá-lo na gestão eficiente das suas finanças e no cumprimento de obrigações fiscais.
            </p>
            <p>
              Nossos serviços abrangem desde a contabilidade básica até a consultoria financeira avançada. Podemos ajudá-lo com a preparação de demonstrações financeiras, balanços patrimoniais e demonstrações de resultados. Além disso, oferecemos suporte completo na gestão de folha de pagamento, incluindo cálculos de salários, benefícios e retenções.
            </p>
          </div>
          <div className="right">
            <img src={office1} alt="Logo"/>
          </div>
        </div>
      </motion.div>

      <div >
        <motion.div
          variants={{
            hidden: {left:0},
            visible: {left: "100%"},
          }}
          initial="hidden"
          animate={slideControls}
          transition={{duration: 0.5, ease:"easeIn"}}
          className="full-row"
        >
          <div>
            <p>
              Nossa equipe de contadores especializados também está preparada para lidar com questões tributárias complexas. Podemos ajudá-lo no planejamento tributário estratégico, buscando a redução de impostos de forma legal e eficiente. Além disso, cuidaremos de todas as obrigações fiscais, como a preparação e envio de declarações de imposto de renda e demais obrigações acessórias.
            </p>
            <p>
              Nosso compromisso é fornecer um atendimento personalizado e soluções sob medida para cada cliente. Valorizamos a confiança e a transparência em nossos relacionamentos comerciais, garantindo que suas informações financeiras sejam tratadas com o mais alto nível de confidencialidade.
            </p>
            <p>
              Se você está procurando um parceiro confiável para lidar com todas as suas necessidades contábeis e financeiras, não hesite em entrar em contato conosco. Estamos ansiosos para ajudá-lo a alcançar o sucesso financeiro e o crescimento sustentável.
            </p>

          </div>
          <div className="contactButtomBox">
            <button onClick={() => handleOpenWhatsapp(whatsappNumber)}> 
              TIRE SUAS DÚVIDAS
            </button>
          </div>
        </motion.div>
      </div>
        
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3, delay: 0.5}}
      >
      
      <h1 className="mission">
        MISSÃO, VISÃO, VALORES E POLÍTICA
      </h1>
      <div className='subtitle'>
        Missão: Nossa missão é fornecer serviços contábeis confiáveis, precisos e personalizados para nossos clientes, ajudando-os a alcançar seus objetivos financeiros e a tomar decisões informadas. Buscamos ser parceiros de confiança, fornecendo soluções inovadoras e orientação especializada em todas as áreas contábeis.
        Valores:
      </div>

        <ul>
          <li> 
            <span>Integridade</span><br /><br /> Agimos com honestidade, ética e transparência em todas as nossas interações e práticas contábeis.
          </li>
          <li>
            <span>Profissionalismo</span><br /><br />Mantemos os mais altos padrões profissionais, fornecendo serviços de qualidade e mantendo a confidencialidade das informações dos nossos clientes.
          </li>
          <li>
            <span>Excelência</span><br /><br /> Buscamos constantemente a excelência em nossos serviços, por meio da melhoria contínua, do desenvolvimento profissional e do uso das melhores práticas contábeis.
          </li>
          <li>
            <span>Orientação ao cliente</span><br /><br /> Colocamos nossos clientes em primeiro lugar, compreendendo suas necessidades individuais e fornecendo soluções personalizadas e orientação especializada.
          </li>
          <li>
            <span>Colaboração</span><br /><br /> Trabalhamos em parceria com nossos clientes, promovendo uma comunicação aberta e colaborativa, e atuamos como uma extensão de sua equipe financeira.
          </li>
      
        </ul>

      <Sc.ImageOffice className="office2">
        <img src={office2} alt="Logo"/>
      </Sc.ImageOffice>

      <div className='subtitle2'>
        Visão: Nossa visão é ser reconhecidos como a empresa de contabilidade líder em nosso mercado, conhecida por nossa excelência, confiabilidade e compromisso com a satisfação do cliente. Buscamos constantemente expandir nossa carteira de clientes, construir relacionamentos duradouros e sermos referência em soluções contábeis inovadoras.
      </div>
      <div className='subtitle'>
        Política de Qualidade: Nossa política de qualidade é baseada em fornecer serviços contábeis de alta qualidade que atendam e excedam as expectativas dos nossos clientes. Para alcançar isso, nos comprometemos com os seguintes princípios:
      </div>

        <ul className='values'>
          <li> 
            <span>Qualidade e precisão</span><br /><br /> Realizamos nossas tarefas com precisão, garantindo a exatidão e integridade dos registros contábeis.
          </li>
          <li>
            <span>Atendimento ao cliente</span><br /><br />Nosso objetivo é oferecer um atendimento excepcional ao cliente, sendo responsivos, proativos e compreendendo plenamente as necessidades dos nossos clientes.
          </li>
          <li>
            <span>Melhoria contínua</span><br /><br /> Buscamos constantemente melhorar nossos processos, sistemas e habilidades por meio da aprendizagem contínua, da adoção de tecnologias inovadoras e da atualização das práticas contábeis.
          </li>
          <li>
            <span>Conformidade regulatória</span><br /><br /> Comprometemo-nos a cumprir todas as leis e regulamentos contábeis, garantindo a conformidade de nossas operações e a segurança dos dados dos nossos clientes.
          </li>
          <li>
            <span>Desenvolvimento da equipe</span><br /><br /> Investimos no desenvolvimento profissional de nossa equipe, proporcionando treinamentos e oportunidades de crescimento, a fim de garantir a competência e o conhecimento atualizado em nossa área de atuação.
          </li>
      
        </ul>
      </motion.div>
    </Sc.Container>
    <Footer />
  </>
  );
}