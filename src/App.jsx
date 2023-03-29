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

  const handleAddProductsToCart = (product) => {
    setCartItems((prev) => {
      const indexOfItem = prev.findIndex((item) => item.id === product.id);
      if (indexOfItem === -1) {
        return [...prev, { ...product, quantity: 1 }];
      }
      const newProducts = [...prev];
      const existingProduct = newProducts[indexOfItem];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      newProducts[indexOfItem] = updatedProduct;
      return newProducts;
    });
  };
  const handleDeleteProductsFromCart = (id) => {
    setCartItems((prev) => {
      const indexOfItem = prev.findIndex((item) => item.id === id);
      if (indexOfItem === -1) {
        return [...prev];
      }
      const newProducts = [...prev];
      const existingProduct = newProducts[indexOfItem];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity - 1 };
      newProducts[indexOfItem] = updatedProduct;
      return newProducts.filter((item) => item.quantity > 0);
    });
  };

  return (
    <>
      <Navigation cartSize={cartItems.length} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home
              handleAddItemsToCart={handleAddProductsToCart}
              handleDeleteProductsFromCart={handleDeleteProductsFromCart}
            />
          }
        />
        <Route index path="/product/:id" element={<Product handleAddItemsToCart={handleAddProductsToCart} />} />
        <Route
          index
          path="/cart"
          element={<Cart cartItems={cartItems} handleDeleteProductsFromCart={handleDeleteProductsFromCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
