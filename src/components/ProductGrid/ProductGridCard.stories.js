import ProductGridCard from "./ProductGridCard";

export default {
  title: 'Example/Product/ProductGrid/ProductGridCard',
  component: ProductGridCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'number' },
    productimage: { control: 'text' },
    darkMode: { control: 'boolean' },
    noOfStars: { control: 'number' },
  }
};

// Default ProductGridCard
export const defaultProductGridCard = (args) => {
  return (
    <ProductGridCard
      title="Pavillon T-shirt"
      description="Capturing Life's Precious Moments."
      price={199.99}
      productimage="https://drive.google.com/uc?export=view&id=18-07HEUX57WyxQafWntb1ignSVohp_6t"
      {...args}
    />
  );
};