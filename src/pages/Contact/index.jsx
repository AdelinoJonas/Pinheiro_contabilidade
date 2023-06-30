import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import logo from "../../assets/pinheirocores.jpg";
import Footer from "../../components/Footer";
import { Reveal } from "../../utils/Reveal";
import * as Sc from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Map from '../../components/Map';


export function Contact() {
  const { theme } = useContext(ThemeContext);
  const slogans = [
    "Maximize seu potencial financeiro. Entre em contato e deixe-nos otimizar sua contabilidade.",
    "A contabilidade eficiente é o caminho para o sucesso. Conecte-se conosco e alcance novos patamares.",
    "Simplifique sua vida financeira. Ligue para nós e descubra como podemos facilitar sua contabilidade.",
    "Não deixe suas finanças ao acaso. Contate-nos agora mesmo e garanta uma contabilidade sólida e confiável.",
    "Descubra o poder da contabilidade estratégica. Marque uma consulta conosco e impulsione seu negócio.",
    "Desvende o potencial oculto de suas finanças. Entre em contato e desfrute de uma contabilidade de alto nível.",
    "Não deixe que números se tornem obstáculos. Entre em contato e vamos resolver seus desafios contábeis juntos.",
    "A contabilidade inteligente impulsiona o crescimento. Conecte-se conosco e impulsione seu negócio rumo ao sucesso.",
    "Sucesso financeiro começa com uma contabilidade sólida. Ligue para nós e garanta um futuro próspero.",
    "Mude a perspectiva do seu negócio com uma contabilidade eficiente. Entre em contato e veja a diferença."
  ];
  
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  const latitude = -25.4579974;
  const longitude = -49.3443576;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex(prevIndex => (prevIndex + 1) % slogans.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Sc.Container theme={theme} >
      <motion.div 
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1, delay: 0.25}} className="header">
        <h1>contato</h1>
        <img src={logo} alt="logo" />
      </motion.div>
      <div className="sectionBox">
        <section>
          <Reveal >
            <span>{slogans[currentSloganIndex]}</span>
          </Reveal>
        </section>
      </div>
      <div className="bodyContact">
        <div className="left">
          <Reveal >
            <div className="contact-box">
            <Reveal >
              <div className="contact">
                <div className="contact-item">
                  <Sc.Email />
                  <h3>E-mail</h3>
                </div>
                <span>rcpcontadora@gmail.com</span>
              </div>
            </Reveal>
            <Reveal >
              <div className="contact">
                <div className="contact-item">
                  <Sc.Phone />
                  <h3>Telefone</h3>
                </div>
                <span>(41) 9 9637-6899</span>
              </div>
            </Reveal>
            <Reveal >
              <div className="contact">
                <div className="contact-item">
                  <Sc.WhatsApp />
                  <h3>WhatsApp</h3>
                </div>
                <span>(41) 9 9637-6899</span>
              </div>
            </Reveal>
            <Reveal >
              <div className="contact">
                <div className="contact-item">
                  <Sc.Telegram />
                  <h3>Telegram</h3>
                </div>
                <span>(41) 9 9637-6899</span>
              </div>
            </Reveal>
            <Reveal >
              <div className="contact">
                <div className="contact-item">
                  <Sc.Instagram />
                  <h3>Instagram</h3>
                </div>
                <span>@pinheirocontabilidade</span>
              </div>
            </Reveal>
            </div>
          </Reveal>
        </div>
        <motion.div 
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1, delay: 0.25}} className="right"
        >
          <div className="location">
            <Sc.Location />
            <h3>Localização:</h3>
          </div>
          <span>R. João Tokarski, 210 - Cidade Industrial de Curitiba</span>
          <div className="location">
            <Map latitude={latitude} longitude={longitude} />
          </div>

        </motion.div>
      </div>
      <Reveal >
        <div className="location">
          <div className="map">
          </div>
        </div>
      </Reveal>
      <Footer />
    </Sc.Container>
  );
}