import fetch from '../../fetch'

export const getDepartmentsAPI = () => fetch.get('/departments')
  .then(remoteData => remoteData.data)

export const getFirstProductAPI = () => fetch.get('/products/1/details')
  .then(remoteData => remoteData.data[0] || {})
