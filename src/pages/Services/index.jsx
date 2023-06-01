import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import { motion } from 'framer-motion';

export function Services() {
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
          <h1> SERVICES </h1>
        </div>
      </Sc.Container>
    </motion.div>
  );
}