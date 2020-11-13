import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Table from "./Table";
import CardInfo from "./CardInfo";

export default function Presensi() {
  return (
    <Grid container spacing={3} xs={12}>
      <Grid container item spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Mobile Programming
          </Typography>
          <Typography>3 D4 IT A - 20 Okt 2020</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item container sm={12} xs={12} md={4}>
          <CardInfo />
        </Grid>
        <Grid item container sm={12} xs={12} md={8}>
          <Table />
        </Grid>
      </Grid>
    </Grid>
  );
}