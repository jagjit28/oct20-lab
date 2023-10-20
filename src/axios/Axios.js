import axios from 'axios';

const baseURL = 'http://127.0.0.1:7000/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {'Content-Type': 'application/json'},
});

export default axiosInstance;