import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'

import EmptyListComponent from 'src/baseComponents/EmptyListComponent'
import { CartList } from './components/CartList'

import styles from './styles/styles.module.sass'

export const Cart = observer(() => {
  const { cartStore } = useStore()

  const cartPositions = cartStore.cartElements
  const positionsKeys: string[] = Array.from(cartPositions.keys())

  const isEmpty = !positionsKeys.length

  if (isEmpty) return <EmptyListComponent />

  const cartItemsCount = cartStore.cartElementCounts

  return (
    <div className={styles.cartComponent}>
      <div className={styles.cartComponent__titleComponent}>
        КОРЗИНА

        <div className={styles.titleComponent__counter}>
          {!!cartItemsCount && cartItemsCount}
        </div>
      </div>

      <div className={styles.cartComponent__cartItems}>
        <CartList positionsKeys={positionsKeys} />
      </div>
    </div>
  )
})


