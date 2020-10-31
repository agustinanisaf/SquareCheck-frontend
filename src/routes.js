import Login from './pages/login/Login'
import Dosen from './pages/dosen'

export const MAIN_ROUTES = [
    {
        name: "Login",
        path: "/login",
        component: Login,
        exact: true,
        restricted: true
    }, {
        name: "Dosen",
        path: "/",
        exact: true,
        component: Dosen,
        private: true,
    }
]