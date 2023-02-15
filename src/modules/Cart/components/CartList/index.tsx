import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'

import CartListElement from '../CartListElement'
import CartDelivery from '../CartDelivery'

import styles from './styles.module.sass'


interface ICartList {
  positionsKeys: string[]
}

const CartList = observer(({
  positionsKeys
}: ICartList) => {
  const {
    cartStore,
    productStore,
  } = useStore()

  const renderOrderList = (key: string, index: number) => {
    const element = {
      ...productStore.getProduct(key),
      ...cartStore.getCartItem(key)
    }

    const { _id } = element
    const changeCount = (value: number) => {
      cartStore.changeElementCount(_id, value)
    }

    const deleteCartItem = () => {
      cartStore.deleteItem(_id)
    }

    const elementKey = `${index}__${_id}`

    return (
      <div
        className={styles.cartListWrapper}
        key={elementKey}
      >
        <CartListElement
          element={element}
          deleteCartItem={deleteCartItem}
          changeCount={changeCount}
        />

        <div
          className={styles.separator}
          key={`separator__${_id}`}
        />
      </div>
    )
  }

  const orderListElements = positionsKeys
    .map(renderOrderList)

  return (
    <div className={styles.cartListComponent}>
      <CartDelivery />
      {orderListElements}
    </div>
  )
})

export default CartList
