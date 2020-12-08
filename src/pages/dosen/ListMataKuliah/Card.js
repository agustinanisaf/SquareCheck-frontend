import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import classes from "./ListMataKuliah.module.scss";
import { Link } from "react-router-dom";

const CardComponent = ({ subject }) => {
  return (
    <Grid
      container
      md={4}
      sm={6}
      item
      to={`/matakuliah/${subject.id}`}
      component={Link}
      className={classes.CardComponent}
      style={{ height: "100%", textDecoration: "none", width: "100%" }}
    >
      <Card component={Grid} container item style={{height : "100%"}}>
        <CardContent component={Grid} item container>
          <Grid xs={10} container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ lineHeight: "1.3em" }}
              >
                {subject.name}
              </Typography>
            </Grid>
            <Grid item container alignContent="flex-end" xs={12}>
              <Typography variant="subtitle1">
                {subject.classroom.slug}
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={2} direction="column" justify="center" container>
            <NavigateNextIcon alignItems="center"></NavigateNextIcon>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
