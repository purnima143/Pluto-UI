import React from 'react';

import ProductCards from './ProductCards';

export default {
  title: 'Components/ProductCards',
  component: ProductCards,
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const Template = (args) => <ProductCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Product Title',
  price: '$19.99',
  description: 'Product Description',
  image: 'https://images.pexels.com/photos/2566853/pexels-photo-2566853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  isDarkMode: false,
};
