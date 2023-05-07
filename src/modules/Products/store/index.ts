import {
  types,
  cast,
  getParent,
} from 'mobx-state-tree'

import { Store } from 'stores/globalStore'

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
  })
  .actions((self) => ({
    setProducts: (
      products: Array<IProduct>
    ): void => {
      self.products = cast(products)
    },
    fetchProducts: () => {
      const globalStore = getParent<typeof Store>(self)
      globalStore.appStore.loading = true
      fetchProductsFromApi()
        .then(res => {
          self.products = cast(res)

          globalStore.cartStore.setPositions()
        })
        .finally(() => {
          globalStore.appStore.loading = false
        })
    },
  }))
  .views(self => ({
    getProduct(id: string) {
      return self.products.find(element => element._id === id)
    }
  }))

export { ProductStore }
