import React, { useRef } from 'react'

import {
  formatMoney,
  formatTitle,
} from 'src/utils'

import styles from './index.module.sass'


interface IOrderListElement {
  product: {
    title: string,
    count: number,
    price: number,
  }
  changeCount: (value: number) => void
  deleteCartItem: () => void
}

const OrderListElement = ({
  product,
  changeCount,
  deleteCartItem,
}: IOrderListElement) => {
  const {
    title,
    count,
    price,
  } = product

  const formattedTitle = formatTitle(title)
  const formattedPrice = formatMoney(price)
  const formattedSum = formatMoney(price * count)

  const dropDownRef = useRef<HTMLSelectElement>(null)

  const optionArray = Array.from(
    { length: 10 },
    (_, index) => index + 1,
  )

  const getDropDownComponent = () => {

    const optionsComponentList = optionArray
      .map((item) => (
        <option value={item} key={`${item}__${title}`}>
          {item}
        </option>
      ))

    const changeItemCount = () => {
      if (!dropDownRef.current?.value) return
      const formattedValue = Number(dropDownRef.current.value)
      changeCount(formattedValue)
    }

    return (
      <select
        ref={dropDownRef}
        onChange={changeItemCount}
        value={count}
      >
        {optionsComponentList}
      </select>
    )
  }

  return (
    <div className={styles.orderListElement}>
      <div className={styles.orderListElement__titleContainer}>
        <div className={styles.element__title}>
          {formattedTitle}
        </div>

        <div
          className={styles.element__removeItem}
          onClick={deleteCartItem}
        >
          Remove
        </div>
      </div>

      <div className={styles.orderListElement__priceContainer}>
        <div className={styles.element__price}>
          {formattedPrice}
        </div>

        <span>x</span>

        <div className={styles.element__titleRow}>
          {getDropDownComponent()}
        </div>

        <span>=</span>

        <div className={styles.element__price}>
          {formattedSum}
        </div>
      </div>
    </div>
  )
}

export default OrderListElement
