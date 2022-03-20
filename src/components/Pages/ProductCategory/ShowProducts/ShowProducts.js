import { imageListClasses, Typography } from "@mui/material";
import React from "react";
import './ShowProduct.css';

const ShowProducts = (allProducts) => {
  // console.log(allProducts)
  const { productImage, productName, productDescription } = allProducts.allProducts;

  return <div style={{ margin: "1rem 0 0 5rem" }}>
      <img className='imageStyle' src={productImage} />
      <Typography variant="h3">
          {productName}
      </Typography>

      <Typography>
          {productDescription}
      </Typography>
  </div>;
};

export default ShowProducts;
