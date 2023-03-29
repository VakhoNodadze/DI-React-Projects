// @ts-nocheck
import React, { useContext, useEffect, useReducer, useState } from 'react';

export const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const globalState = {
    products,
    cart,
    isLoading,
    handleAddProduct,
  };

  return <StoreContext.Provider value={globalState}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
