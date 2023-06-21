import { motion, useAnimation, useInView } from "framer-motion";
import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import * as Sc from './styles';
import { Reveal } from "../../utils/Reveal";

// const textVariant={
//   hiden: { 
//   y: 100, 
//   opacity: 0 
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.2,
//       duration: 3,
//     },
//   },
// }

export function Services() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  // const ref = useRef(null);
  // const isInView = useInView(ref, {once: true});

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   console.log(isInView);
  //   if (isInView){
  //     mainControls.start("visible");
  //   }

  // },[isInView]);
  
  return (
    <Sc.Container theme={theme} >
        <div className="sectionBox"
          >
            <Reveal >
              TESTING
            </Reveal>
      <Reveal >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias laborum dolore, consequatur beatae accusamus. Aspernatur excepturi facere iste sint, numquam officiis iure provident in. Laboriosam quos beatae odit assumenda sunt quibusdam exercitationem natus doloribus culpa consequatur, error nesciunt voluptates eligendi expedita consequuntur veniam, porro eos! Nam, sint sequi excepturi, voluptatem nisi pariatur magnam error aspernatur ducimus voluptate quo iusto! Laborum necessitatibus, provident aperiam alias recusandae nostrum harum unde voluptate pariatur voluptas quam odit non. Ipsa vitae nulla ipsum, iusto sint, aut at recusandae sed ut cum doloribus, aliquid facere incidunt quaerat! At voluptas sequi distinctio excepturi quia repellendus, iste laudantium alias vel voluptate quibusdam officiis a recusandae voluptatum incidunt? Nulla totam, quos magni voluptatibus eveniet in adipisci quis nam! Rem natus, beatae tenetur et expedita magnam iste. Voluptates maiores tempora, officia vel nihil voluptatem ex. Sapiente voluptatem non omnis, molestiae eveniet, suscipit, debitis atque magnam voluptate quibusdam quaerat doloribus. 
          </h1>
      </Reveal>
        </div>
        <div 
          className="sectionBox2"
          >
          <Reveal >
              TESTING
          </Reveal >
        <Reveal >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias laborum dolore, consequatur beatae accusamus. Aspernatur excepturi facere iste sint, numquam officiis iure provident in. Laboriosam quos beatae odit assumenda sunt quibusdam exercitationem natus doloribus culpa consequatur, error nesciunt voluptates eligendi expedita consequuntur veniam, porro eos! Nam, sint sequi excepturi, voluptatem nisi pariatur magnam error aspernatur ducimus voluptate quo iusto! Laborum necessitatibus, provident aperiam alias recusandae nostrum harum unde voluptate pariatur voluptas quam odit non. Ipsa vitae nulla ipsum, iusto sint, aut at recusandae sed ut cum doloribus, aliquid facere incidunt quaerat! At voluptas sequi distinctio excepturi quia repellendus, iste laudantium alias vel voluptate quibusdam officiis a recusandae voluptatum incidunt? Nulla totam, quos magni voluptatibus eveniet in adipisci quis nam! Rem natus, beatae tenetur et expedita magnam iste. Voluptates maiores tempora, officia vel nihil voluptatem ex. Sapiente voluptatem non omnis, molestiae eveniet, suscipit, debitis atque magnam voluptate quibusdam quaerat doloribus. 
          </h1>
      </Reveal>
        </div>
    </Sc.Container>
  );
}