import Cookie from "js-cookie";
import { api } from "./api";
import {errorPage} from "./../components/errorPage/errorPage"

// api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     let error = {}
//     if (err.code === 401) {
//       error.code = 401
//       error.message = "Anda belum login"
//     } else if (err.code === 404) {
//       error.code = 404
//       error.message = "Halaman yang anda cari tidak ditemukan"
//     }
    
//     return Promise.reject(err)
//   }
// );

export const login = (data) => {
  Cookie.set("tokenSquareCheck", data.token);
  // localStorage.setItem("expireToken", new Date().getTime());
  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const logout = () => {
  Cookie.remove("tokenSquareCheck");
  delete api.defaults.headers.common["Authorization"];
};

export const isLogin = () => {
  if (!Cookie.get("tokenSquareCheck")) {
    logout();
    return false;
  }
  return true;
};

// const isExpire = () => {
//   const now = new Date();
//   let expire = now.getTime() - localStorage.getItem("expireToken");
//   expire = Math.round(expire / 60000);

//   return expire > 60 ? true : false;
// }
