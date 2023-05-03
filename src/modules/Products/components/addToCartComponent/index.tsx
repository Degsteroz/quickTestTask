import React from 'react'

import BasketIcon from 'modules/Header/assets/basket.svg'

import ChangeCountComponent from 'src/baseComponents/ChangeCountComponent'

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


  return (
    <div className={styles.addToCartComponent}>
      {addToCardButton}
      <ChangeCountComponent
        counter={counterValue}
        handleChangeCount={handleChangeCount}
      />
    </div>
  )
}

export default AddToCart
