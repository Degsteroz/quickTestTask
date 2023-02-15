import {
  types,
  cast,
} from 'mobx-state-tree'
import { fetchProductsFromApi } from '../api'
import { IProduct } from '../Intarfaces'

const ProductModel = types.model('ProductModel', {
  id: types.number,
  title: types.string,
  price: types.number,
  description: types.string,
  images: types.array(types.string)
})


const ProductStore = types
  .model('ProductStore', {
    products: types.array(ProductModel),
    error: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setProducts: (
      products: Array<IProduct>
    ): void => {
      self.products = cast(products)
    },
    fetchProducts: () => {
      fetchProductsFromApi(1).then(res => {
        self.products = cast(res)
      })
    },
  }))
  .views(self => ({
    get count() {
      return self.products.length > 9 ? '9+' : self.products.length
    },
  }))

export { ProductStore }
