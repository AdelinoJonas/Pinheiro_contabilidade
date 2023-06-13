import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

export function About() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
   
  return (
    <motion.div 
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: -window.innerWidth, transition:{duration: 0.1}}}
    >
    <Sc.Container theme={theme}>
      <div>
        <h1>
          ABOUT
        </h1>
        <p>Apresentamos a Pinheiro contabilidade, um escritório contábil que oferece uma ampla gama de serviços financeiros para atender às suas necessidades. Com anos de experiência e uma equipe altamente qualificada, estamos prontos para auxiliá-lo na gestão eficiente das suas finanças e no cumprimento de obrigações fiscais.</p>
        <p>
        Nossos serviços abrangem desde a contabilidade básica até a consultoria financeira avançada. Podemos ajudá-lo com a preparação de demonstrações financeiras, balanços patrimoniais e demonstrações de resultados. Além disso, oferecemos suporte completo na gestão de folha de pagamento, incluindo cálculos de salários, benefícios e retenções.
        </p>
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
      <div>
      <h2>MISSÃO, VISÃO, VALORES E POLÍTICA</h2>

<h2>Missão: Nossa missão é fornecer serviços contábeis confiáveis, precisos e personalizados para nossos clientes, ajudando-os a alcançar seus objetivos financeiros e a tomar decisões informadas. Buscamos ser parceiros de confiança, fornecendo soluções inovadoras e orientação especializada em todas as áreas contábeis.
Valores:</h2>
1.	Integridade: Agimos com honestidade, ética e transparência em todas as nossas interações e práticas contábeis.
2.	Profissionalismo: Mantemos os mais altos padrões profissionais, fornecendo serviços de qualidade e mantendo a confidencialidade das informações dos nossos clientes.
3.	Excelência: Buscamos constantemente a excelência em nossos serviços, por meio da melhoria contínua, do desenvolvimento profissional e do uso das melhores práticas contábeis.
4.	Orientação ao cliente: Colocamos nossos clientes em primeiro lugar, compreendendo suas necessidades individuais e fornecendo soluções personalizadas e orientação especializada.
5.	Colaboração: Trabalhamos em parceria com nossos clientes, promovendo uma comunicação aberta e colaborativa, e atuamos como uma extensão de sua equipe financeira.
Visão: Nossa visão é ser reconhecidos como a empresa de contabilidade líder em nosso mercado, conhecida por nossa excelência, confiabilidade e compromisso com a satisfação do cliente. Buscamos constantemente expandir nossa carteira de clientes, construir relacionamentos duradouros e sermos referência em soluções contábeis inovadoras.
Política de Qualidade: Nossa política de qualidade é baseada em fornecer serviços contábeis de alta qualidade que atendam e excedam as expectativas dos nossos clientes. Para alcançar isso, nos comprometemos com os seguintes princípios:
1.	Qualidade e precisão: Realizamos nossas tarefas com precisão, garantindo a exatidão e integridade dos registros contábeis.
2.	Atendimento ao cliente: Nosso objetivo é oferecer um atendimento excepcional ao cliente, sendo responsivos, proativos e compreendendo plenamente as necessidades dos nossos clientes.
3.	Melhoria contínua: Buscamos constantemente melhorar nossos processos, sistemas e habilidades por meio da aprendizagem contínua, da adoção de tecnologias inovadoras e da atualização das práticas contábeis.
4.	Conformidade regulatória: Comprometemo-nos a cumprir todas as leis e regulamentos contábeis, garantindo a conformidade de nossas operações e a segurança dos dados dos nossos clientes.
5.	Desenvolvimento da equipe: Investimos no desenvolvimento profissional de nossa equipe, proporcionando treinamentos e oportunidades de crescimento, a fim de garantir a competência e o conhecimento atualizado em nossa área de atuação.

      </div>
    </Sc.Container>
    </motion.div>
  );
}