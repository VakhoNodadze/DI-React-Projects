// @ts-nocheck
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';

import { isUserAuthenticated } from './helpers/auth';

const InnerRoutes = () => {
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
          path="/cart"
          element={<Cart cartItems={cartItems} handleDeleteProductsFromCart={handleDeleteProductsFromCart} />}
        />
      </Routes>
    </>
  );
};

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) navigate('/login');
    // if (isUserAuthenticated()) {
    //   window.location.href = '/';
    // }
  }, [isUserAuthenticated()]);
  return (
    <>
      <Routes>
        <Route path="/*" element={<InnerRoutes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
