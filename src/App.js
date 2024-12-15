import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header setIsAdmin={setIsAdmin} />
      {isAdmin ? (
        <AdminPanel cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <>
          <ProductList addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </>
      )}
    </div>
  );
};

export default App;
