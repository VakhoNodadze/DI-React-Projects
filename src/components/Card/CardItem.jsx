// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CardItem.scss';

const CartProductItem = ({ product, handleDeleteProductFromCart }) => {
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
          onClick={() => handleDeleteProductFromCart(product.id)}>
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

const CardItem = ({
  product,
  handleDeleteProduct,
  onUpdateProduct,
  handleAddProductsToCart,
  handleDeleteProductFromCart,
}) => {
  // @ts-ignore
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
          <strong> {product.lastName} </strong> */}
          <input
            // @ts-ignore
            value={editableProduct.title}
            name="title"
            // @ts-ignore
            onChange={handlEditValues}
          />
          <input
            // @ts-ignore
            value={editableProduct.lastName}
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
            value={editableProduct.phone}
            name="phoneNumber"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{' '}
          <input
            // @ts-ignore
            value={editableProduct.brand}
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

  const renderProduct = () => (
    <div className="card">
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <p style={{ color: 'red', cursor: 'pointer', marginLeft: 2 }} onClick={() => handleDeleteProduct(product.id)}>
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
      <button style={{ marginTop: '10px' }} onClick={() => handleAddProductsToCart(product)}>
        Add To Cart
      </button>
    </div>
  );

  const renderContent = useMemo(() => {
    console.log('render content');
    if (location.pathname === '/cart') {
      return <CartProductItem product={product} handleDeleteProductFromCart={handleDeleteProductFromCart} />;
    }
    if (editableProduct.id) {
      return renderEditableProduct();
    }
    return renderProduct();
  }, [editableProduct.id, product.quantity]);

  return <>{renderContent}</>;
};

export default CardItem;
