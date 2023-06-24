import React from 'react';

const Rating = ({ number }) => {
  const filledStar = <span>★</span>;
  const emptyStar = <span>☆</span>;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < number) {
      stars.push(filledStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
