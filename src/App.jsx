// @ts-nocheck
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navigation cartSize={cartItems.length} />
      <Routes>
        <Route index path="/" element={<Home onAddItemsToCart={setCartItems} />} />
        <Route index path="/product/:id" element={<Product onAddItemsToCart={setCartItems} />} />
        <Route index path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
