import React from "react";
import { Card, Grid, CardContent, Typography, Paper } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import classes from "./ListMataKuliah.module.scss";
import { Link } from "react-router-dom";
import { COLORS } from "./../../../constants";

const CardComponent = () => {
  return (
    <Grid container component={Card} className={classes.CardComponent}>
      <CardContent component={Grid} container>
        <Grid sm={10} container>
          <Grid item sm={10}>
            <Typography variant="h6">Mobile Programming</Typography>
          </Grid>
          <Grid item sm={10}>
            <Typography variant="subtitle1">D4 A 2018</Typography>
          </Grid>
        </Grid>
        <Grid sm={2} direction="column" justify="center" container>
          <Link to={`/matakuliah/${1}`}>
            <NavigateNextIcon alignItems="center"></NavigateNextIcon>
          </Link>
        </Grid>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
