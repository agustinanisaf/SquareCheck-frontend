import Cookie from "js-cookie";
import { api } from "./api";

export const login = (data) => {
  Cookie.set("tokenSquareCheck", data.token, {expires : 0.041666});
  // localStorage.setItem("expireToken", new Date().getTime());  
  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const logout = () => {
  Cookie.remove("tokenSquareCheck");
  delete api.defaults.headers.common["Authorization"];
};

export const isLogin = () => {
  if (Cookie.get("tokenSquareCheck")) {
    return true;
  }
  return false;
};

// const isExpire = () => {
//   const now = new Date();
//   let expire = now.getTime() - localStorage.getItem("expireToken");
//   expire = Math.round(expire / 60000);

//   return expire > 60 ? true : false;
// }
