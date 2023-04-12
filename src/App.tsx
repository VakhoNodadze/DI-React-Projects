import React, { useMemo, useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'

import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
// import Product from './pages/Product';
import ProductClass from './pages/Product/ProductClass'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

import TodoList from './Todo-example-class/TodoList'

import { isUserAuthenticated } from './helpers/auth'

function ProtectedRoute() {
  const redirect = useNavigate()
  const params = useParams()
  const location = useLocation()
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navigation />
      <Routes>
        <Route index path='/' element={<Home />} />
        {/* <Route index path="/product/:id" element={<Product />} /> */}
        <Route
          index
          path='/product/:id'
          element={<ProductClass params={params} location={location} navigate={redirect} />}
        />
        <Route index path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </div>
  )
}
function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserAuthenticated()) navigate('/login')
    if (isUserAuthenticated()) {
      navigate('/')
    }
  }, [isUserAuthenticated()])

  return (
    <Routes>
      <Route path='/*' element={<ProtectedRoute />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
