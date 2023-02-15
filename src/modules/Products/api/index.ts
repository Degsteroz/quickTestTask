import { IProduct } from '../Intarfaces'

export const fetchProductsFromApi = async (
  cursor= 1
): Promise<Array<IProduct>> => {
  return fetch(`https://api.escuelajs.co/api/v1/products?offset=${cursor}&limit=10`)
    .then(response => response.json())
    .then((products: Array<IProduct>) => products)
}
