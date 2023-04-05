import ajax from './ajax';

export const getAllProducts = () => ajax.get('products');

export const deleteProduct = (productId) => ajax.delete(`products/${productId}`);

export const changeProduct = (product) => ajax.put(`products/${product.id}`, product);
