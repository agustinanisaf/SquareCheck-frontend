import React from "react";
import { Breadcrumbs, Typography, Link as LinkMUI } from "@material-ui/core";
import { Route, Link } from "react-router-dom";

export default function MyBreadcrumbs() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return (
          <Breadcrumbs aria-label="Breadcrumb">
            {/* <RouterLink color="inherit" to="/" color='textPrimary'>
              Home
            </RouterLink> */}
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  color="textPrimary"
                  key={to}
                  style={{ textTransform: "capitalize",}}
                >
                  {console.log(value)}
                  {value == "/" ? "Home" : value}
                </Typography>
              ) : (
                  <Link
                    to={to}
                    key={to}
                    style={{ textTransform: "capitalize", cursor: 'pointer', textDecoration:'none'}}
                  >
                  <LinkMUI color="primary" underline="hover">
                    {value}
                  </LinkMUI>
                  </Link>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
