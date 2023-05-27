import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
export const Button = ({ variant, size, children,onClick,disabled }) => {
  const btnClass = [variant, size].join(' ');
  return (
    <button
      type="button"
      className={`pluto-button ${btnClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick:PropTypes.func,
  children:PropTypes.string,
  disabled:PropTypes.bool
}
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};
export default Button