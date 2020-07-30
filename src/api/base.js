import axios from 'axios'
//import $store from '../store/'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let config = {
    baseURL: "http://localhost:8000/api/",
    //baseURL: process.env.baseURL || process.env.apiUrl || "",
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

export const api = axios.create(config)

const token = localStorage.getItem('token')
api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : "";
// For every request check if the token ia available and set it as Authorization header.
// Ternery operators if token is set means its not empty , set to "Bearer toekn value" else set to empty

api.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        NProgress.start()
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function(response) {
        // Do something with response data
        NProgress.done()
        return response;
    },
    function(error) {
        // if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
        //     $store.dispatch("user/logoutUser")

        // }
        return Promise.reject(error);
    }
);