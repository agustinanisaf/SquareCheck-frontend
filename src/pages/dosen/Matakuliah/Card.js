import React from 'react'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { Link, useRouteMatch } from 'react-router-dom'

export default function CardComponent({id}) {
  const match = useRouteMatch()
  React.useEffect(() => {
    // console.log(match)
  },[])

    return (
      <Grid
        item
        container
        xs={12}
        sm={6}
        md={4}
        component={Link}
        to={`${match.url}/1`}
        style={{textDecoration: "none", color: "#444444"}}
      >
        <CardContent
          component={Grid}
          container
          item
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={10} container alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body1">Senin, 20 Oktober 2020</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center">
              <NavigateNext />
          </Grid>
        </CardContent>
      </Grid>
    );
}
