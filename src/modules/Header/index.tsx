import React from 'react'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'

import { useStore } from 'stores/globalStore'

import { CART } from 'src/routes/routesPaths'

import Basket from './components/BasketIcon'
import HomeIcon from './components/HomeIcon'

import styles from './styles/styles.module.sass'


export const Header = observer(() => {
  const { cartStore, appStore } = useStore()

  const number = cartStore.cartElementCounts
  const { orderListOpened, changeOrderListOpenState } = appStore

  const location = useLocation()
  const isCartPage = location.pathname === CART

  if (isCartPage && orderListOpened) {
    appStore.changeOrderListOpenState()
  }


  return (
    <div className={styles.headerComponent}>
      {
        isCartPage
          ? <HomeIcon />
          : <Basket count={number} />
      }

      {!isCartPage && (
        <Hamburger
          toggled={orderListOpened}
          toggle={changeOrderListOpenState}
        />
      )}
    </div>
  )
})
