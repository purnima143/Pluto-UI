import React from 'react';
import PropTypes from 'prop-types';

import './ProductCards.scss';

const ProductCards = ({ title, price, description, image, isDarkMode }) => {
  const cardClass = `product-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`;

  return (
    <div className={cardClass}>
      <div className="product-card-image">
        <img src={image} alt="Product Image" />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-title">{title}</h3>
        <span className="product-card-price">{price}</span>
        <p className="product-card-description">{description}</p>
        <button className="product-card-button">Buy Now</button>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};

export default ProductCards;
