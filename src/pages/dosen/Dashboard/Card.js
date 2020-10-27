import React from 'react';
import { Card, Grid, CardContent, Typography, Paper } from '@material-ui/core'
import classes from './Dashboard.module.scss'



const CardComponent = ({data}) => {
    return (
      <Grid container component={Card} className={classes.CardComponent}>
        <CardContent component={Grid} container>
          <Grid item xs={12} container>
            <Grid item xs={8}>
              <Typography style={{ fontWeight: "700", lineHeight: "1.2em"}} gutterBottom>
                Mobile Programming
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" align="right">
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
                xs={3}
                key={i}
                component={Paper}
                style={{ padding: ".5em 0" }}
              >
                <Typography
                  align="center"
                  variant="h4"
                  style={{ color: `${key.color}` }}
                >
                  {key.amount}
                </Typography>
                <Typography
                  gutterBottom
                  align="center"
                  variant="body2"
                  color={key.color}
                >
                  {key.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item component={Typography} align="right" variant="caption">
            see more
          </Grid>
        </CardContent>
      </Grid>
    );
}

export default CardComponent;
