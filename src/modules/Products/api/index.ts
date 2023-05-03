import { IProduct } from '../Intarfaces'
import { getDefaultImage } from 'src/utils'

export const fetchProductsFromApi = async (): Promise<Array<IProduct>> => {
  const URL = 'https://api.storerestapi.com/products'

  return fetch(URL)
    .then(response => response.json())
    .then((products) => products.data.map((item: IProduct) => ({
      ...item,
      image: getDefaultImage(),
      discount: Math.round(Math.random() * 100) / 100
    })))
}
