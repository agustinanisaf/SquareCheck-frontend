import axios from "axios";
import cookie from 'js-cookie'

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const apiWithHeader = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: "Bearer " + cookie.get('token'),
  },
});
// apiWithHeader.defaults.headers.common['Authorization'] = "Bearer " + cookie.get("token")
apiWithHeader.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status == 401) {
      
    } else {
      return Promise.reject(err)
    }
})