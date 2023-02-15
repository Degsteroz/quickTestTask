import React from 'react'

import BasketIcon from '../../assets/basket.svg'
import styles from './styles.module.sass'

interface BasketInterface {
  count: number
}

export default function Basket({
  count,
} : BasketInterface) {
  return (
    <div className={styles.basketComponent}>
      {!!count && (
        <div className={styles.basket__countComponent}>
          {count}
        </div>
      )}

      <img
        src={BasketIcon}
        className={styles.basket__icon}
        alt=""
      />
    </div>

  )
}
