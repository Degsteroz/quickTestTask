import React from 'react'

import { useStore } from 'stores/globalStore'

import CartListElement from '../CartListElement'

import styles from './styles.module.sass'

interface ICartList {
  positionsKeys: string[]
}

export const CartList = ({
  positionsKeys
}: ICartList) => {
  const {
    cartStore,
    productStore,
  } = useStore()

  const renderOrderList = (key: string) => {
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

    return (
      <CartListElement
        element={element}
        deleteCartItem={deleteCartItem}
        changeCount={changeCount}
        key={_id}
      />
    )
  }

  const orderListElements = positionsKeys
    .map(renderOrderList)

  return (
    <div className={styles.cartListComponent}>
      {orderListElements}
    </div>
  )
}
