import { motion } from "framer-motion";

const Title = ({ text }) => {
  const animationVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className="text-4xl xl:text-6xl font-semibold text-center md:text-left font-sans bg-gradient-to-r from-[#433E99] to-[#EF4B32] text-transparent bg-clip-text"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      {text}
    </motion.h2>
  );
};

export default Title;
