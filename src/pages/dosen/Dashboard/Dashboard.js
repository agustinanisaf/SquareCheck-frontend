import React from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import classes from "./Dashboard.module.scss";
import CardComponent from "./Card";
import { COLORS } from "./../../../constants";
import { api } from "./../../../utils/api";

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api
      .get("schedules/summarize")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <Grid
      item
      container
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <CircularProgress />
    </Grid>
  ) : (
    <Grid
      item
      container
      className={classes.Dashboard}
      alignItems="center"
      justify="center"
      alignContent="center"
      spacing={4}
    >
      {data.length == 0 ? (<Typography variant="h5">Tidak ada riwayat presensi</Typography>) : data.map((dataKey, i) => (
        <Grid key={i} md={4} sm={6} item className={classes.Card}>
          <CardComponent data={dataKey} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
