import React, { useState } from 'react'

import BaseButton from 'src/baseComponents/BaseButton'

import styles from './styles.module.sass'

interface ICartClearComponent {
  handleClick: () => void
}

const CartClearComponent = ({
  handleClick,
}: ICartClearComponent) => {
  const [messageVisible, setMessageVisible] = useState(false)

  const handleMessageClick = () => {
    setMessageVisible(prevState => !prevState)
  }

  const closeMessageContainer = () => setMessageVisible(false)

  const confirmComponentClassName = `${styles.confirmComponent} ${
    messageVisible
      ? styles['--visible']
      : ''
  }`

  const confirmButtonText = 'Agree'
  const declineButtonText = 'Decline'
  const confirmMessage = 'Are you sure you want to clear ' +
    'cart? It will be impossible to undo this action.'

  return (
    <div className={styles.cartClearComponent}>
      <div
        className={styles.clearCartButton}
        onClick={handleMessageClick}
      >
        Clear cart
      </div>

      <div className={confirmComponentClassName}>
        <div className={styles.separator}/>

        <div className={styles.confirmMessage}>
          {confirmMessage}
        </div>

        <div className={styles.buttonContainer}>
          <BaseButton
            onClick={handleClick}
            title={confirmButtonText}
            className={styles.confirmButton}
          />

          <BaseButton
            onClick={closeMessageContainer}
            title={declineButtonText}
            className={styles.declineButton}
          />
        </div>
      </div>
    </div>
  )
}

export default CartClearComponent
