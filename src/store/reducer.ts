import { TState } from './StoreContext';

function reducer(state: TState, action: any): TState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newCartItems = [...state.cartItems];
      const indexOfItem = newCartItems.findIndex((item) => item.id === action.product.id);
      if (indexOfItem === -1) {
        return { ...state, cartItems: [...newCartItems, { ...action.product, quantity: 1 }]
      }
    }
    const existingProduct = newCartItems[indexOfItem];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      newCartItems[indexOfItem] = updatedProduct;
      return { ...state, cartItems: newCartItems };
    case 'DELETE_FROM_CART':
      const cartItems = [...state.cartItems];
      const indexOfDeleteItem = cartItems.findIndex((item) => item.id === action.product);
      if (indexOfDeleteItem === -1) {
        return {...state, cartItems}
      }
      const existingProduct2 = cartItems[indexOfDeleteItem];
      const updatedProduct2 = { ...existingProduct2, quantity: existingProduct2.quantity - 1 };
      if (updatedProduct2.quantity === 0) {
        cartItems.splice(indexOfDeleteItem, 1);
        return {...state, cartItems}
      }
      cartItems[indexOfDeleteItem] = updatedProduct2;
      return { ...state, cartItems };
    case 'CHANGE_THEME':
      if (state.theme === 'light') {
        return { ...state, theme: 'dark' };
      }
      return { ...state, theme: 'light' };
    default:
      return state;
  }
}

export default reducer;
