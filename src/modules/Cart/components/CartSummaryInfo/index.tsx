import React from 'react'
import { useStore } from 'stores/globalStore'

import {
  formatMoney,
  generateOldPrice,
  getCartHeaderByCount,
} from 'src/utils'

import CartClearComponent from 'modules/Cart/components/CartClearComponent'

import styles from './styles.module.sass'

const CartSummaryInfo = () => {
  const { cartStore, productStore } = useStore()
  const { cartElements } = cartStore

  const { clearCart } = cartStore

  const itemsCount = cartStore.cartElementCounts
  const counterLabel = getCartHeaderByCount(itemsCount)
  const countLabel = `Item${itemsCount > 1 ? 's' : ''} (${itemsCount})`

  const cartItems = Array.from(cartElements.keys())
    .map((elementId) => ({
      ...productStore.getProduct(elementId as string),
      ...cartStore.getCartItem(elementId as string),
    }))

  const {
    oldPrice,
    price,
  } = cartItems.reduce((acc, item: {
      price: number,
      discount: number,
      count: number
    }) => {
    const oldPriceValue = generateOldPrice(item.price, item.discount)

    acc.oldPrice += oldPriceValue * item.count
    acc.price += item.price * item.count

    return acc
  }, {
    oldPrice: 0,
    price: 0,
  })

  const formattedOldPrice = formatMoney(oldPrice)
  const formattedDiscount = formatMoney(oldPrice - price)
  const formattedPrice = formatMoney(price)
  const memberPrice = formatMoney(price * 0.99)

  return (
    <div className={styles.cartSummaryInfoComponent}>
      <div className={styles.component__row}>
        <div className={styles.header__cartLabel}>
          Your cart
        </div>

        <div className={styles.header__countLabel}>
          {counterLabel}
        </div>
      </div>

      <div className={styles.component__row}>
        <div>{countLabel}</div>
        <div>{formattedOldPrice}</div>
      </div>

      <div className={styles.component__row}>
        <div>Discount</div>

        <div className={styles.discountLabel}>
          {formattedDiscount}
        </div>
      </div>

      <div className={styles.summarySeparator} />

      <div className={styles.component__row}>
        <div>
          <div className={styles.finalLabel}>
            Sum
          </div>

          <div className={styles.memberLabel}>
            Your price with payment by KabanchikStore card
          </div>
        </div>

        <div>
          <div className={styles.finalPrice}>
            {formattedPrice}
          </div>

          <div className={styles.memberLabel}>
            {memberPrice}
          </div>
        </div>
      </div>

      <div className={styles.summarySeparator} />

      <CartClearComponent handleClick={clearCart}/>
    </div>
  )
}

export default CartSummaryInfo
