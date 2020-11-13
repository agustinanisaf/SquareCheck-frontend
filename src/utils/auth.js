import Cookie from "js-cookie";
import { api } from "./api";

export const login = (data) => {
  Cookie.set("token", data.token, { expires: 0.04166 });
  Cookie.set("token_type", data.token_type);
  api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const logout = () => {
  Cookie.remove("token");
  // Cookie.remove("user");
};

export const isLogin = () => {
  if (Cookie.get("token")) return true;
  else return false;
};
