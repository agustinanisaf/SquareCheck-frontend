import axios from "axios";
import cookie from "js-cookie";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${cookie.get("token")}`,
  },
});
