import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, type = 'button', disabled }) => {
  return (
    <button
      className="mx-1 px-3 text-[10px] md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-2  bg-[#FFA73E]  text-black text-md font-laila rounded-full"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, // The text to display on the button
  onClick: PropTypes.func, // Function to call on button click
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Button type
  style: PropTypes.object, // Custom styles
  disabled: PropTypes.bool, // Disable button
};

export default Button;
