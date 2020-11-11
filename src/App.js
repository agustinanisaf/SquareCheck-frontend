import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Login from "./pages/login/Login";
import Presence from "./pages/presence/Presence";

=======
>>>>>>> 347599d69b062f0b822fed02ac12ed89d97ca269
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Montserrat from "./assets/Montserrat-Regular.ttf";
import { PublicRoute, PrivateRoute } from "./components/componentRoutes";
import { CookiesProvider } from "react-cookie";
import Layout from "./components/Layout";
import { DOSEN_ROUTES, PUBLIC_ROUTES } from "./routes";

const montserrat = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${Montserrat}) format('truetype)`,
};

let theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#0288D1",
      light: "#0DA9FD",
      dark: "#01579B",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#444444",
      secondary: "#fff",
    },
  },
  status: {
    hadir: "#00B152",
    telat: "#454E9E",
    izin: "#F3AA00",
    alpa: "#DB504A",
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    // <CookiesProvider>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
}

export default App;
