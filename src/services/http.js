import axios from 'axios'

const apiSarnento = import.meta.env.VITE_API_SARNENTO

console.log(import.meta.env.VITE_API_SARNENTO)
const axiosInstance = axios.create({
    baseURL: apiSarnento, 
    headers: {
        'Content-Type': 'application/json'
    }
    
})


export default axiosInstance