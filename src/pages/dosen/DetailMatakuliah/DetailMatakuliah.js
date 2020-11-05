import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { NavigateNextIcon } from "@material-ui/icons";
import Charts from "./Charts/Charts";
import Card from './Card'
import { useParams } from 'react-router-dom'

export default function DetailMatakuliah() {
  const {id} = useParams()

  return (
    <Grid container spacing={5}>
      {/* Judul dan tombol export */}
      <Grid container item spacing={2}>
        <Grid item sm={8} md={8} xs={12}>
          <Typography variant="h5">Mobile Programming</Typography>
          <Typography>3 D4 IT A</Typography>
        </Grid>
        <Grid container item xs={12} sm={4} md={4} justify="flex-end">
          <Grid item>
            <Button size='small' variant="contained" color="primary">
              Buka Presensi
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Chart */}
      <Grid container item spacing={2}><Charts/></Grid>

      {/* List Hari matakuliah */}
      <Grid container item spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
