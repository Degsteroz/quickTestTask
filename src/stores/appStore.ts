import {
  types,
  cast,
} from 'mobx-state-tree'

const AppStore = types
  .model('ProductStore', {
    loading: types.boolean,
    orderListOpened: types.boolean,
  })
  .actions(self => ({
    changeOrderListOpenState(): void {
      self.orderListOpened = cast(!self.orderListOpened)
    }
  }))

export { AppStore }
