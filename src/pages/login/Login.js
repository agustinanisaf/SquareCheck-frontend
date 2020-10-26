import React from "react";
import classes from "./Login.module.scss";
import { Grid, Typography, Paper } from "@material-ui/core";
import FormLogin from "./FormLogin";
import {COLORS} from './../../constants'

const Login = () => {
  return (
    <Grid container direction="row" spacing={0} className={classes.Login}>
      <Grid
        item
        xs={4}
        container
        justify="center"
        direction="column"
        className={classes.Form}
      >
        
        <FormLogin />
      </Grid>
      <Grid
        item
        xs={8}
        container
        justify="center"
        direction="column"
        style={{backgroundColor: `${COLORS.secondary}`}}
        className={classes.Side}
      >
        <Typography
          variant="h2"
          style={{ fontWeight: "600", color: "white", lineHeight: "1em" }}
        >
          Absen
          <br /> Tanpa Ribet
        </Typography>
        <Typography
          variant="h6"
          style={{ fontWeight: "400", color: "white", paddingTop: "1.5em" }}
        >
          Ingin aplikasi absensi yang mudah dan cepat? Square Checks solusi
          untuk Anda dengan fitur One-Click absen dan reminder ketika presensi
          kelas sudah dibuka serta dilengkapi dengan rekap absensi yang dapat
          diekspor ke PDF.
        </Typography>
				<div className={classes.image}></div>
      </Grid>
    </Grid>
  );
};

export default Login;
