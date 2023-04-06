import React from 'react';

import CardItem from '../../components/Card';
import { useStore } from '../../store/StoreContext';
import {Box} from "@mui/material";


//

function Cart() {

  const { cartItems } = useStore();

  return (
    <Box sx={{
        width: "100%", display: 'flex',
            flexWrap: 'wrap' }}>
      <h1>This is your cart</h1>
      {cartItems.map((product) => <CardItem key={product.id} product={product} />)}
    </Box>
  );
}

export default Cart;
