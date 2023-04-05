import React from 'react';

import CardItem from '../../components/Card';
import { useStore } from '../../store/StoreContext';

function Cart() {
  const { cartItems } = useStore();
  return (
    <>
      <h1>This is your cart</h1>
      {cartItems.map((product) => <CardItem key={product.id} product={product} />)}
    </>
  );
}

export default Cart;
