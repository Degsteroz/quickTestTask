import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'

import { IProduct } from './Intarfaces'

import ProductCard from './components/ProductCard'

import styles from './styles/styles.module.sass'


export const Products = observer(() => {
  const { productStore } = useStore()


  const { products } = productStore

  const productsComponents = products.map((item: IProduct) => (
    <ProductCard product={item} key={item._id}/>
  ))

  return (
    <div className={styles.productsComponent}>
      <h1 className={styles.productsComponent__header}>
        Products
      </h1>
      <div className={styles.productsContainer}>
        {productsComponents}
      </div>
    </div>
  )
})
