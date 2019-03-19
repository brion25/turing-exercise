import React from 'react'

import Icon from '../icon/icon'
import * as styles from './input.module.css'

const Input = ({icon, className = '', ...props}) => {
  return (
    <label className={styles.wrapper}>
      <input className={`${styles.input} ${icon ? styles.withIcon : ''} ${className}`} {...props}/>
      {icon && (
        <Icon icon={icon} className={styles.icon}/>
      )}
    </label>
  )
}

export default Input
