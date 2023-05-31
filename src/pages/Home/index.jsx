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
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: -window.innerHeight}}
    >
      <Sc.Container theme={theme}>
        <div>
          <section>
            <span>{slogans[currentSloganIndex]}</span>
          </section>
          <button onClick={() => navigate("/services")}>Serviços</button>
        </div>
      </Sc.Container>
    </motion.div>
  );
}








