import PropTypes from "prop-types";

const Description = ({ text, className }) => {
  const defaultStyles =
    "text-center text-[#2A266A] mx-auto font-['SF_Pro_Display'] text-xl xl:text-[1.625rem] font-normal leading-relaxed px-12 xl:px-36 xl:max-w-6xl";

  return <p className={className || defaultStyles}>{text}</p>;
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Description.defaultProps = {
  className: undefined,
};

export default Description;
