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
  heading: "Home",
  isDarkMode: true,
  isArrow: false,
  isStyle1: true,
};
