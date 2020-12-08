import React from "react";
import CardChart from "./CardChart";
import { Grid, Hidden } from "@material-ui/core";
import { COLORS } from "./../../../../constants";
import Carousel from "react-material-ui-carousel";

const rand = () => {
  return Math.random();
};

export default function Charts() {
  const listChart = [
    {
      name: "Hadir",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "Hadir",
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: "white",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      color: COLORS.status.hadir,
    },
    {
      name: "Izin",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "Hadir",
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: "white",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      color: COLORS.status.izin,
    },
    {
      name: "Terlambat",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "Hadir",
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: "white",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      color: COLORS.status.telat,
    },
    {
      name: "Alpa",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "Hadir",
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: "white",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      color: COLORS.status.alpa,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Hidden smDown>
        {listChart.map((data) => (
          <Grid item xs={6} md={3}>
            <CardChart
              name={data.name}
              spacing={2}
              dataset={data.data}
              color={data.color}
            />
          </Grid>
        ))}
      </Hidden>
      <Hidden smUp>
        <Grid container component={Carousel}>
          {listChart.map((data) => (
            <Grid container item style={{ height: "150px" }} xs={12}>
              <CardChart
                name={data.name}
                spacing={2}
                dataset={data.data}
                color={data.color}
              />
            </Grid>
          ))}
        </Grid>
      </Hidden>
    </Grid>
  );
}
