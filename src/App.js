
import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Montserrat from "./assets/Montserrat-Regular.ttf";
import { PublicRoute, PrivateRoute } from "./components/componentRoutes";
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
    <ThemeProvider theme={theme}>
      <Switch>
        {PUBLIC_ROUTES.map((val) => (
          <PublicRoute
            key={val.name}
            path={val.path}
            exact={val.exact}
            component={val.component}
            restricted={val.restricted}
          />
        ))}
        <Layout>
          {DOSEN_ROUTES.map((val) => (
            <PrivateRoute
              key={val.name}
              path={val.path}
              exact={val.exact}
              component={val.component}
              private={val.private}
            />
          ))}
        </Layout>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
