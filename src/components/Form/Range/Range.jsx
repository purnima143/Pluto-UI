import React from 'react';

const Range = ({ min, max, value, onChange }) => {
  return (
    <input type="range" min={min} max={max} value={value} onChange={onChange} />
  );
};

export default Range;
