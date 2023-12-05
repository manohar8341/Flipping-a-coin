// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
