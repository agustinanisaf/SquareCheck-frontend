import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./Dashboard.module.scss";
import CardComponent from "./Card";
import { COLORS } from "./../../../constants";
import {api} from "./../../../utils/api"

const fakeData = [
  {
    name: "Hadir",
    amount: 100,
    color: COLORS.status.hadir,
  },
  {
    name: "Izin",
    amount: 8,
    color: COLORS.status.izin,
  },
  {
    name: "Terlambat",
    amount: 12,
    color: COLORS.status.telat,
  },
  {
    name: "Alpa",
    amount: 2,
    color: COLORS.status.alpa,
  },
];

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
      {data.map((data,i) => (
        <Grid key={i} md={4} sm={6} item className={classes.Card}>
          <CardComponent data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
