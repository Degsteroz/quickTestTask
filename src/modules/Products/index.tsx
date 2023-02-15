import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../stores/globalStore'

import { IProduct } from './Intarfaces'
import ProductCard from './components/productCard'

import styles from './styles/styles.module.sass'


const Products = observer(() => {
  const { productStore } = useStore()

  useEffect(() => {
    productStore.fetchProducts()
  }, [])

  const { products } = productStore

  const productsComponents = products.map((item: IProduct) => (
    <ProductCard product={item}/>
  ))

  return (
    <div className={styles.productsComponent}>
      <h1>Products</h1>
      <div className={styles.productsContainer}>
        {productsComponents}
      </div>
    </div>
  )
})

export default Products
