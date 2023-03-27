// @ts-nocheck
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
