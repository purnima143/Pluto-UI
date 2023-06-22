import React from "react";
import Rating from "../RatingComponent/Rating";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./ProductGrid.scss";

const ProductGrid = ({
  title,
  description,
  price,
  productimage,
  darkMode,
  noOfStars,
}) => {
  return (
    <div className={`ProductGrid ${darkMode ? "darkMode" : ""}`}>
      <div className="ProductGrid--imgCont">
        <img src={productimage} alt="" className="ProductGrid--image" />
      </div>

      <div className="ProductGrid--infoCont">
        <div className="ProductGrid--TitleAndStar">
          <p className="ProductGrid--title">{title}</p>

          <Rating number={noOfStars} />
        </div>
        <p className="ProductGrid--description">{description}</p>

        <div className="ProductGrid--PriceAndButton">
          <p className="ProductGrid--price">${price}</p>
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

ProductGrid.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productimage: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  noOfStars: PropTypes.number,
};

export default ProductGrid;
