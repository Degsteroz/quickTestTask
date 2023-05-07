import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'stores/globalStore'

import BaseButton from 'src/baseComponents/BaseButton'

import styles from './styles.module.sass'


export const PopupMessage = observer(() => {

  const { appStore } = useStore()

  const visible = appStore.isMessageVisible
  const handleClick = () => appStore.setMessageVisibleState(false)
  const buttonMessage = 'Close and continue shopping'

  const componentClassName = `${styles.popupMessageComponent} ${visible
    ? styles['--visible']
    : ''
  }`

  const imageUrl = 'https://35photo.pro/photos_main/1508/7544019.jpg'

  return (
    <div className={componentClassName}>
      <div className={styles.infoContainer}>
        <div className={styles.popupMessage}>
          Your order
          <div className={styles.popupMessage__number}>
            {Date.now()}
          </div>
          has been placed!
        </div>

        <BaseButton
          onClick={handleClick}
          title={buttonMessage}
          className={styles.successButton}
        />
      </div>

      <div className={styles.imageWrapper}>
        <img
          className={styles.popupMessage__image}
          src={imageUrl}
          alt="Order placed"
        />
      </div>
    </div>
  )
})
