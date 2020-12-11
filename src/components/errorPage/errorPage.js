import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { COLORS } from "./../../constants";

export default function errorPage(props) {
  const {code, message} = (props.location && props.location.state) || {}

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      style={{
        position: "absolute",
        height: "100vh",
        zIndex: 100,
        width: "100vw",
        backgroundColor: `${COLORS.secondary}`,
      }}
    >
      <Grid
        item
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        xs={12}
      >
        <Typography variant="h1" style={{fontWeight: "600"}} color="textSecondary">
          {code ? code : "404"}
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        xs={12}
      >
        <Typography variant="body1" color="textSecondary">
          {message ? message : "Maaf, yang anda cari tidak tersedia"}
        </Typography>
      </Grid>
    </Grid>
  );
}
