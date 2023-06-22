import React from "react";
import Rating from "../RatingComponent/Rating";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./ProductList.scss";

const ProductList = ({
  noOfStars,
  productTitle,
  productDescOneLiner,
  price,
  dark,
  productImage,
}) => {
  console.log(productImage);
  return (
    <div className={`productList ${dark ? "darkMode" : ""}`}>
      <div className="productList--imgCont">
        <img src={productImage} alt="" className="productList--image" />
      </div>

      <div className="productList--infoCont">
        <p className="productList--title">{productTitle}</p>
        <p className="productList--description">{productDescOneLiner}</p>
      </div>

      <div className="productList--stars">
        <Rating number={noOfStars} />
      </div>

      <div className="productList--price">
        <p>${price}</p>
      </div>

      <div className="productList--ATCbutton">
      <Button
            className="atcButton"
            variant={dark ? "primary" : "outlined"}
            size="small"
          >
            Add to cart
          </Button>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  productTitle: PropTypes.string,
  productDescOneLiner: PropTypes.string,
  price: PropTypes.number,
  productImage: PropTypes.string,
  dark: PropTypes.bool,
  noOfStars: PropTypes.number,
};

export default ProductList;
