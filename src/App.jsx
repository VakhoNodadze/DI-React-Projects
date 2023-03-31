// @ts-nocheck
import { useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';

import { useStore } from './store/StoreContext';

import { isUserAuthenticated } from './helpers/auth';

const ProtectedRoute = () => {
  return (
    <>
      <Navigation cartSize={productQuantity} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home
              handleAddProductsToCart={handleAddProductsToCart}
              handleDeleteProductFromCart={handleDeleteProductFromCart}
            />
          }
        />
        <Route index path="/product/:id" element={<Product onAddItemsToCart={setCartItems} />} />
        <Route
          index
          path="/cart"
          element={<Cart cartItems={cartItems} handleDeleteProductFromCart={handleDeleteProductFromCart} />}
        />
      </Routes>
    </>
  );
};
function App() {
  const navigate = useNavigate();

  const { theme } = useStore();

  useEffect(() => {
    if (!isUserAuthenticated()) navigate('/login');
    if (isUserAuthenticated()) navigate('/');
  }, [isUserAuthenticated()]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/*" element={<ProtectedRoute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
