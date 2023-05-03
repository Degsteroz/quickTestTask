import React from 'react'

import { Cart } from 'src/modules'

import styles from './styles/styles.module.sass'

export function CartPage() {
  return (
    <div className={styles.cartPage}>
      <Cart />
    </div>
  )
}
