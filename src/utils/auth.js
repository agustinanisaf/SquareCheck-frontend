import Cookie from "js-cookie";
import { api } from "./api";

export const login = (data) => {
  Cookie.set("token", data.token, { expires: 0.04166 });
  Cookie.set("token_type", data.token_type);
  api.interceptors.request.use((request) => {
    request.headers.authorization = `Bearer ${data.token}`;
    return request;
  }, err => {
      return Promise.reject(err)
  });
};

export const logout = () => {
  Cookie.remove("token");
  // Cookie.remove("user");
};

export const isLogin = () => {
  if (Cookie.get("token")) return true;
  else return false;
};
