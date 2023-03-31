// @ts-nocheck
import React from 'react';

import CardItem from '../../components/Card';
import { useStore } from '../../store/StoreContext';

const Cart = () => {
  const { cartItems, handleDeleteProductFromCart } = useStore();
  return (
    <>
      <h1>This is your cart</h1>
      {cartItems.map((product) => {
        return (
          <CardItem key={product.id} product={product} handleDeleteProductFromCart={handleDeleteProductFromCart} />
        );
      })}
    </>
  );
};

export default Cart;
