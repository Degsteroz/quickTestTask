import {
  types,
  cast,
} from 'mobx-state-tree'

import { fetchProductsFromApi } from '../api'

import { IProduct } from '../Intarfaces'

const ProductModel = types.model('ProductModel', {
  _id: types.string,
  title: types.string,
  price: types.number,
  description: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  discount: types.optional(types.number, 0)
})


const ProductStore = types
  .model('ProductStore', {
    products: types.array(ProductModel),
    error: types.maybeNull(types.string),
    loading: types.boolean,
  })
  .actions((self) => ({
    setProducts: (
      products: Array<IProduct>
    ): void => {
      self.products = cast(products)
    },
    fetchProducts: () => {
      self.loading = cast(true)
      fetchProductsFromApi()
        .then(res => {
          self.products = cast(res)
        })
        .finally(() => {
          self.loading = cast(false)
        })
    },
  }))
  .views(self => ({
    getProduct(id: string) {
      return self.products.find(element => element._id === id)
    }
  }))

export { ProductStore }
