import React from "react";
import CardChart from "./CardChart";
import {Grid} from '@material-ui/core'
import { COLORS } from './../../../../constants'

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
        {listChart.map((data) => (
          <Grid item xs={12} sm={6} md={3}>
            <CardChart
              name={data.name}
              spacing={2}
              dataset={data.data}
              color={data.color}
            />
          </Grid>
        ))}
      </Grid>
    );
}
