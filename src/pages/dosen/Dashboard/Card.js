import React from 'react';
import { Card, Grid, CardContent, Typography, Paper } from '@material-ui/core'
import classes from './Dashboard.module.scss'
import {Link} from 'react-router-dom'
import {COLORS} from './../../../constants'

const CardComponent = ({data}) => {
  return (
    <Grid
      container
      component={Paper}
      elevation={4}
      className={classes.CardComponent}
    >
      <CardContent component={Grid} container>
        <Grid item xs={12} container>
          <Grid item xs={8}>
            <Typography
              style={{ fontWeight: "700", lineHeight: "1.2em" }}
              gutterBottom
              color="textPrimary"
            >
              Mobile Programming
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" align="right" color="textPrimary">
              20 Okt 2020
            </Typography>
          </Grid>
          <Typography variant="caption" color="primary">
            D4 A 2018
          </Typography>
        </Grid>
        <Grid container item xs={12} style={{ marginTop: "1em" }}>
          {data.map((key, i) => (
            <Grid
              item
              justify="center"
              direction="column"
              alignItems="center"
              xs={3}
              key={i}
              component={Paper}
              square
              style={{ padding: ".5em 0" }}
            >
              <Typography
                align="center"
                variant="h4"
                style={{ color: `${key.color}`, fontWeight: "700" }}
              >
                {key.amount}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                style={{ fontSize: ".8em" }}
                color={key.color}
              >
                {key.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item align="right" xs={12} style={{ paddingTop: ".5em" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="caption"
              style={{ color: `${COLORS.secondaryLight}` }}
            >
              see more
            </Typography>
          </Link>
        </Grid>
      </CardContent>
      {/* <Card */}
    </Grid>
  );
}

export default CardComponent;
