import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'live_oikBD8cbLd9XyimT1iJ1EXniAwAAubHb05ua4BxJ9mRJhBpLuPMwTQSCU7QsuqL8',
  }
})

export default axiosInstance