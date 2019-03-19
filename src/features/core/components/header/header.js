import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../icon/icon'
import * as styles from './header.module.css'
import { homeUrl } from '../../../home/urls'
import { departmentUrl } from '../../../departments/urls'
import { connect } from '../../../../store/provider'

const Header = ({departments}) => {
  return (
    <header className={styles.header}>
      <Link to={homeUrl}>
        <h2 className={styles.title}>Shopmate</h2>
      </Link>
      {departments.map(({department_id, name}) => (
        <Link key={department_id} className={styles.link} to={departmentUrl(department_id)}>
          {name}
        </Link>
      ))}
      <div className={styles.icons}>
        <Icon icon="search" className={styles.search} />
        <Icon icon="shopping-bag" className={styles.bag} />
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  departments: state.departments
})

export default connect(mapStateToProps)(Header)
