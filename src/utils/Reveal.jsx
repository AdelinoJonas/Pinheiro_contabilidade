import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
          // exit: { opacity: 0, transition:{ duration: 0.25}}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 3,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      {/* <motion.div 
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}  
        initial= "hidden"
        animate= {slideControls}
        transition={{
          duration: 0.5,
          easy: "easeIn"
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      >
        {children}
      </motion.div> */}
    </div>
  );
};
