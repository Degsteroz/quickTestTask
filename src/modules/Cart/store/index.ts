import {
  cast,
  types,
} from 'mobx-state-tree'

import { ICartElement } from '../Intefaces'

const CartElement = types.model('CartElement', {
  price: types.integer,
  count: types.number,
})
  .actions((self) => ({
    changeCount(value: number) {
      self.count = value
    },
  }))


const CartStore = types
  .model('CartStore', {
    positions: types.map(CartElement),
  })
  .actions(self =>({
    setPositions() {
      const positions = localStorage.getItem('cart')

      if (!positions) return

      self.positions = JSON.parse(positions)
    },
    addElementToCart(element: {_id: string, price: number}) {
      const cartElement: ICartElement | undefined = self.positions
        .get(element._id)

      if (!cartElement) {
        self.positions.set(element._id,{
          price: element.price,
          count: 1
        })
      }

      localStorage.setItem('cart', JSON.stringify(self.positions))
    },
    changeElementCount(elementId: string, count: number) {
      const cartElement: ICartElement | undefined = self.positions
        .get(elementId)
      if (!cartElement) return

      cartElement.changeCount(cartElement.count + count)

      if (!cartElement.count) {
        self.positions.delete(elementId)
      }

      localStorage.setItem('cart', JSON.stringify(self.positions))
    },
    setElementCount(elementId: string, value: number) {
      const cartElement: ICartElement | undefined = self.positions
        .get(elementId)
      if (!cartElement) return

      cartElement.changeCount(value)

      localStorage.setItem('cart', JSON.stringify(self.positions))
    },
    deleteItem(elementId: string) {
      self.positions.delete(elementId)

      localStorage.setItem('cart', JSON.stringify(self.positions))
    },
    clearCart() {
      self.positions = cast({})

      localStorage.setItem('cart', JSON.stringify(self.positions))
    }
  }))
  .views(self => ({
    getCartItem(id: string) {
      return self.positions.get(id)
    },
    get cartElementCounts() {
      const positionsValue = Array.from(self.positions.values())

      return positionsValue.reduce((acc, element) => {
        return acc + element.count
      }, 0)
    },
    get cartElementSum() {
      const positionsValue = Array.from(self.positions.values())

      return positionsValue.reduce((acc, element) => {
        return acc + (element.count * element.price)
      }, 0)
    },
    get cartElements() {
      return self.positions
    }
  }))

export { CartStore }

