import {
  IAnyStateTreeNode,
  types,
  unprotect,
} from 'mobx-state-tree'

import { ProductStore } from 'modules/Products/store'
import { CartStore } from 'modules/Cart/store'
import { AppStore } from './appStore'

export const Store = types.model('GlobalStore', {
  productStore: ProductStore,
  cartStore: CartStore,
  appStore: AppStore,
})

let _store: IAnyStateTreeNode
export const useStore = () => {
  if(!_store) {
    _store = Store.create({
      productStore: ProductStore.create({
        products: [],
        loading: false
      }),
      appStore: AppStore.create({
        loading: false,
        orderListOpened: false,
      }),
      cartStore: {},
    })

    unprotect(_store)
  }

  return _store
}
