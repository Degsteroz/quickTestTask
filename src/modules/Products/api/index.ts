import { IProduct } from '../Intarfaces'

export const fetchProductsFromApi = async (): Promise<Array<IProduct>> => {
  const URL = 'https://api.storerestapi.com/products'

  return fetch(URL)
    .then(response => response.json())
    .then((products) => products.data)
}
