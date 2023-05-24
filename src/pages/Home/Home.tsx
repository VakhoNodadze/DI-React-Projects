/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from 'react'

import './Home.scss'
import { TBackendProduct, TCartProduct } from '../../store/StoreContext'
import CardItem from '../../components/Card'
import { getAllProducts, deleteProduct, changeProduct } from '../../helpers/services/products'
import { getFinalProject } from '../../helpers/services/final-project'

function Home() {
  const [products, setProducts] = useState<TBackendProduct[]>([])

  const handleUpdateProduct = async (editedProduct: TBackendProduct) => {
    const indexOfEditedProduct = products.findIndex((product) => product.id === editedProduct.id)
    const updatedProducts = [...products]
    updatedProducts.splice(indexOfEditedProduct, 1, editedProduct)
    // updatedProducts[indexOfeEditUser] = editableUser;
    setProducts(updatedProducts)
    await changeProduct(editedProduct)
  }

  const handleDeleteProduct = async (productId: number) => {
    const updatedProducts = [...products].filter((product) => product.id !== productId)
    setProducts(updatedProducts)
    await deleteProduct(productId)
  }

  useEffect(() => {
    const getProducts = async () => {
      const {
        data: { products },
      } = await getAllProducts()
      setProducts(products)
    }
    getFinalProject()

    getProducts()
  }, [])

  return (
    <div className='flex-wrap'>
      {products.map((product) => (
        <CardItem
          key={product.id}
          product={product as TCartProduct}
          handleDeleteProduct={handleDeleteProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      ))}
    </div>
  )
}

export default Home
