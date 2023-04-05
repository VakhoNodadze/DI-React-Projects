import ajax from './ajax';
import { TBackendProduct } from '../../store/StoreContext';

export const getAllProducts = () => ajax.get('products');

export const getProductItem = (productId: string) => ajax.get(`products/${productId}`);

export const deleteProduct = (productId: string | number) => ajax.delete(`products/${productId}`);

export const changeProduct = (product: TBackendProduct) => ajax.put(`products/${product.id}`, product);
