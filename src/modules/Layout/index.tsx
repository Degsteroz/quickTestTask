import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'stores/globalStore'

import loadingImage from './assets/loadingImage.jpg'

import styles from './styles/styles.module.sass'


export const Layout = observer(() => {
  const { appStore } = useStore()

  if (!appStore.loading) return null

  return (
    <div className={styles.layoutComponent}>
      <img src={loadingImage} className={styles.spinner} alt="Page is loading"/>
    </div>
  )
})
