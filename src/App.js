import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Montserrat from "./assets/Montserrat-Regular.ttf";
import Dashboard from './pages/dosen/Dashboard/Dashboard'
import ListMataKuliah from './pages/dosen/ListMataKuliah/ListMataKuliah'

const montserrat = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url(${Montserrat}) format('truetype)`
}

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
    },
  },
  status: {
    hadir: "#00B152",
    telat: "#454E9E",
    izin: "#F3AA00",
    alpa: "#DB504A",
  },
});

theme = responsiveFontSizes(theme)

function App() {
  return (
     <ThemeProvider theme={theme}>
      {/* <div>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div> */}
      {/* <Dashboard/> */}
      <ListMataKuliah/>
    </ThemeProvider>
  );
}

export default App;
