import axios from 'axios'
import { AUTH } from '@/stores'


var token = JSON.parse(localStorage.getItem('token'))
const AUTH_TOKEN = token ? `Bearer ${token.access}` : ''

window.axios = axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL
if (AUTH_TOKEN){
  axios.defaults.headers.common = {'Authorization' : AUTH_TOKEN};
}
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


// Do something before request is sent
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error)
    return Promise.reject(error);
});

  

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { user } = AUTH()
    const auth = AUTH()

    if ([401, 403].includes(error.response.status) && user.token) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      // auth.logout();
      refreshToken()
          
    }

  return Promise.reject(error);
});


let b64DecodeUnicode = str =>
  decodeURIComponent(
    Array.prototype.map.call(atob(str), c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))

let parseJwt = token =>
  JSON.parse(
    b64DecodeUnicode(
      token.split('.')[1].replace('-', '+').replace('_', '/')
    )
  )


async function refreshToken(){
    if (token){

      try {
        const response = await axios.post('/auth/jwt/refresh/', {'refresh' : token.refresh});
        token.access = response.data.access
        localStorage.setItem('token', JSON.stringify(token));
        
        // var decoded = parseJwt(token);
        // console.log(decoded);

      } catch (error) {
        console.error(error);
      }


    }else{
      const auth = AUTH()
      auth.logout();
    }
}


