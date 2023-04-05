// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

import './CardItem.scss';
import { useStore } from '@/store/StoreContext';
import { addItemsToCart, deleteItemsFromCart } from '@/store/actions';

const CartProductItem = ({ product }) => {
  const { dispatch } = useStore();
  return (
    <div className="card">
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <p
          style={{ color: 'red', cursor: 'pointer', marginLeft: 2 }}
          onClick={() => dispatch(deleteItemsFromCart(product))}>
          Remove
        </p>
      </div>
      <div className="card-info">
        <p>
          Brand: <strong>{product?.brand}</strong>
        </p>
        <p>
          Category: <strong> {product?.category} </strong>
        </p>
        <p>
          Quantity: <strong>{product.quantity}</strong>{' '}
        </p>
      </div>
    </div>
  );
};

const CardItem = ({ product, handleDeleteProduct, onUpdateProduct }) => {
  const { dispatch } = useStore();

  const [editableProduct, setEditableProduct] = useState({});

  const location = useLocation();

  const handleEditProduct = (product) => {
    setEditableProduct((prev) => {
      if (prev.id === product.id) {
        return {};
      }
      return product;
    });
  };

  const handlEditValues = (event) => {
    setEditableProduct((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUpdateProduct = () => {
    onUpdateProduct?.(editableProduct);
    setEditableProduct({});
  };

  // @ts-ignore
  const renderEditableProduct = () => (
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
          <strong> {product.description} </strong> */}
          <input
            // @ts-ignore
            value={editableProduct.title}
            name="title"
            // @ts-ignore
            onChange={handlEditValues}
          />
          <input
            // @ts-ignore
            value={editableProduct.description}
            name="description"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <div className="card-info">
        <span>
          Price:{' '}
          <input
            // @ts-ignore
            value={editableProduct.price}
            name="price"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{' '}
          <input
            // @ts-ignore
            value={editableProduct.brand}
            name="brand"
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

  const renderProduct = () => (
    <div className="card">
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <Typography
          color="error"
          sx={{ cursor: 'pointer', marginLeft: 2 }}
          onClick={() => handleDeleteProduct(product.id)}>
          Delete
        </Typography>
      </div>
      <div className="card-info">
        <Typography color="text">
          Brand: <strong>{product?.brand}</strong>
        </Typography>
        <Typography>
          Category: <strong> {product?.category} </strong>
        </Typography>
      </div>
      <Button variant="outlined" color="info" onClick={() => handleEditProduct(product)}>
        Edit Product
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: '10px' }}
        onClick={() => dispatch(addItemsToCart(product))}>
        Add To Cart
      </Button>
    </div>
  );

  // INPUT PROBLEM HERE! editableProduct must have all it's properties in the dependency array to work properly
  const renderContent = useMemo(() => {
    if (location.pathname === '/cart') {
      return <CartProductItem product={product} />;
    }
    if (editableProduct.id) {
      return renderEditableProduct();
    }
    return renderProduct();
  }, [
    editableProduct.id,
    editableProduct.title,
    editableProduct.description,
    editableProduct.price,
    editableProduct.brand,
    product.quantity,
  ]);

  return <>{renderContent}</>;
};

export default CardItem;
