import ProductGrid from "./ProductGrid";

export default {
  title: 'Example/Product/ProductGrid',
  component: ProductGrid,
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

// Default ProductGrid
export const defaultProductGrid = (args) => {
  return (
    <ProductGrid
      title="Pavillon T-shirt"
      description="Capturing Life's Precious Moments."
      price={199.99}
      productimage="https://drive.google.com/uc?export=view&id=18-07HEUX57WyxQafWntb1ignSVohp_6t"
      {...args}
    />
  );
};