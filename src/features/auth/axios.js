import axios from 'axios'
import API from '../../apis'


const BASE_URL = API

const accessToken = localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null
const refreshToken = localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `${JWT} ${accessToken}` }

})