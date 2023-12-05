// src/components/ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Additional details can be added here */}
    </div>
  );
};

export default ProductDetails;
