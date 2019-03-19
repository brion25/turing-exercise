import React from 'react'

import * as styles from './button.module.css'

const Button = ({className, children = '', ...props}) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
