import axios from "axios";
console.log('aaa', process.env.NEXT_PUBLIC_CAT_X_API_KEY)
const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_CAT_X_API_KEY || '',
  }
})

export default axiosInstance