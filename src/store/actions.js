export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CHANGE_THEME = 'CHANGE_THEME';

export const addItemsToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const deleteItemsFromCart = (product) => ({
  type: DELETE_FROM_CART,
  product,
});

export const changeTheme = () => ({
  type: CHANGE_THEME,
});
