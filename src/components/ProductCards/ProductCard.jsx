import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.scss";
import Button from "../Button/Button";
import Rating from "../RatingComponent/Rating";

const ProductCard = ({
  title,
  description,
  price,
  productimage,
  dark,
  noOfStars,
  ratingEnabled,
  discountBadge,
  discountBadgeEnabled,
}) => {
  return (
    <div
      className={`productCard ${dark ? "darkMode" : ""} 
      ${ratingEnabled ? "ratingCardStyle" : ""}`
      }
    >
      <div className="imageCont">
        {discountBadgeEnabled && (
          <div className="discountBadge">{discountBadge}% off</div>
        )}
        <img src={productimage} alt="" className="productImage" />
      </div>

      <div className="textCont">
        <p className="productTitle">{title}</p>
        <p className="productDescription">{description}</p>
        {ratingEnabled && <hr className="ContentDividerLine" />}

        <div className="buttonAndPriceHolder">
          <span>
            <b>${price}</b>
            {ratingEnabled && <Rating number={noOfStars} />}
          </span>
          <Button
            className="atcButton"
            variant={dark ? "primary" : "outlined"}
            size="small"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  productimage: PropTypes.string,
  dark: PropTypes.bool,
  noOfStars: PropTypes.number,
  ratingEnabled: PropTypes.bool,
  discountBadge: PropTypes.number,
  discountBadgeEnabled: PropTypes.bool,
};

export default ProductCard;
