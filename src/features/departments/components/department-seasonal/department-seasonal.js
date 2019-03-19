import React from 'react'

import img from './department-seasonal.jpg'
import * as styles from './department-seasonal.module.css'

const DepartmentSeasonal = ({department = {}}) => {
  return (
    <div className={styles.seasonal}>
      <img src={img} className={styles.img} alt={department.name} />
      <h2 className={styles.title}>{department.name}</h2>
      <p className={styles.description} >{department.description}</p>
    </div>
  )
}

export default DepartmentSeasonal
