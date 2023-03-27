// @ts-nocheck
import React from 'react';

import CardItem from '../../components/Card';

const Cart = ({ cartItems }) => {
  return (
    <>
      <h1>This is your cart</h1>
      {cartItems.map((item) => {
        return <CardItem key={item.id} product={item} />;
      })}
    </>
  );
};

export default Cart;
