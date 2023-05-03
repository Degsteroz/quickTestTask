import React from 'react'

import styles from './styles/styles.module.sass'

interface IChangeCountComponent {
  counter: number,
  handleChangeCount: (value: number) => void
}

export default function ChangeCountComponent({
  counter,
  handleChangeCount
} : IChangeCountComponent) {
  const isCounterMaxValue = (counter && counter > 9)
  const counterValue = counter || 0

  const changeCount = (
    event: React.MouseEvent<HTMLDivElement>,
    value: number
  ) => {
    event.stopPropagation()
    event.preventDefault()
    handleChangeCount(value)
  }

  const handleIncrementValue = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (isCounterMaxValue) return

    changeCount(event, 1)
  }

  const handleDecrementValue = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => changeCount(event,-1)

  const minusButtonLabel = counterValue === 1
    ? 'x'
    : '-'

  const incrementButtonClassName = `${styles.counterButton} ${
    isCounterMaxValue
      ? styles['--disabled']
      : ''
  }`
  return (
    <div className={styles.counterChangeComponent}>
      <div
        onClick={handleDecrementValue}
        className={styles.counterButton}
      >
        {minusButtonLabel}
      </div>

      <span className={styles.itemCount}>
        {counterValue}
      </span>

      <div
        onClick={handleIncrementValue}
        className={incrementButtonClassName}
      >
        +
      </div>
    </div>
  )
}
