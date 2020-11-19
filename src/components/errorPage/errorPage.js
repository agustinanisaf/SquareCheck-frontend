import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { COLORS } from "./../../constants";

export default function errorPage() {
  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      style={{
        position: "absolute",
        height: "100vh",
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
          404
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
          Halaman tidak ditemukan
        </Typography>
      </Grid>
    </Grid>
  );
}
