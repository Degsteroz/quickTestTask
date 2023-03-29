import { types } from 'mobx-state-tree'
import { IProduct } from '../../Products/Intarfaces'
import { ICartElement } from '../Intefaces'

const CartElement = types.model('CartElement', {
  price: types.integer,
  count: types.number,
})
  .actions((self) => ({
    changeCount(value: number) {
      self.count += value
    },
  }))

const CartStore = types
  .model('Cart', {
    positions: types.map(CartElement)
  })
  .actions(self =>({
    addElementToCart(element: IProduct) {
      const cartElement: ICartElement | undefined = self.positions
        .get(element._id)

      console.log(cartElement)

      if (!cartElement) {
        self.positions.set(element._id,{
          price: element.price,
          count: 1
        })
      }
    },
    changeElementCount(elementId: string, count: number) {
      const cartElement: ICartElement | undefined = self.positions
        .get(elementId)
      if (!cartElement) return

      cartElement.changeCount(count)

      if (!cartElement.count) {
        self.positions.delete(elementId)
      }

      console.log(self.positions.get(elementId))
    }
  }))
  .views(self => ({
    getItem(id: string) {
      return self.positions.get(id)
    },
    get getCartElementCounts() {
      const positionsValue = Array.from(self.positions.values())

      return positionsValue.reduce((acc, element) => {
        return acc + element.count
      }, 0)
    }
  }))
export { CartStore }

