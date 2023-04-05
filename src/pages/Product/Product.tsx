import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { TBackendProduct, useStore } from '../../store/StoreContext';
import { getProductItem } from '../../helpers/services/products';
import { addItemsToCart } from '../../store/actions';

const Product = () => {
  const { id } = useParams();
  const { dispatch } = useStore();

  const [product, setProduct] = useState<TBackendProduct | null> (null);

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await getProductItem(id!)
      setProduct(product);
    };

    getProduct();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <img src={product?.images?.[0]} alt="avatar" />
        <h1>{product?.title}</h1>
        <h2>Price: {product?.price}</h2>
        <h2>Brand: {product?.brand}</h2>
      </div>
      <h2 onClick={() => dispatch(addItemsToCart(product!))}>Add to Cart</h2>
    </div>
  );
};

export default Product;
