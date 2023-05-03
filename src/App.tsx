import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

import { useStore } from 'stores/globalStore'

import { Header, OrderList } from './modules'

import './App.css'

const App = observer(() => {
  const { productStore } = useStore()

  useEffect(() => {
    productStore.fetchProducts()
  }, [])

  return (
    <div className="app">
      <Header />
      <OrderList/>
      <Outlet />
    </div>
  )
})

export default App
