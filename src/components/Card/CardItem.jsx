// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.scss';

const CardItem = ({ product, handleDeleteProduct, onUpdateProduct, onAddItemsToCart }) => {
  // @ts-ignore
  const [editableProduct, setEditableProduct] = useState({});

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

  const handleAddProductsToCart = (product) => {
    // onAddItemsToCart((prev) => {
    //   const isProductExist = prev.find((item) => item.id === product.id);
    //   if (isProductExist) {
    //     return prev.map((item) => {
    //       if (item.id === product.id) {
    //         return { ...item, quantity: item.quantity + 1 };
    //       }
    //       return item;
    //     });
    //   }
    //   return [...prev, { ...product, quantity: 1 }];
    // });
    onAddItemsToCart((prev) => {
      const indexOfItem = prev.findIndex((item) => item.id === product.id);
      if (indexOfItem === -1) {
        return [...prev, { ...product, quantity: 1 }];
      }
      const newProducts = [...prev];
      const existingProduct = newProducts[indexOfItem];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      newProducts[indexOfItem] = updatedProduct;
      return newProducts;
    });
  };

  const renderProduct = () => (
    <div className="card" key={product.id}>
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

  return <>{editableProduct.id ? renderEditableProduct() : renderProduct()}</>;
};

export default CardItem;
