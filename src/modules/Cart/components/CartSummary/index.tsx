import React from 'react'

import BaseButton from 'src/baseComponents/BaseButton'
import CartSummaryInfo from 'modules/Cart/components/CartSummaryInfo'

import styles from './styles.module.sass'

interface ICartSummary {
  handleClick: () => void
}

const CartSummary = ({
  handleClick
} : ICartSummary) => {
  const titleText = 'ORDER'

  return (
    <div className={styles.cartSummaryComponent}>
      <div className={styles.buttonWrapper}>
        <BaseButton
          title={titleText}
          onClick={handleClick}
        />
      </div>

      <div className={styles.cartSummarySeparator} />

      <CartSummaryInfo />
    </div>
  )
}

export default CartSummary
