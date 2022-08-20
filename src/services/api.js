import axios from 'axios'

const api = axios.create({
  baseURL: 'https://back-form.herokuapp.com/api',
  headers: { accept: '*/*' }
})

export default api
