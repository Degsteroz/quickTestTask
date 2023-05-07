import {
  types,
  cast,
} from 'mobx-state-tree'

const AppStore = types
  .model('ProductStore', {
    loading: types.boolean,
    isMessageVisible: types.boolean,
    orderListOpened: types.boolean,
  })
  .actions(self => ({
    changeOrderListOpenState(): void {
      self.orderListOpened = cast(!self.orderListOpened)
    },
    sendOrder() {
      self.loading = true

      return new Promise((resolve) => {
        setTimeout(() => {
          self.loading = false
          resolve(true)
        }, 4000)
      })
    },
    setMessageVisibleState(value: boolean): void {
      self.isMessageVisible = value
    }
  }))

export { AppStore }
