import React from 'react'
import { Link } from 'react-router-dom'

import natureImg from './nature.jpg'
import regionalImg from './regional.jpg'
import * as styles from './departmen-block-link.module.css'
import { departmentUrl } from '../../urls'

const DEPARTMENT_IMG_MAP = {
  1: regionalImg,
  2: natureImg,
}

const DEPARTMENT_CLASSNAME_MAP = {
  1: styles.isRegional,
  2: styles.isNature,
}

const DepartmentBlockLink = ({name, department_id, className = ''}) => {
  return (
    <Link to={departmentUrl(department_id)} className={className}>
      <div className={`${styles.link} ${DEPARTMENT_CLASSNAME_MAP[department_id]}`}>
        <img className={styles.img} src={DEPARTMENT_IMG_MAP[department_id]} alt={name} />
        <span className={styles.text}>{name}</span>
      </div>
    </Link>
  )
}

export default DepartmentBlockLink
