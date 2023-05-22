import React, { useState } from 'react';

const ChooseOne = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    //onSelect(option);
  };

  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleOptionSelect(option)}
          style={{
            background: option === selectedOption ? 'gray' : 'transparent',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChooseOne;
