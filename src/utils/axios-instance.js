import axios from 'axios'

//fetch data
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
})
