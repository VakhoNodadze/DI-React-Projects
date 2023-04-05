// @ts-nocheck
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

import './Home.scss';
import { StoreContext } from '@/store/StoreContext';
import CardItem from '@/components/Card';
import { getAllProducts, deleteProduct, changeProduct } from '@/helpers/services/products';

function Home() {
  const [products, setProducts] = useState([]);

  const handleUpdateProduct = async (editedProduct) => {
    const indexOfEditedProduct = products.findIndex((product) => product.id === editedProduct.id);
    const updatedProducts = [...products];
    updatedProducts.splice(indexOfEditedProduct, 1, editedProduct);
    // updatedProducts[indexOfeEditUser] = editableUser;
    setProducts(updatedProducts);
    await changeProduct(editedProduct);
  };

  const handleDeleteProduct = async (productId) => {
    const updatedProducts = [...products].filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    await deleteProduct(productId);
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
