import React from 'react';
import { Card, Grid, CardContent, Typography, Paper } from '@material-ui/core'
import classes from './Dashboard.module.scss'
import {Link} from 'react-router-dom'
import { COLORS } from './../../../constants'
import moment from 'moment'

const CardComponent = ({ data }) => {
  const [loading, setLoading] = React.useState(true);

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
              {data.subject.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" align="right" color="textPrimary">
              {moment(data.time).format('D MMM YY')}
            </Typography>
          </Grid>
          <Typography variant="caption" color="primary">
            {data.subject.classroom.slug}
          </Typography>
        </Grid>
        <Grid container item xs={12} style={{ marginTop: "1em" }}>
            <Grid
              container
              item
              justify="center"
              direction="column"
              xs={3}
              component={Paper}
              square
              style={{ padding: ".5em 0" }}
            >
              <Typography
                align="center"
                variant="h4"
                style={{ color: `${COLORS.status.hadir}`, fontWeight: "700" }}
              >
                {data.hadir}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                style={{ fontSize: ".8em" }}
            >
              Hadir
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              direction="column"
              xs={3}
              component={Paper}
              square
              style={{ padding: ".5em 0" }}
            >
              <Typography
                align="center"
                variant="h4"
                style={{ color: `${COLORS.status.izin}`, fontWeight: "700" }}
              >
                {data.izin}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                style={{ fontSize: ".8em" }}
            >
              Izin
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              direction="column"
              xs={3}
              component={Paper}
              square
              style={{ padding: ".5em 0" }}
            >
              <Typography
                align="center"
                variant="h4"
                style={{ color: `${COLORS.status.telat}`, fontWeight: "700" }}
              >
                {data.terlambat}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                style={{ fontSize: ".8em" }}
            >
              Terlambat
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              direction="column"
              xs={3}
              component={Paper}
              square
              style={{ padding: ".5em 0" }}
            >
              <Typography
                align="center"
                variant="h4"
                style={{ color: `${COLORS.status.alpa}`, fontWeight: "700" }}
              >
                {data.alpa}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                style={{ fontSize: ".8em" }}
            >
              Alpa
              </Typography>
            </Grid>
        </Grid>
        <Grid item align="right" xs={12} style={{ paddingTop: ".5em" }}>
          <Link to={`/matakuliah/${data.subject.id}/${data.id}`} style={{ textDecoration: "none" }}>
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
