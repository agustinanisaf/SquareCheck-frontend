import Login from './pages/login/Login'
import {
  Dashboard as DosenDashboard,
  ListMatakuliah,
  DetailMatakuliah,
  Matakuliah
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
    path: "/",
    exact: true,
    component: DosenDashboard,
    private: true,
    restricted: false,
  },
  {
    name: "Matakuliah",
    path: "/matakuliah",
    exact: true,
    component: ListMatakuliah,
    private: true,
    restricted: false,
  },
  {
    name: "Matakuliah",
    path: "/matakuliah/:id",
    exact: true,
    component: Matakuliah,
    private: true,
    restricted: false,
  },
  {
    name: "Detail Matakuliah",
    path: "/matakuliah/:id/:date",
    exact: true,
    component: DetailMatakuliah,
    private: true,
    restricted: false,
  },
];