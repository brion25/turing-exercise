import { getDepartmentsAPI, getFirstProductAPI } from './api'

import { SET_DEPARTMENTS, ADD_PRODUCT } from '../../store/reducer'

export const getDepartments = dispatch => () => {
  return getDepartmentsAPI().then(departments => {
    dispatch({
      type: SET_DEPARTMENTS,
      departments
    })
  })
}

export const getFirstProduct = dispatch => () => {
  return getFirstProductAPI().then(product => {
    dispatch({
      type: ADD_PRODUCT,
      product
    })
  })
}
