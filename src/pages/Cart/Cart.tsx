import React from 'react'
import { Link } from 'react-router-dom'

import CardItem from '../../components/Card'
import { useStore } from '../../store/StoreContext'
import { Box } from '@mui/material'

//

function Cart() {
  const { cartItems } = useStore()

  const handleCheckout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url) // Forwarding user to Stripe
        }
      })
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <h1>This is your cart</h1>
      <p onClick={handleCheckout}>Go to checkout</p>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartItems.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  )
}

export default Cart
