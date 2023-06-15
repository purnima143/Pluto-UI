import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ isDarkMode, heading }) => {
  const productDetail = `productdetail ${
    isDarkMode ? "dark-mode" : "light-mode"
  }`;
  return (
    <div className={productDetail}>
      <div className="">
        <div className="left-box"></div>
        <div className="right-box">
          <div className="text-box">
            <div className="content">
              <h1> {heading} </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  heading: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};
export default ProductDetail;
