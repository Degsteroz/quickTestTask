import {
  IAnyStateTreeNode,
  types,
  unprotect,
} from 'mobx-state-tree'

import { ProductStore } from '../modules/Products/store'
import { CartStore } from '../modules/Cart/store'

export const Store = types.model('Counter', {
  productStore: ProductStore,
  cartStore: CartStore,
})

let _store: IAnyStateTreeNode
export const useStore = () => {
  if(!_store) {
    _store = Store.create({
      productStore: ProductStore.create({
        products: [],
        loading: false
      }),
      cartStore: {}
    })

    unprotect(_store)
  }

  return _store
}
