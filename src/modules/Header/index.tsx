import React from 'react'
import { observer } from 'mobx-react-lite'
import './styles/styles.sass'
import Basket from './components/Basket'
import { useStore } from '../../stores/globalStore'

export const Header = observer(() => {
  const { productStore } = useStore()

  const number = productStore.count

  return (
    <div className="headerComponent">
      <Basket count={number} />
    </div>
  )
})
