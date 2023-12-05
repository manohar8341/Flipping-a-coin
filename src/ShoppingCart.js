// src/components/ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
