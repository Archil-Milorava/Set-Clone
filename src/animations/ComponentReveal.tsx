// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import type React from "react";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const ComponentReveal = ({ children, delay }: TextRevealProps) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ComponentReveal;
