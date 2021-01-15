import Login from './pages/login/Login'
import landingPage from './pages/landingPage'
import {
  Dashboard as DosenDashboard,
  ListMatakuliah,
  DetailMatakuliah,
  Matakuliah,
  Presensi
} from './pages/dosen'

export const PUBLIC_ROUTES = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
    restricted: true,
  },
  {
    name: 'Landing Page',
    path: '/',
    component: landingPage,
    exact: true,
    restricted: true
  }
];

export const DOSEN_ROUTES = [
  {
    name: "Presensi Baru",
    path: "/matakuliah/:id/presensi",
    exact: true,
    component: Presensi,
    private: true,
  },
  {
    name: "Home",
    path: "/home",
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