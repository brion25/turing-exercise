import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import DepartmentSeasonal from '../../../departments/components/department-seasonal/department-seasonal'
import DepartmentBlockLink from '../../../departments/components/department-block-link/department-block-link'
import Card from '../../../core/components/card/card'
import Button from '../../../core/components/button/button'
import Input from '../../../core/components/input/input'
import ProductImg from '../../../product/components/product-img/product-img'
import registerImg from './register.jpg'
import * as styles from './home-view.module.css'
import { connect } from '../../../../store/provider'
import { getDepartments, getFirstProduct } from '../../service'

const SEASONAL_DEPARTMENT = 3

const HomeView = ({getDepartments, getFirstProduct, departments, product}) => {
  React.useEffect(() => {
    if (_isEmpty(departments)) {
      getDepartments()
    }
  }, [departments])
  React.useEffect(() => {
    if (_isEmpty(product)) {
      getFirstProduct()
    }
  }, [product])

  const seasonal = departments.find(({department_id}) => department_id === SEASONAL_DEPARTMENT)
  const otherDepartments = departments.filter(({department_id}) => department_id !== SEASONAL_DEPARTMENT)
  
  return (
    <div>
      <DepartmentSeasonal department={seasonal} />
      <div className={styles.content}>
        {!_isEmpty(product) && (
          <Card className={styles.product}>
            <ProductImg product={product} className={styles.productImg} />
            <div className={styles.productContent}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <Button className={styles.productBtn}>Shop Now</Button>
            </div>
          </Card>
        )}
        {otherDepartments.map(department => (
          <DepartmentBlockLink key={department.department_id} {...department} className={styles.department}/>
        ))}
        <Card className={styles.signin}>
          <img src={registerImg} alt="Registration" className={styles.registrationImg} />
          <div>
            <h2 className={styles.registrationHeader}>Let the Game Begin</h2>
            <p className={styles.registrationContent}>Registration is on - get ready for the Open</p>
            <Button>Register</Button>
          </div>
        </Card>
      </div>
      <div className={styles.subscribe}>
        <h3 className={styles.subscribeHeader}>10% Discount for your subscription</h3>
        <p className={styles.subscribeContent}>
          Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior.
        </p>
        <div>
          <Input icon="envelope" placeholder="Your e-mail here" className={styles.subscribeInput}/>
          <Button className={styles.subscribeButton}>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  departments: state.departments,
  product: state.products.find(({product_id}) => product_id === 1 ) || {}
})

const mapDispatchToProps = {
  getDepartments,
  getFirstProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
