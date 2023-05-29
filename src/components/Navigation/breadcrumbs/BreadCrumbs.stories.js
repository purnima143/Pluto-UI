import React from "react";
import BreadCrumbs from "./BreadCrumbs";

export default {
  title: "Components/BureadCrumbs",
  component: BreadCrumbs,
  tags: ["autodocs"],
};

const Template = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
  link1: "Home",
  link2: "Cart",
  link3: "Address",
  link4: "Payment",
  link5: "Confirm",
  isDarkMode: false,
};
