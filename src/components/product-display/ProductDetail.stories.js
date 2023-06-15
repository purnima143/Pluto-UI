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
  heading1: "Nike Mens Precision Vi Running Shoe ",
  heading2: "APPLE iPhone 14 Pro (Deep Purple, 128 GB) ",
  reviews: "4.3k reviews",
  inStock: "In Stock",
  price1: "$69.18",
  price2: "$1,456.18",

  descriptionText1:
    "Step up your game with NIKE shoes. Engineered for performance and style, these shoes deliver unparalleled comfort, support, and durability. Elevate your stride, unleash your potential.",
  descriptionText2:
    "Experience the pinnacle of innovation with iPhone 14 Pro Max. Unmatched performance, stunning display, and cutting-edge features redefine what a smartphone can do. Elevate your mobile experience.",
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
  shoetype1: "4.5 UK (5 US)",
  shoetype2: "6 UK (7US)",
  shoetype3: "8 UK (9 US)",
  shoetype4: "10 UK (11 US)",
  shoeDetail1: "Quantity",
  shoeDetail2: "Select Size",

  productDetail1: "Model",
  productDetail2: "Color",
  productDetail3: "Storage",
  phoneModel1: "14 Pro",
  phoneModel2: "14 Pro max",

  color1: "Space Black",
  color2: "Gold",
  color3: "Silver",
  storage1: "128 GB  ",
  storage2: "512 GB",
  storage3: "1 TB",

  isDarkMode: true,
  isStyle1: true,
};
