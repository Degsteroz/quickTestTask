import React from 'react'

import BasketIcon from '../../../Header/assets/basket.svg'

import styles from './styles.module.sass'


interface IAddToCart {
  counter: number | undefined,
  handleChangeCount: (value: number) => void
  addElementToCart: () => void
}

const AddToCart = ({
  counter,
  handleChangeCount,
  addElementToCart,
}: IAddToCart) => {

  const counterValue = counter || 0
  const componentExtraClass = counterValue ? styles['--counter'] : ''

  const addToCardButton = (
    <div
      onClick={addElementToCart}
      className={`${styles.addLabel} ${componentExtraClass}`}
    >
      <img
        src={BasketIcon}
        className={styles.basketIcon}
        alt=""
      />
      <span>ADD TO CART</span>
    </div>
  )

  const changeCount = (
    event: React.MouseEvent<HTMLDivElement>,
    value: number
  ) => {
    event.stopPropagation()
    event.preventDefault()
    handleChangeCount(value)
  }

  const handleIncrementValue = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => changeCount(event, 1)

  const handleDecrementValue = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => changeCount(event, -1)

  const minusButtonLabel = counterValue === 1 ? 'x' : '-'

  const changeItemCountComponent = (
    <div className={styles.counterChangeComponent}>
      <div
        onClick={handleDecrementValue}
        className={styles.counterButton}
      >
        {minusButtonLabel}
      </div>

      <span className={styles.itemCount}>{counterValue}</span>

      <div
        onClick={handleIncrementValue}
        className={styles.counterButton}
      >
        +
      </div>
    </div>
  )


  return (
    <div className={styles.addToCartComponent}>
      {addToCardButton}
      {changeItemCountComponent}
    </div>
  )
}

export default AddToCart
