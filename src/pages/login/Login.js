import React from "react";
import classes from "./Login.module.scss";
import { Grid, Typography, Hidden } from "@material-ui/core";
import FormLogin from "./FormLogin";
import { COLORS } from './../../constants'
import {logo, typeLogo, hiIllus} from './../../assets'

const Login = () => {
  return (
    <Grid container direction="row" spacing={0} className={classes.Login}>
      <Grid
        item
        xs={12}
        sm={4}
        container
        // justify="center"
        direction="column"
        className={classes.Form}
      >
        <Grid
          container
          item
          justify="center"
          alignContent="center"
          style={{ padding: "1em", height: "120px" }}
        >
          <img src={logo} style={{ height: "25px" }} />
          <img src={typeLogo} style={{ height: "25px", paddingLeft: "10px" }} />
          {/* <img src={hiIllus }/> */}
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          style={{ height: "calc(100vh - 220px)" }}
        >
          <FormLogin />
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          sm={8}
          container
          justify="center"
          direction="column"
          style={{ backgroundColor: `${COLORS.secondary}` }}
          className={classes.Side}
        >
          <div style={{ maxWidth: "550px" }}>
            <Typography
              variant="h2"
              style={{ fontWeight: "600", color: "white", lineHeight: "1em" }}
            >
              Absen
              <br /> Tanpa Ribet
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontWeight: "400",
                color: "rgba(255,255,255,85%)",
                paddingTop: "1.5em",
                lineHeight: "1.7em",
              }}
            >
              Ingin aplikasi absensi yang mudah dan cepat? Square Checks solusi
              untuk Anda dengan fitur One-Click absen dan reminder ketika
              presensi kelas sudah dibuka serta dilengkapi dengan rekap absensi
              yang dapat diekspor ke PDF.
            </Typography>
          </div>
          <div className={classes.image}></div>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Login;
