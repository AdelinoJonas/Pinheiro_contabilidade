import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';
import { motion } from 'framer-motion';

export function News() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
   
  return (
    <motion.div 
      initial={{x: 1000}}
      animate={{x: 0}}
      exit={{x: window.innerWidth, transition:{duration: 0.1}}}
    >
      <Sc.Container theme={theme}>
        <div>
          <h1> NOTÍCIAS </h1>
        </div>
      </Sc.Container>
    </motion.div>
  );
}