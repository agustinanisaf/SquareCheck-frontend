import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import classes from "./section.module.scss";

export default function section(props) {
  return (
    <Grid item container justify="center" style={{ padding: "4em 3em" }}>
      <Grid item container justify="center">
        <Hidden smUp>
          <Typography
            variant="h6"
            style={{ fontWeight: "600" }}
            className={classes.Title}
          >
            {props.title}
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography
            variant="h5"
            style={{ fontWeight: "600" }}
            className={classes.Title}
          >
            {props.title}
          </Typography>
        </Hidden>
      </Grid>
      <Hidden smUp>
        <Grid
          item
          container
          justify="center"
          spacing={2}
          style={{ paddingTop: "4em" }}
        >
          {props.children}
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid
          item
          container
          sm={10}
          alignContent="center"
          alignItems="center"
          spacing={3}
          style={{ paddingTop: "4em" }}
        >
          {props.children}
        </Grid>
      </Hidden>
    </Grid>
  );
}
