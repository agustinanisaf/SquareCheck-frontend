import Cookie from "js-cookie";
import { api } from "./api";

export const login = (data) => {
  Cookie.set("token", data.token);
  localStorage.setItem("token", data.token);
  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const logout = () => {
  Cookie.remove("token");
  delete api.defaults.headers.common["Authorization"];
  // Cookie.remove("user");
};

export const isLogin = () => {
  if (Cookie.get("token")) {
    return true;
  }
  return false;
};
