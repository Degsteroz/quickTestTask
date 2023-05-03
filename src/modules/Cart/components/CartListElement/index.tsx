import React from 'react'

import {
  formatMoney,
  formatTitle,
} from 'src/utils'

import ChangeCountComponent from 'src/baseComponents/ChangeCountComponent'

import styles from './styles.module.sass'

interface ICartListElement {
  element: {
    title: string,
    count: number,
    price: number,
    image: string
  }
  changeCount: (value: number) => void
  deleteCartItem: () => void
}

export default function CartListElement({
  element,
  changeCount,
  deleteCartItem,
}: ICartListElement) {
  const {
    title,
    count,
    price,
    image,
  } = element

  const elementSum = formatMoney(count * price)
  const formattedPrice = formatMoney(price)
  const formattedTitle = formatTitle(title)

  return (
    <div className={styles.cartElementComponent}>
      <div className={styles.cartElementComponent__leftBlock}>
        <div className={styles.leftBlock__imageContainer}>
          <img
            src={image}
            alt=""
            className={styles.imageContainer__image}
          />
        </div>

        <div
          onClick={deleteCartItem}
          className={styles.leftBlock__removeButton}
        >
          УДАЛИТЬ
        </div>
      </div>



      <div className={styles.cartElementComponent__rightBlock}>
        <div>
          {formattedTitle}
        </div>

        <div className={styles.rightBlock__infoLine}>
          <div className={styles.infoLine__price}>
            {formattedPrice}
          </div>

          <ChangeCountComponent
            counter={count}
            handleChangeCount={changeCount}
          />

          <div className={styles.infoLine__sum}>
            {elementSum}
          </div>
        </div>
      </div>
    </div>
  )
}
