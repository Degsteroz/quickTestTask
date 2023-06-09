import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'
import EmptyListComponent from 'src/baseComponents/EmptyListComponent'

import OrderListElement from './components/OrderListElement'

import styles from './styles/styles.module.sass'


export const OrderList = observer(() => {
  const {
    appStore,
    cartStore,
    productStore,
  } = useStore()

  const cartPositions = cartStore.cartElements
  const elementCount = cartStore.cartElementCounts
  const elementSum = cartStore.cartElementSum
  const positionsKeys: string[] = Array.from(cartPositions.keys())

  const orderListElements = positionsKeys
    .map((key: string) => {
      const product = {
        ...productStore.getProduct(key),
        ...cartStore.getCartItem(key)
      }

      const { _id: id } = product
      const changeCount = (value: number) => {
        cartStore.setElementCount(id, value)
      }

      const deleteCartItem = () => {
        cartStore.deleteItem(id)
      }

      return (
        <OrderListElement
          product={product}
          changeCount={changeCount}
          deleteCartItem={deleteCartItem}
          key={id}
        />
      )
    })

  const getContent = () => {
    if (!cartStore.cartElementCounts) {
      return <EmptyListComponent />
    }

    return (
      <>
        <div className={styles.orderList}>
          {orderListElements}
        </div>

        <div className={styles.orderListComponent__summary}>
          <span>Items: {elementCount}</span>
          <span>Sum: {elementSum}</span>
          <span
            className={styles.summary__clearButton}
            onClick={cartStore.clearCart}
          >
          Clear
          </span>
        </div>
      </>
    )
  }

  const extraClassName = appStore.orderListOpened
    ? styles['--visible']
    : ''

  const orderListClassName = `${styles.orderListComponent} ${extraClassName}`

  return (
    <div className={orderListClassName}>
      {getContent()}
    </div>
  )
})
