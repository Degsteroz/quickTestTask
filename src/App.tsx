import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

import { useStore } from 'stores/globalStore'

import {
  Header,
  OrderList,
  Layout,
  PopupMessage,
} from './modules'

import './App.css'

const App = observer(() => {
  const { productStore, appStore } = useStore()

  const isLoading = appStore.loading
  const messageVisible = appStore.isMessageVisible
  const outletClass = `outlet ${isLoading || messageVisible ? 'loading' : ''}`

  useEffect(() => {
    productStore.fetchProducts()
  }, [])

  return (
    <div className="app">
      <div className={outletClass}>
        <Header />
        <Outlet />
      </div>

      <OrderList/>

      <Layout />
      <PopupMessage />
    </div>
  )
})

export default App
