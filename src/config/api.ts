import axios from 'axios'
import {useAuthStore} from '@/stores/AuthStore.ts'
export default () =>
  axios.create({
    baseURL: 'https://hajj-umrah-backend.islamicdigitallane.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
      "Content-Type": "multipart/form-data",
      'Accept': 'application/json',
      Authorization: `Bearer ${useAuthStore().token}`

    }
  })
