import ProductCard from "./ProductCard";

export default {
  title: 'Example/Product/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'number' },
    productimage: { control: 'text' },
    dark: { control: 'boolean' },
    noOfStars: { control: 'number' },
    ratingEnabled: { control: 'boolean' },
    discountBadge: { control: 'number' },
    discountBadgeEnabled: { control: 'boolean' },
  }
};


export const DefaultCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    {...args}
  />
);

export const DarkModeCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    dark
    {...args}
  />
);

export const RatingCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    ratingEnabled
    noOfStars={4}
    {...args}
  />
);

export const DiscountBadgeCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    discountBadgeEnabled
    discountBadge={20}
    {...args}
  />
);

export const DarkModeRatingCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    dark
    ratingEnabled
    noOfStars={4}
    {...args}
  />
);

export const DiscountBadgeRatingCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    discountBadgeEnabled
    discountBadge={20}
    ratingEnabled
    noOfStars={4}
    {...args}
  />
);

export const DarkModeDiscountBadgeCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    dark
    discountBadgeEnabled
    discountBadge={20}
    {...args}
  />
);

export const DarkModeDiscountBadgeRatingCard = (args) => (
  <ProductCard
    title="Canon Camera"
    description="Capturing Life's Precious Moments."
    price={199.99}
    productimage="https://drive.google.com/uc?id=18oDQIvP0KcgEALSUQ02yJSR5yvDUvTZv"
    dark
    discountBadgeEnabled
    discountBadge={20}
    ratingEnabled
    noOfStars={4}
    {...args}
  />
);
