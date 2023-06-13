import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Home() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  
  const slogans = [
    "Simplificando suas finanças online!",
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
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Sc.Container theme={theme}>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <section>
            <span>{slogans[currentSloganIndex]}</span>
          </section>
          <button onClick={() => navigate("/services")}>Conheça nossos Serviços</button>
        </motion.div>
      </Sc.Container>
    </motion.div>
  );
}








