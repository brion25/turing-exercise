import React from 'react'

import * as styles from './footer.module.css'
import { connect } from '../../../../store/provider'

const Footer = ({departments}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Questions?</h3>
        <ul className={styles.sectionList}>
          <li className={styles.sectionListItem}>Help</li>
          <li className={styles.sectionListItem}>Track Order</li>
          <li className={styles.sectionListItem}>Returns</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>What's in Store</h3>
        <ul className={styles.sectionList}>
          {departments.map(({name, department_id}) => (
            <li key={department_id} className={styles.sectionListItem}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Follow Us</h3>
        <ul className={styles.sectionList}>
          <li className={styles.sectionListItem}>Facebook</li>
          <li className={styles.sectionListItem}>Twitter</li>
          <li className={styles.sectionListItem}>YouTube</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.copyright}>©2016 shopmate Ltd</h3>
      </div>
    </footer>
  )
}

const mapStateToProps = state => ({
  departments: state.departments
})

export default connect(mapStateToProps)(Footer)
