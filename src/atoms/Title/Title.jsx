import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Title = ({ text }) => {
  return (
    <motion.h2
      className="text-5xl xl:text-6xl font-semibold text-center md:text-left font-sans bg-gradient-to-r from-[#433E99] to-[#EF4B32] text-transparent bg-clip-text"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {text}
    </motion.h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  text: "",
};

export default Title;
