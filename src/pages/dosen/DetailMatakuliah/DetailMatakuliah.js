import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { NavigateNextIcon } from "@material-ui/icons";
import Charts from "./Charts/Charts";

export default function DetailMatakuliah() {
  return (
    <Grid container spacing={4}>
      {/* Judul dan tombol export */}
      <Grid container item spacing={2}>
        <Grid item sm={8} md={8} xs={12}>
          <Typography variant="h5">Mobile Programming</Typography>
          <Typography>3 D4 IT A</Typography>
        </Grid>
        <Grid container item xs={12} sm={4} md={4} justify="flex-end">
          <Grid item>
            <Button variant="contained" color="primary">
              Buka Presensi
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Chart */}
      <Grid container item spacing={2}><Charts/></Grid>

      {/* List Hari matakuliah */}
      <Grid container item spacing={2}></Grid>
    </Grid>
  );
}
