import PropTypes from "prop-types";

const Button = ({
  className = "",
  onClick,
  children,
  style,
  "aria-label": ariaLabel,
}) => {
  return (
    <button
      className={`font-medium transition-colors ${className}`}
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object,
  "aria-label": PropTypes.string,
};

export default Button;
