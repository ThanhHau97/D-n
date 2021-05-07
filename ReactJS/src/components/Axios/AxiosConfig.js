import axios from 'axios';
import AuthService from '../../Services/AuthService';
const user = AuthService.getCurrentUser();
// const user = JSON.parse(localStorage.getItem('tokens'))
console.log(`Bearer `+user )
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
		'Content-Type': 'application/json',
         Authorization: `Bearer `+ user
	}
});
axiosInstance.interceptors.request.use(request => {
    // code to be executed
    return request;
}, error => {
    
});

export default axiosInstance;
// axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

// axiosInstance.interceptors.response.use(response => {
//     // code to be excuted.
//     console.log(response)
//     return response;
// }, error => {

// });

// axiosInstance.interceptors.request.use(request => {
//     // code to be executed
//     return request;
// }, error => {
    
// });

