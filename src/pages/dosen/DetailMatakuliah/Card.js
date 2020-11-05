import React from 'react'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import {NavigateNext} from '@material-ui/icons'

export default function CardComponent() {
    return (
      <Grid item container component={Card}>
        <CardContent component={Grid} item container alignContent="center">
          <Grid item xs={10} container>
            <Grid item xs={12}>
              <Typography variant="body1">Senin, 20 Oktober 2020</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={2} justify="center">
            <NavigateNext alignItems="center"></NavigateNext>
          </Grid>
        </CardContent>
      </Grid>
    );
}
