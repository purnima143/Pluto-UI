import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductDetail.scss";
import instock from "./images/in-stock.png";

const ProductDetail = ({
  isDarkMode,
  heading,
  reviews,
  inStock,
  price,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  text1,
  text2,
  text3,
  text4,
  text5,
  type1,
  type2,
  type3,
  type4,
  descriptionText,
}) => {
  const productDetail = `productdetail ${
    isDarkMode ? "dark-mode" : "light-mode"
  }`;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={productDetail}>
      <div className="">
        <div className="left-box"></div>
        <div className="right-box">
          <div className="text-box">
            <div className="content">
              <h1 className="primary-heading"> {heading} </h1>
              <div className="review">
                <div className="stars">
                  <span className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p className="review-text">({reviews})</p>
                </div>
                <div className="stock">
                  <img src={instock} className="instock-img" />
                  <p className="instock-text">{inStock}</p>
                </div>
              </div>
              <div className="price-box">
                <h2 className="secondary-heading"> {price} </h2>
                <p className="price-text"> Includes all taxes</p>
              </div>
              <p className="description-text"> {descriptionText} </p>
              <div className="product-details-box">
                <div className="product-detail1">
                  <p className="product-detail"> {detail1} </p>
                  <p className="detail-text"> {text1} </p>
                </div>
                <div className="product-detail2">
                  <p className="product-detail"> {detail2} </p>
                  <p className="detail-text"> {text2} </p>
                </div>
                <div className="product-detail3">
                  <p className="product-detail"> {detail3} </p>
                  <p className="detail-text"> {text3} </p>
                </div>
                <div className="product-detail4">
                  <p className="product-detail"> {detail4} </p>
                  <p className="detail-text"> {text4} </p>
                </div>
                <div className="product-detail5">
                  <p className="product-detail"> {detail5} </p>
                  <p className="detail-text"> {text5} </p>
                </div>
              </div>
              <div className="quantity-and-size-box">
                <div className="quantity-box">
                  <button onClick={handleDecrement} className="quantity-button">
                    {" "}
                    -{" "}
                  </button>
                  <p className="quantity-text"> {count}</p>
                  <button onClick={handleIncrement} className="quantity-button">
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="size-box">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                    />
                    {type1}
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    {type2}
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={selectedOption === "option3"}
                      onChange={handleOptionChange}
                    />
                    {type3}
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="option4"
                      checked={selectedOption === "option4"}
                      onChange={handleOptionChange}
                    />
                    {type4}
                  </label>
                </div>
              </div>
              <div className="button-box">
                <a href="#" className="buy-now-button">
                  Buy Now
                </a>
                <a href="#" className="addto-cart-button">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  heading: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  inStock: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  detail1: PropTypes.string.isRequired,
  detail2: PropTypes.string.isRequired,
  detail3: PropTypes.string.isRequired,
  detail4: PropTypes.string.isRequired,
  detail5: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  text5: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
  type3: PropTypes.string.isRequired,
  type4: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};

export default ProductDetail;
