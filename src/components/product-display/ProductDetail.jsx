import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductDetail.scss";
import instock from "./images/in-stock.png";
import shoe1 from "./images/shoe-img1.png";
import shoe2 from "./images/shoe-img2.png";
import shoe3 from "./images/shoe-img3.png";
import shoe4 from "./images/shoe-img4.png";
import phone1 from "./images/phone-img1.png";
import phone2 from "./images/phone-img2.png";
import phone3 from "./images/phone-img3.png";
import phone4 from "./images/phone-img4.png";
import Button from "../Button/Button";

const ProductDetail = ({
  isDarkMode,
  isStyle1, // There are 2 type of style for the component
  heading1,
  heading2,
  reviews,
  inStock,
  price1,
  price2,
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
  shoetype1,
  shoetype2,
  shoetype3,
  shoetype4,
  shoeDetail1,
  shoeDetail2,
  productDetail1,
  productDetail2,
  productDetail3,
  phoneModel1,
  phoneModel2,
  descriptionText1,
  descriptionText2,
  color1,
  color2,
  color3,
  storage1,
  storage2,
  storage3,
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
  const phoneImages = [
    // { id: 1, image: phone1 },
    { id: 2, image: phone2 },
    { id: 3, image: phone3 },
    { id: 4, image: phone4 },
  ];
  const [image, setImage] = useState(phoneImages);
  const shoeImages = [
    // { id: 1, image: shoe1 },
    { id: 2, image: shoe2 },
    { id: 3, image: shoe3 },
    { id: 4, image: shoe4 },
  ];
  const [img, setImg] = useState(shoeImages);

  const details = [
    { id: 1, detail: detail1, text: text1 },
    { id: 2, detail: detail2, text: text2 },
    { id: 3, detail: detail3, text: text3 },
    { id: 4, detail: detail4, text: text4 },
    { id: 5, detail: detail5, text: text5 },
  ];
  const [productdetail, setProductdetail] = useState(details);
  return (
    <div className={productDetail}>
      <div className="product-detail-box">
        {/* LEFT BOX ( IMAGE SIDE) */}
        <div className="left-box">
          <div className="selected-image">
            {isStyle1 ? (
              <img src={shoe1} alt="Selected" className="selected-shoe-img" />
            ) : (
              <img src={phone1} alt="Selected" className="phone-img1" />
            )}
          </div>
          {isStyle1 ? (
            <div className="image-grid">
              {img.map((elem) => {
                const { id, image } = elem;
                return (
                  <div className="img-box">
                    <img
                      src={image}
                      alt={`Image ${id}`}
                      className="shoe-img phone-img"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="image-grid">
              {image.map((elem) => {
                const { id, image } = elem;
                return (
                  <div className="img-box">
                    <img
                      src={image}
                      alt={`Image ${id}`}
                      className="shoe-img phone-img"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* RIGHT BOX ( TEXT SIDE) */}
        <div className="right-box">
          <div className="text-box">
            <div className="content">
              {/* PRODUCT HEADING */}
              {isStyle1 ? (
                <h1 className="primary-heading"> {heading1} </h1>
              ) : (
                <h1 className="primary-heading"> {heading2} </h1>
              )}
              {/* PRODUCT REVIEW */}
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
              {isStyle1 ? (
                <div>
                  {/* STYLE1 PRICE BOX */}
                  <div className="price-box">
                    <h2 className="secondary-heading"> {price1} </h2>
                    <p className="price-text"> Includes all taxes</p>
                  </div>
                  {/* STYLE 1 PRODUCT DESCRIPTION  */}
                  <p className="description-text"> {descriptionText1} </p>
                  {/* STYLE 1 PRODUCT DETAIL BOX  */}
                  <div className="product-details-box">
                    {productdetail.map((elem) => {
                      const { id, detail, text } = elem;

                      return (
                        <div className="product-details">
                          <p className="product-detail"> {detail} </p>
                          <p className="detail-text"> {text} </p>
                        </div>
                      );
                    })}
                  </div>
                  {/* STYLE 1 QUANTITY AND SIZE BOX  */}
                  <div className="quantity-and-size-box">
                    <div className="quantity-box">
                      <h3 className="tertiray-heading style1-quantity-heading">
                        {shoeDetail1}
                      </h3>
                      <div className="quantity-button-box">
                        <button
                          onClick={handleDecrement}
                          className="quantity-button"
                        >
                          {" "}
                          -{" "}
                        </button>
                        <p className="quantity-text"> {count}</p>
                        <button
                          onClick={handleIncrement}
                          className="quantity-button"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="size-box">
                      <div className="sizebox">
                        <form>
                          <h3 className="tertiray-heading">{shoeDetail2}</h3>
                          <div className="shoe-detail-box">
                            <input
                              id={shoetype1}
                              type="radio"
                              value={shoetype1}
                              name="shoe"
                              checked
                            />
                            <label for={shoetype1}>{shoetype1}</label>
                            <input
                              id={shoetype2}
                              type="radio"
                              value={shoetype2}
                              name="shoe"
                              checked
                            />
                            <label for={shoetype2}>{shoetype2}</label>
                            <input
                              id={shoetype3}
                              type="radio"
                              value={shoetype3}
                              name="shoe"
                              checked
                            />
                            <label for={shoetype3}>{shoetype3}</label>
                            <input
                              id={shoetype4}
                              type="radio"
                              value={shoetype4}
                              name="shoe"
                              checked
                            />
                            <label for={shoetype4}>{shoetype4}</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* STYLE 1 BUTTON BOX  */}
                  <div className="button-box">
                    <Button>Buy Now</Button>
                    <Button> Add to Cart</Button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="description-text"> {descriptionText2} </p>
                  <div className="model-color-box">
                    <div className="model-box">
                      <form>
                        <h3 className="tertiray-heading">{productDetail1}</h3>
                        <div className="model-detail-box">
                          <input
                            id={phoneModel1}
                            type="radio"
                            value={phoneModel1}
                            name="phone"
                            checked
                          />
                          <label for={phoneModel1}>{phoneModel1}</label>
                          <input
                            id={phoneModel2}
                            type="radio"
                            value={phoneModel2}
                            name="phone"
                            checked
                          />
                          <label for={phoneModel2}>{phoneModel2}</label>
                        </div>
                      </form>
                    </div>
                    <div className="color-box">
                      <form>
                        <h3 className="tertiray-heading">{productDetail2}</h3>
                        <div className="color-detail-box">
                          <input
                            id={color1}
                            type="radio"
                            value={color1}
                            name="phone"
                            checked
                          />
                          <label for={color1}>{color1}</label>
                          <input
                            id={color2}
                            type="radio"
                            value={color2}
                            name="phone"
                            checked
                          />
                          <label for={color2}>{color2}</label>
                          <input
                            id={color3}
                            type="radio"
                            value={color3}
                            name="phone"
                            checked
                          />
                          <label for={color3}>{color3}</label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="storage-box">
                    <form>
                      <h3 className="tertiray-heading">{productDetail3}</h3>
                      <div className="storage-detail-box">
                        <input
                          id={storage1}
                          type="radio"
                          value={storage1}
                          name="phone"
                          checked
                        />
                        <label for={storage1}>{storage1}</label>
                        <input
                          id={storage2}
                          type="radio"
                          value={storage2}
                          name="phone"
                          checked
                        />
                        <label for={storage2}>{storage2}</label>
                        <input
                          id={storage3}
                          type="radio"
                          value={storage3}
                          name="phone"
                          checked
                        />
                        <label for={storage3}>{storage3}</label>
                      </div>
                    </form>
                  </div>
                  <div className="price-button-box">
                    <div className="price-box style2-price-heading">
                      <h2 className="secondary-heading "> {price2} </h2>
                      <p className="price-text"> Includes all taxes</p>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  heading1: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  inStock: PropTypes.string.isRequired,
  price1: PropTypes.string.isRequired,
  price2: PropTypes.string.isRequired,
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
  shoetype1: PropTypes.string.isRequired,
  shoetype2: PropTypes.string.isRequired,
  shoetype3: PropTypes.string.isRequired,
  shoetype4: PropTypes.string.isRequired,
  shoeDetail1:PropTypes.string.isRequired, shoeDetail2:PropTypes.string.isRequired,
  descriptionText1: PropTypes.string.isRequired,
  descriptionText2: PropTypes.string.isRequired,
  productDetail1: PropTypes.string.isRequired,
  productDetail2: PropTypes.string.isRequired,
  productDetail3: PropTypes.string.isRequired,
  phoneModel1: PropTypes.string.isRequired,
  phoneModel2: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  storage1: PropTypes.string.isRequired,
  storage2: PropTypes.string.isRequired,
  storage3: PropTypes.string.isRequired,

  isDarkMode: PropTypes.bool,
  isStyle1: PropTypes.bool,
};

export default ProductDetail;
