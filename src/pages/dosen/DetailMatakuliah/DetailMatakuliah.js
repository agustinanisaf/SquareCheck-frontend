import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Table from "./Table";
import CardInfo from "./CardInfo";
import {useParams} from 'react-router-dom'

export default function DetailMatakuliah() {
  const params = useParams()

  React.useEffect(() => {
    console.log(params)
  },[])
  
  let view = (
    <Grid container spacing={3} xs={12}>
      <Grid container item spacing={2}>
        <Grid item sm={8} md={8} xs={12}>
          <Typography variant="h5" gutterBottom>
            Mobile Programming
          </Typography>
          <Typography>3 D4 IT A - 20 Okt 2020</Typography>
        </Grid>
        <Grid container item xs={12} sm={4} md={4} justify="flex-end">
          <Grid item>
            <Button size="small" variant="contained" color="primary">
              Export PDF
            </Button>
          </Grid>
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
  )

  if (params.date == 'presensi')
    view = null
  
  return (<div>{ view}</div>);
}
