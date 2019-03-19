export const SET_DEPARTMENTS = 'SET_DEPARTMENTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

export const initialState = {
  departments: [],
  products: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.departments
      }
    case ADD_PRODUCT:
      const { product } = action
      const currentProducts = state.products.filter(({product_id}) => product_id !== product.product_id)
      return {
        ...state,
        products: [...currentProducts, action.product]
      }
    default:
      return initialState
  }
}

export default reducer
