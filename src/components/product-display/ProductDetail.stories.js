import React from "react";
import ProductDetail from "./ProductDetail";

export default {
  title: "Components/ProductDetail",
  component: ProductDetail,
  tags: ["autodocs"],
};

const Template = (args) => <ProductDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  heading: "Nike Mens Precision Vi Running Shoe ",
  reviews: "4.3k reviews",
  inStock: "In Stock",
  price: "$69.18",
  descriptionText:
    "Step up your game with NIKE shoes. Engineered for performance and style, these shoes deliver unparalleled comfort, support, and durability. Elevate your stride, unleash your potential.",
  detail1: "Sole",
  detail2: "Closure",
  detail3: "Fit Type",
  detail4: "Shoe Width",
  detail5: "Shoe Type",
  text1: "Rubber",
  text2: "Lace-Up",
  text3: "Regular",
  text4: "Medium",
  text5: "NIKE PRECISION VI MEN'S BASKETBALL SHOES ",
  type1: "4.5 UK (5 US)",
  type2: "6 UK (7US)",
  type3: "8 UK (9 US)",
  type4: "10 UK (11 US)",

  isDarkMode: true,
  isArrow: false,
  isStyle1: true,
};
