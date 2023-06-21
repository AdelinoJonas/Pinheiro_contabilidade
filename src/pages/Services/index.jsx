import { motion } from "framer-motion";
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import * as Sc from './styles';

const textAnimate={
  offscreen: {y:100, opacity: 0},
  onscreen: {y:0,
    opacity:1,
  transition: {type:"spring",
  bounce: 0.2,
  duration: 3}
  }
}

export function Services() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  
  return (
    <Sc.Container theme={theme}>

      <motion.div 
        // className="collection" 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.1}}
        transition={{staggerChildren:0.5}}
      >

        <motion.div 
          className="sectionBox"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={textAnimate}
          >
              TESTING
          <motion.h1
            variants={textAnimate}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias laborum dolore, consequatur beatae accusamus. Aspernatur excepturi facere iste sint, numquam officiis iure provident in. Laboriosam quos beatae odit assumenda sunt quibusdam exercitationem natus doloribus culpa consequatur, error nesciunt voluptates eligendi expedita consequuntur veniam, porro eos! Nam, sint sequi excepturi, voluptatem nisi pariatur magnam error aspernatur ducimus voluptate quo iusto! Laborum necessitatibus, provident aperiam alias recusandae nostrum harum unde voluptate pariatur voluptas quam odit non. Ipsa vitae nulla ipsum, iusto sint, aut at recusandae sed ut cum doloribus, aliquid facere incidunt quaerat! At voluptas sequi distinctio excepturi quia repellendus, iste laudantium alias vel voluptate quibusdam officiis a recusandae voluptatum incidunt? Nulla totam, quos magni voluptatibus eveniet in adipisci quis nam! Rem natus, beatae tenetur et expedita magnam iste. Voluptates maiores tempora, officia vel nihil voluptatem ex. Sapiente voluptatem non omnis, molestiae eveniet, suscipit, debitis atque magnam voluptate quibusdam quaerat doloribus. 
          </motion.h1>
        </motion.div>

        <motion.div 
          className="sectionBox"
          >
            TESTING 2
            <motion.h1
              variants={textAnimate}
              > 
              EUUUUUUUUUUUUUUUULorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quia repellat quas eveniet, eaque voluptates quam aspernatur sed saepe! Harum ex placeat, nostrum aliquid natus, nulla facere nisi, officiis quia inventore error laboriosam alias earum sapiente molestiae aspernatur numquam eligendi laborum nesciunt perspiciatis. Illo dolorum praesentium nihil dolores sunt architecto. Accusantium eaque veniam architecto placeat cum natus magnam impedit ad repellat distinctio excepturi maxime et similique perferendis, laborum voluptate consequatur deserunt dolore corporis ipsa aliquam. Eos ut velit, nisi quos temporibus ipsum neque molestias culpa quisquam. Hic omnis possimus amet accusantium a maiores, fugit dicta voluptatum. Doloremque, harum! Placeat, minus. 
            </motion.h1>
        </motion.div>

      </motion.div>
    </Sc.Container>
  );
}