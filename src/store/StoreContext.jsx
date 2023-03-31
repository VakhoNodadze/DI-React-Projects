// @ts-nocheck
import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/system';

export const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [cartItems, setCartItems] = useState([]);

  const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const handleAddProductsToCart = (product) => {
    // onAddItemsToCart((prev) => {
    //   const isProductExist = prev.find((item) => item.id === product.id);
    //   if (isProductExist) {
    //     return prev.map((item) => {
    //       if (item.id === product.id) {
    //         return { ...item, quantity: item.quantity + 1 };
    //       }
    //       return item;
    //     });
    //   }
    //   return [...prev, { ...product, quantity: 1 }];
    // });
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

  const handleDeleteProductFromCart = (id) => {
    setCartItems((prev) => {
      const indexOfItem = prev.findIndex((item) => item.id === id);
      if (indexOfItem === -1) {
        return prev;
      }
      const newProducts = [...prev];
      const existingProduct = newProducts[indexOfItem];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity - 1 };
      if (updatedProduct.quantity === 0) {
        newProducts.splice(indexOfItem, 1);
        return newProducts;
      }
      newProducts[indexOfItem] = updatedProduct;
      return newProducts;
    });
  };

  const productQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const store = {
    theme,
    toggleTheme,
    productQuantity,
    cartItems,
    handleAddProductsToCart,
    handleDeleteProductFromCart,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
