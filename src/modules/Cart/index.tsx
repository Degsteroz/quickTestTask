import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

import { useStore } from 'stores/globalStore'

import EmptyListComponent from 'src/baseComponents/EmptyListComponent'

import CartSummary from './components/CartSummary'
import CartList from './components/CartList'

import styles from './styles/styles.module.sass'


export const Cart = observer(() => {
  const { cartStore, appStore } = useStore()
  const navigate = useNavigate()

  const cartPositions = cartStore.cartElements
  const positionsKeys: string[] = Array.from(cartPositions.keys())

  const isEmpty = !positionsKeys.length

  if (isEmpty) return <EmptyListComponent />

  const cartItemsCount = cartStore.cartElementCounts
  const cartItemsSum = cartStore.cartElementSum
  const bonuses = Math.floor(cartItemsSum * 0.1)
  const bonusesLabel = `Kabanchik bonuses will be credited: ${bonuses}`

  const handleOrderButtonClick = () => {
    appStore.sendOrder()
      .then((result: boolean) => {
        if (!result) return

        cartStore.clearCart()
        appStore.setMessageVisibleState(true)
        navigate('/')
      })
  }

  return (
    <div className={styles.cartComponent}>
      <div className={styles.cartComponent__titleComponent}>
        CART

        <div className={styles.titleComponent__counter}>
          {!!cartItemsCount && cartItemsCount}
        </div>
      </div>

      <div className={styles.cartComponent__infoBlock}>
        <div className={styles.infoBlock__leftBlock}>
          <CartList positionsKeys={positionsKeys} />
        </div>


        <div className={styles.infoBlock__rightBlock}>
          <CartSummary handleClick={handleOrderButtonClick}/>

          <div className={styles.leftBlock__bonuses}>
            {bonusesLabel}
          </div>
        </div>
      </div>
    </div>
  )
})
