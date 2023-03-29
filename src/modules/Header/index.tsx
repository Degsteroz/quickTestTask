import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../stores/globalStore'

import Basket from './components/Basket'

import styles from './styles/styles.module.sass'

export const Header = observer(() => {
  const { cartStore } = useStore()

  const number = cartStore.getCartElementCounts

  return (
    <div className={styles.headerComponent}>
      <Basket count={number} />
    </div>
  )
})
