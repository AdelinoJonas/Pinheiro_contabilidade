import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import whatsapp from "../../assets/logowhatsappicon3D.png";
import { Reveal } from '../../utils/Reveal';

export function Home() {
  const navigate = useNavigate();
  const { theme, handleOpenWhatsapp, whatsappNumber } = useContext(ThemeContext);
  
  const slogans = [
    "Simplificando suas finanças com agilidade!",
    "Parceiro confiável para todas as suas necessidades contábeis",
    "Transformando a maneira como você lida com as finanças!",
    "Contabilidade inteligente para o seu negócio!",
    "Gerenciando suas finanças com expertise"
  ];
  
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex(prevIndex => (prevIndex + 1) % slogans.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Sc.Container theme={theme}>
      <motion.div 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 100}}
        transition={{duration: 1, delay: 0.25}}
      >
        <section>
          <span>{slogans[currentSloganIndex]}</span>
        </section>
        <div>
          <button onClick={() => navigate("/services")}>Conheça nossos Serviços</button>
        </div>
          <img src={whatsapp} alt="whatsApp contact" onClick={() => handleOpenWhatsapp(whatsappNumber)}/>
      </motion.div>
    </Sc.Container>
  );
}








