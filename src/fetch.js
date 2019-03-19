import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backendapi.turing.com/',
  timeout: 5000,
})

export default instance
