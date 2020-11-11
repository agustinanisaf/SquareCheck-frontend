import React from "react";
import { Breadcrumbs, Typography, Link as RouterLink } from "@material-ui/core";
import { Route } from "react-router-dom";

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
                  style={{ textTransform: "capitalize" }}
                >
                  {value == "/" ? "home" : value}
                </Typography>
              ) : (
                <RouterLink
                  color="primary"
                  to={to}
                  key={to}
                  style={{ textTransform: "capitalize" }}
                >
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
