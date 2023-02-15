import React from 'react'
import { Link } from 'react-router-dom'

import { HOME } from 'src/routes/routesPaths'

import home from '../../assets/home.svg'

import styles from './styles.module.sass'

export default function HomeIcon() {
  return (
    <Link
      className={styles.homeIconComponent}
      to={HOME}
    >
      <img
        src={home}
        className={styles.homeIconComponent__icon}
        alt=""
      />

      <span className={styles.homeIconComponent__label}>
        HOME
      </span>
    </Link>
  )
}
