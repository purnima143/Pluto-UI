import React from "react";
import ProductGridCard from "./ProductGridCard";
import "./ProductGrid.scss";

const ProductGrid = (props) => {
  let data = props.data;
  data = [
    {
        "title": "Unbranded Cotton Fish",
        "description": "Laboriosam nobis possimus porro laudantium beatae.",
        "price": "1.00",
        "productimage": "https://picsum.photos/seed/h5vAKRq4sg/640/480",
        "darkmode": true,
        "noOfStars": 1
    },
    {
        "title": "Awesome Rubber Soap",
        "description": "Repudiandae placeat minus facere.",
        "price": "456.00",
        "productimage": "https://picsum.photos/seed/jD8B5noBO/640/480",
        "darkmode": false,
        "noOfStars": 2
    },
    {
        "title": "Rustic Concrete Computer",
        "description": "Doloremque illum sit.",
        "price": "131.00",
        "productimage": "https://picsum.photos/seed/KJFgd058/640/480",
        "darkmode": true,
        "noOfStars": 2
    },
    {
        "title": "Recycled Plastic Soap",
        "description": "Non magni saepe nemo ipsum error fuga.",
        "price": "142.00",
        "productimage": "https://picsum.photos/seed/49VOKET/640/480",
        "darkmode": true,
        "noOfStars": 2
    },
    {
        "title": "Recycled Metal Soap",
        "description": "Vitae consectetur debitis hic facilis voluptatibus earum minima porro.",
        "price": "828.00",
        "productimage": "https://picsum.photos/seed/JdZmgBzwh/640/480",
        "darkmode": false,
        "noOfStars": 3
    },
    {
        "title": "Recycled Concrete Bike",
        "description": "Voluptatem doloremque enim rerum suscipit nostrum culpa sequi consectetur suscipit.",
        "price": "705.00",
        "productimage": "https://picsum.photos/seed/HYMRf/640/480",
        "darkmode": false,
        "noOfStars": 2
    },
    {
        "title": "Practical Cotton Bike",
        "description": "Nisi libero occaecati libero deserunt recusandae omnis porro fugiat.",
        "price": "187.00",
        "productimage": "https://picsum.photos/seed/U5EmNa/640/480",
        "darkmode": true,
        "noOfStars": 1
    },
    {
        "title": "Small Cotton Shirt",
        "description": "Adipisci in deleniti blanditiis consequuntur veniam iste.",
        "price": "625.00",
        "productimage": "https://picsum.photos/seed/MZMibU/640/480",
        "darkmode": true,
        "noOfStars": 5
    },
    {
        "title": "Gorgeous Fresh Shoes",
        "description": "Error placeat consectetur possimus modi quaerat natus corrupti repellendus.",
        "price": "963.00",
        "productimage": "https://picsum.photos/seed/3k5eOLJ/640/480",
        "darkmode": true,
        "noOfStars": 3
    },
    {
        "title": "Unbranded Granite Salad",
        "description": "Similique officiis nam vero dicta perferendis mollitia nobis incidunt.",
        "price": "600.00",
        "productimage": "https://picsum.photos/seed/vKF3RpM/640/480",
        "darkmode": false,
        "noOfStars": 2
    }
];

  const productGridMake = () => {
    return data.map(
      ({ description, price, productimage, title, darkmode, noOfStars }) => (
        <ProductGridCard
          description={description}
          price={price}
          productimage={productimage}
          title={title}
          darkmode={darkmode}
          noOfStars={noOfStars}
        />
      )
    );
  };

  return <div className="productGrid">{productGridMake()}</div>;
};

export default ProductGrid;
