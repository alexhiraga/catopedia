import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_CAT_X_API_KEY || '',
  }
})

export default axiosInstance