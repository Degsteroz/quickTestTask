import {
  IAnyStateTreeNode,
  types,
  unprotect,
} from 'mobx-state-tree'
import { ProductStore } from '../modules/Products/store'

export const Store = types.model('Counter', {
  productStore: ProductStore,
})

let _store: IAnyStateTreeNode
export const useStore = () => {
  if(!_store) {
    _store = Store.create({
      productStore: ProductStore.create({
        products: []
      })
    })
  }

  unprotect(_store)
  return _store
}
