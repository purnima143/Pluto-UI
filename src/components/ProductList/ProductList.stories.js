import ProductList from "./ProductList";

export default {
  title: 'Example/Product/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  argTypes: {
    productTitle: { control: 'text' },
    productDescOneLiner: { control: 'text' },
    price: { control: 'number' },
    productImage: { control: 'text' },
    dark: { control: 'boolean' },
    noOfStars: { control: 'number' },
  }
};

// Default ProductList
export const defaultProductList = (args) => {
  return (
    <ProductList
      productTitle="Pavillon T-shirt"
      productDescOneLiner="Capturing Life's Precious Moments."
      price={199.99}
      productImage="https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      {...args}
    />
  );
};