import Login from './pages/login/Login'
import {
  Dashboard as DosenDashboard,
  ListMatakuliah
} from './pages/dosen'

export const PUBLIC_ROUTES = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
    restricted: true,
  },
];

export const DOSEN_ROUTES = [
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: DosenDashboard,
    private: true,
  },
  {
    name: "Matakuliah",
    path: "/matakuliah",
    exact: true,
    component: ListMatakuliah,
    private: true,
  },
];