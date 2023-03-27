// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.scss';

const CardItem = ({ product, handleDeleteUser, onUpdateUser }) => {
  // @ts-ignore
  const [editableUser, setEditableUser] = useState({});

  const handleEditProduct = (product) => {
    setEditableUser((prev) => {
      if (prev.id === product.id) {
        return {};
      }
      return product;
    });
  };

  const handlEditValues = (event) => {
    setEditableUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUpdateProduct = () => {
    onUpdateUser?.(editableProduct);
    setEditableUser({});
  };

  // @ts-ignore
  const renderEditableUser = () => (
    <div className="card">
      <div className="card-header">
        <img
          src={
            // @ts-ignore
            product.images[0]
          }
          width="50px"
          height="100px"
        />
        <span>
          {/* <strong>{product.firstName} </strong>
          <strong> {product.lastName} </strong> */}
          <input
            // @ts-ignore
            value={editableUser.firstName}
            name="firstName"
            // @ts-ignore
            onChange={handlEditValues}
          />
          <input
            // @ts-ignore
            value={editableUser.lastName}
            name="lastName"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <div className="card-info">
        <span>
          Phone number:{' '}
          <input
            // @ts-ignore
            value={editableUser.phone}
            name="phoneNumber"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{' '}
          <input
            // @ts-ignore
            value={editableUser.address.city}
            name="city"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <button
        onClick={
          // @ts-ignore
          handleUpdateProduct
        }>
        Update Product
      </button>
    </div>
  );

  const renderUser = () => (
    <div className="card" key={product.id}>
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <p style={{ color: 'red', cursor: 'pointer', marginLeft: 2 }} onClick={() => handleDeleteUser(product.id)}>
          Delete
        </p>
      </div>
      <div className="card-info">
        <p>
          Brand: <strong>{product?.brand}</strong>
        </p>
        <p>
          Category: <strong> {product?.category} </strong>
        </p>
      </div>
      <button onClick={() => handleEditProduct(product)}>Edit Product</button>
    </div>
  );

  return <>{editableUser.id ? renderEditableUser() : renderUser()}</>;
};

export default CardItem;
