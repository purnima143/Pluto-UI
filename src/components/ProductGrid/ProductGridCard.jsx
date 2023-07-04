import React from "react";
import Rating from "../RatingComponent/Rating";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./ProductGridCard.scss";

const ProductGridCard = ({
  title,
  description,
  price,
  productimage,
  darkMode,
  noOfStars,
}) => {
  return (
    <div className={`ProductGridCard ${darkMode ? "darkMode" : ""}`}>
      <div className="ProductGridCard--imgCont">
        <img src={productimage} alt="" className="ProductGridCard--image" />
      </div>

      <div className="ProductGridCard--infoCont">
        <div className="ProductGridCard--TitleAndStar">
          <p className="ProductGridCard--title">{title}</p>

          <Rating number={noOfStars} />
        </div>
        <p className="ProductGridCard--description">{description}</p>

        <div className="ProductGridCard--PriceAndButton">
          <p className="ProductGridCard--price">${price}</p>
          <Button
            className="atcButton"
            variant={darkMode ? "primary" : "outlined"}
            size="small"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productimage: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  noOfStars: PropTypes.number.isRequired,
};

export default ProductGridCard;
