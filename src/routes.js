import Login from './pages/login/Login'
import { Dashboard as DosenDashboard } from './pages/dosen'
import Layout from './components/Layout'
import { Dashboard } from '@material-ui/icons';

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
    name: "Dosen",
    path: "/",
    exact: true,
    component: DosenDashboard,
    private: true,
  },
];