import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from './icon.module.css'

const Icon = ({ className = '', icon }) => (
  <div className={`${styles.icon} ${className}`} >
    <FontAwesomeIcon icon={icon}/>
  </div>
)

export default Icon
