import React, { useRef } from "react";
import TeamSection from "./teamSection";
import SpvSec from "./supervisorsSection";
import SponsorsSec from "./sponsorsSection";
import DownloadSec from "./downloadSection";
import { Grid, Button, Typography, Hidden } from "@material-ui/core";
import { COLORS } from "./../../constants";
import { useHistory } from 'react-router-dom';
import { typeLogoWhite, logoWhite, platform } from './../../assets'
import platformS from './../../assets/platform.png'
import classes from './index.module.scss'

export default function LandingPage() {
  const history = useHistory()

  const loginClick = () => {
    history.push('/login')
  }

  const Content = ({ varTitle, varBody }) => (
    <>
      <Typography
        variant={varTitle}
        style={{
          fontWeight: "600",
          color: "white",
          lineHeight: "1em",
          maxWidth: "550px",
        }}
      >
        Absen
        <br /> Tanpa Ribet
      </Typography>
      <Typography
        variant={varBody}
        style={{
          fontWeight: "400",
          color: "rgba(255,255,255,75%)",
          paddingTop: "1.5em",
          lineHeight: "1.7em",
          maxWidth: "550px",
        }}
      >
        Ingin aplikasi absensi yang mudah dan cepat? Square Checks solusi untuk
        Anda dengan fitur One-Click absen dan reminder ketika presensi kelas
        sudah dibuka serta dilengkapi dengan rekap absensi yang dapat diekspor
        ke PDF.
      </Typography>
    </>
  );

  const HeaderContent = ({ paddingSide }) => (
    <Grid
      container
      item
      xs={12}
      style={{
        padding: `1em ${paddingSide}`,
        background: COLORS.secondary,
        position: "fixed",
        zIndex: "100",
      }}
    >
      <Grid item container alignContent="center" xs={6}>
        <img src={logoWhite} style={{ height: "25px" }} />
        <img
          src={typeLogoWhite}
          style={{ height: "25px", paddingLeft: "10px" }}
        />
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        <Button
          size="small"
          style={{ color: "white", fontWeight: "600" }}
          onClick={loginClick}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid direction="row" container>
      {/* hero section */}
      <Grid item container style={{ background: COLORS.secondary }}>
        <Hidden smUp>
          <HeaderContent paddingSide="2em" />
        </Hidden>
        <Hidden xsDown>
          <HeaderContent paddingSide="7em" />
        </Hidden>

        <Grid
          style={{
            background: COLORS.secondary,
            height: `100vh`,
            padding: "2em",
          }}
          container
          alignContent="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid item container sm={6} xs={12} justify="center">
            <img src={platformS} style={{ width: "75%" }} />
          </Grid>
          <Grid
            item
            sm={6}
            container
            justify="center"
            direction="column"
            style={{ padding: "2em" }}
            className={classes.Hero}
          >
            <Hidden xsDown>
              <Content varTitle="h2" varBody="body1" />
            </Hidden>
            <Hidden smUp>
              <Content varTitle="h3" varBody="caption" />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>

      <TeamSection />
      <DownloadSec />
      <SpvSec />
      <SponsorsSec />
      <Grid
        item
        container
        xs
        justify="center"
        style={{
          marginTop: "5em",
          backgroundColor: `${COLORS.secondaryDark}`,
          color: "white",
          padding: "2em 3em",
        }}
      >
        <Typography variant="subtitle1">@2020</Typography>
      </Grid>
    </Grid>
  );
}
