import React from 'react'
import { IProduct } from '../../Intarfaces'

import styles from './index.module.sass'

export default function ProductCard({
  product
} : { product: IProduct }) {
  const { title, price, description, images } = product
  const [currentImage] = images || []
  console.log(currentImage, product)

  return (
    <div className={styles.productCard}>
      <img
        src={currentImage}
        className={styles.productCard__image}
        alt={title}
      />
      <div>{title}</div>
      <div>{price}</div>
      <div>{description}</div>
    </div>
  )
}
