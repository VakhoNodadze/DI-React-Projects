// @ts-nocheck
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

import './Home.scss';
import { StoreContext } from '../../store/StoreContext';
import CardItem from '../../components/Card';
import { getAllProducts } from '../../helpers/services/products';

function Home() {
  const [products, setProducts] = useState([]);

  const handleUpdateProduct = async (editedUser) => {
    const indexOfEditedProduct = products.findIndex((product) => product.id === editedUser.id);
    const updatedProducts = [...products];
    updatedProducts.splice(indexOfEditedProduct, 1, editedUser);
    // updatedProducts[indexOfeEditUser] = editableUser;
    setProducts(updatedProducts);
    await axios(`https://dummyjson.com/products/${editedUser.id}`, {
      method: 'PUT' /* or PATCH */,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...editedUser,
      }),
    });
  };

  const handleDeleteProduct = async (userId) => {
    const updatedProducts = [...products].filter((product) => product.id !== userId);
    setProducts(updatedProducts);
    await axios(`https://dummyjson.com/products/${userId}`, {
      method: 'DELETE',
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const {
        data: { products },
      } = await getAllProducts();
      setProducts(products);
    };

    getProducts();
  }, []);
  return (
    <>
      <div className="flex-wrap">
        {products.map((product) => {
          // if (editableUser.id === product.id) {
          //   return renderEditableUser(product);
          // }
          return (
            <CardItem
              key={product.id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
