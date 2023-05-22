import React from 'react';

const Radio = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
