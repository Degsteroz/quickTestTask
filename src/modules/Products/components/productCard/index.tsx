import React  from 'react'
import { observer } from 'mobx-react-lite'

import { IProduct } from '../../Intarfaces'

import { DEFAULT_IMAGE } from '../../config'

import { formatMoney, formatTitle } from '../../../../utils'

import { useStore } from '../../../../stores/globalStore'

import AddToCart from '../addToCartComponent'

import styles from './index.module.sass'


const ProductCard = observer(({
  product
} : { product: IProduct }) => {
  const { cartStore } = useStore()
  const { title, price, image, _id } = product
  const currentImageSrc = image || DEFAULT_IMAGE

  const cartStoreElement = cartStore.getItem(_id)
  const { count } = cartStoreElement || {}

  const formattedPrice = formatMoney(price)

  const addElementToCart = () => {
    cartStore.addElementToCart(product)
  }

  const handleChangeCount = (value: number) => {
    cartStore.changeElementCount(_id, value)
  }

  return (
    <div className={styles.productCard}>
      <img
        src={currentImageSrc}
        className={styles.productCard__image}
        alt={title}
      />

      <div className={styles.productCard__priceContainer}>
        {formattedPrice}
      </div>

      <h3 className={styles.productCard__title}>
        {formatTitle(title)}
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
