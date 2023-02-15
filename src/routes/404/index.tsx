import React from 'react'

import errorImage from './assets/errorImage.jpg'
import styles from './styles/styles.module.sass'

export const ErrorPage = () => {
  const message = 'Уважаемый, вы не по адресу!'

  return (
    <div className={styles.errorPage}>
      <img
        className={styles.errorPage__image}
        src={errorImage}
        alt=""
      />
      {message}
    </div>
  )
}
