import React from 'react'
import { Link } from 'react-router-dom'

import { CART } from 'src/routes/routesPaths'

import BasketIcon from 'assets/basket.svg'

import styles from './styles.module.sass'


interface BasketInterface {
  count: number
}

export default function Basket({
  count,
} : BasketInterface) {
  const countContent = !!count
    ? (
      <div className={styles.basket__countComponent}>
        {count}
      </div>
    )
    : (
      <div className={styles.basket__countPlug}/>
    )

  return (
    <Link
      className={styles.basketComponent}
      to={CART}
    >
      {countContent}
      <img
        src={BasketIcon}
        className={styles.basket__icon}
        alt=""
      />

      <span className={styles.basket__label}>
        CART
      </span>
    </Link>
  )
}
