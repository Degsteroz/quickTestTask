import React from 'react'

import styles from './styles.module.sass'

interface IBaseButton {
  onClick: () => void
  title: string

  className?: string
}

const BaseButton = ({
  onClick,
  title,
  className = '',
}: IBaseButton) => {
  const buttonClassName = `${styles.baseButtonComponent} ${className}`

  return (
    <div
      onClick={onClick}
      className={buttonClassName}
    >
      {title}
    </div>
  )
}

export default BaseButton
