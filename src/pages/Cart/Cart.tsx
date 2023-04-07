import React from 'react';
import { Link } from 'react-router-dom';

import CardItem from '../../components/Card';
import { useStore } from '../../store/StoreContext';
import {Box} from "@mui/material";


//

function Cart() {

  const { cartItems } = useStore();

  return (
    <Box sx={{
        width: "100%",  }}>
      <h1>This is your cart</h1>
      <Link to='/checkout'>Go to checkout</Link>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      {cartItems.map((product) => <CardItem key={product.id} product={product} />)}
      </Box>
    </Box>
  );
}

export default Cart;
