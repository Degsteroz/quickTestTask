import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'

import {
  formatMoney,
  formatTitle,
  generateOldPrice,
  formatDiscount,
} from 'src/utils'

import { IProduct } from '../../Intarfaces'

import AddToCart from '../AddToCartComponent'

import styles from './index.module.sass'

interface IProductCard {
  product: IProduct
}


const ProductCard = observer(({ product } : IProductCard) => {
  const { cartStore } = useStore()

  if (!product) return null
  const {
    title,
    price,
    image,
    _id,
    discount,
  } = product

  const cartStoreElement = cartStore.getCartItem(_id)
  const { count } = cartStoreElement || {}

  const formattedPrice = formatMoney(price)
  const oldPrice = generateOldPrice(price, discount || 0)
  const formattedDiscount = formatDiscount(discount || 0)
  const formattedOldPrice = formatMoney(oldPrice)
  const formattedTitle = formatTitle(title)


  const addElementToCart = () => {
    cartStore.addElementToCart(product)
  }

  const handleChangeCount = (value: number) => {
    cartStore.changeElementCount(_id, value)
  }

  const getBlockClassName = (modifier: string): string => {
    return `${styles.productCard__priceContainer} ${styles[modifier]}`
  }

  const oldPriceBlockClassName = getBlockClassName('--oldPrice')
  const discountBlockClassName = getBlockClassName('--discount')
  const isDiscountVisible = discount <= 0.7


  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imageWrapper}>
        <img
          src={image}
          className={styles.productCard__image}
          alt={title}
        />
      </div>

      <div className={styles.productCard__priceWrapper}>
        <div className={styles.productCard__priceContainer}>
          {formattedPrice}
        </div>

        { isDiscountVisible && (
          <div className={styles.productCard__discountContainer}>
            <div className={discountBlockClassName}>
              {formattedDiscount}
            </div>
            <div className={oldPriceBlockClassName}>
              {formattedOldPrice}
            </div>
          </div>
        )}
      </div>

      <h3 className={styles.productCard__title}>
        {formattedTitle}
      </h3>

      <AddToCart
        counter={count}
        handleChangeCount={handleChangeCount}
        addElementToCart={addElementToCart}
      />
    </div>
  )
})

export default ProductCard
