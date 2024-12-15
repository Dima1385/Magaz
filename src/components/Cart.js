import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <section>
      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <p>Total: ${calculateTotal()}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
