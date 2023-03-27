// @ts-nocheck
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.scss';
import CardItem from '../../components/Card';

function Home() {
  const [products, setProducts] = useState([]);

  const handleValues = (event) =>
    setProduct((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

  const handleUpdateUser = async (editedUser) => {
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

  const handleAddUser = (product) => {
    const newUser = {
      ...product,
      id: Math.floor(Math.random() * 1000),
    };
    setProducts((prev) => [...prev, newUser]);
  };

  const handleDeleteUser = async (userId) => {
    const updatedProducts = [...products].filter((product) => product.id !== userId);
    setProducts(updatedProducts);
    await axios(`https://dummyjson.com/products/${userId}`, {
      method: 'DELETE',
    });
    // fetch(`https://dummyjson.com/products/${userId}`, {
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
              handleDeleteUser={handleDeleteUser}
              onUpdateUser={handleUpdateUser}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
