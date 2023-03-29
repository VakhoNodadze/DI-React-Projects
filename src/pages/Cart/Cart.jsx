// @ts-nocheck
import React from 'react';

import CardItem from '../../components/Card';

const Cart = ({ cartItems, handleDeleteProductsFromCart }) => {
  return (
    <>
      <h1>This is your cart</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartItems.map((item) => {
          return <CardItem key={item.id} product={item} handleDeleteProductsFromCart={handleDeleteProductsFromCart} />;
        })}
      </div>
    </>
  );
};

export default Cart;
