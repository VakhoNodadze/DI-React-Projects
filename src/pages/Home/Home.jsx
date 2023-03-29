// @ts-nocheck
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.scss';
import CardItem from '../../components/Card';

function Home({ handleAddItemsToCart, handleDeleteProductsFromCart }) {
  const [products, setProducts] = useState([]);

  const handleValues = (event) =>
    setProduct((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

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

  const handleDeleteProduct = async (productId) => {
    const updatedProducts = [...products].filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    await axios(`https://dummyjson.com/products/${productId}`, {
      method: 'DELETE',
    });
    // fetch(`https://dummyjson.com/products/${productId}`, {
    //   method: 'DELETE',
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
  };

  useEffect(() => {
    const getUsers = async () => {
      const {
        data: { products },
      } = await axios('https://dummyjson.com/products');
      setProducts(products);
    };

    getUsers();
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
              handleAddItemsToCart={handleAddItemsToCart}
              handleDeleteProductsFromCart={handleDeleteProductsFromCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
