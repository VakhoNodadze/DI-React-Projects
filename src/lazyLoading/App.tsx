import React, { lazy, Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// import Home from './Home'
// import Store from './Store'
// import Login from './Login'

// Lazy load the components
// const Home = lazy(() => wait(100).then(() => import('./Home')))
const Home = lazy(() => import('./Home'))
const Store = lazy(() => import('./Store'))
const Login = lazy(() => import('./Login'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex' }}>
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/login'>Login</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  )
}

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve
    }, time)
  })
}

export default App
