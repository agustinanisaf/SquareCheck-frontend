import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./Dashboard.module.scss";
import CardComponent from "./Card";
import { COLORS } from "./../../../constants";
import {api} from "./../../../utils/api"

const Dashboard = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    api
      .get("schedules/summarize")
      .then((res) => {
        console.log(res);
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid item container className={classes.Dashboard} spacing={4}>
      {data.map((dataKey,i) => (
        <Grid key={i} md={4} sm={6} item className={classes.Card}>
          <CardComponent data={dataKey} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
