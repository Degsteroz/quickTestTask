import React from 'react'

import image from 'assets/soviet.svg'

import styles from './styles/styles.module.sass'

export default function EmptyListComponent() {
  return (
    <div className={styles.emptyList}>
      <img
        src={image}
        className={styles.emptyList__icon}
        alt="list is empty"
      />

      <div className={styles.emptyList__title}>
        <div>
          Кажется, ваша корзина пуста.
        </div>
        <div>
          Можете попробовать что-нибудь добавить
        </div>
        <div className={styles.emptyList__subtitle}>
          (если получится)
        </div>
      </div>
    </div>
  )
}
