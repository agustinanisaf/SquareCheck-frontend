import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../../constants";

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

const dataSet = {
  data: {
    labels: ["Hadir", "Izin", "Terlambat", "Alpa"],
    datasets: [
      {
        label: "Hadir",
        data: [100, 8, 12, 2],
        backgroundColor: [
          COLORS.status.hadir,
          COLORS.status.izin,
          COLORS.status.telat,
          COLORS.status.alpa,
        ],
      },
    ],
  },
};

const CardInfo = () => {
  return (
    <Grid container component={Paper} style={{ padding: "2em", paddingTop: '0' }}>
      <Grid item container sm={12} xs={6} justify='center' alignContent='center' alignItems='center'>
        <Doughnut
           height={"180%"}
          data={dataSet.data}
          options={{
            responsive: true,
            title: {
              display: false,
            },
            legend: {
                display: false,
            },
          }}
        />
      </Grid>
      <Grid item container sm={12} xs={6}>
        {fakeData.map((key, index) => (
          <Grid
            container
            item
            justify="center"
            direction="column"
            xs={6}
            key={index}
            component={Paper}
            //   square
            //   spacing={3}
            //   style={{ padding: ".5em 0" }}
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
              style={{ fontSize: ".9em" }}
            >
              {key.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CardInfo;
