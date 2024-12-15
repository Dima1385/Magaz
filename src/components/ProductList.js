// src/components/ProductList.js
import React, { useState } from 'react';


const ProductList = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Minimalist Watch', price: 100 },
    { id: 2, name: 'Leather Wallet', price: 50 },
    { id: 3, name: 'Canvas Backpack', price: 80 },
  ]);

  return (
    <section>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;