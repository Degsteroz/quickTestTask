import React from 'react'

import truckIcon from '../../assets/truck.svg'

import styles from './styles.module.sass'

const CartDelivery = () => (
  <div className={styles.deliveryComponent}>
    <div className={styles.contentContainer}>
      <div className={styles.title}>
        Safety with Kabanchik Delivery
      </div>

      <img
        alt="delivery enabled"
        src={truckIcon}
        className={styles.truckIcon}
      />
    </div>
  </div>
)

export default CartDelivery
