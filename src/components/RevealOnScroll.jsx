import { motion } from "framer-motion";

export const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }} // Starts invisible and slightly pushed down
      whileInView={{ opacity: 1, y: 0 }} // Fades in and slides to original position
      viewport={{ once: true, margin: "-50px" }} // Triggers slightly before scrolling fully into view
      style={{ willChange: "transform, opacity" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom bezier curve for a silky smooth stop
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
