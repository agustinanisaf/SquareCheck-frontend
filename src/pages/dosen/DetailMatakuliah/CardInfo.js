import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../../constants";

export default function CardInfo({data}) {
  const [hadir, setHadir] = React.useState();
  const [telat, setTelat] = React.useState();
  const [izin, setIzin] = React.useState();
  const [alpa, setAlpa] = React.useState();

  React.useEffect(() => {
    summerize()
    console.log(data)
  }, [data])
  
  const summary = [
    {
      name: "Hadir",
      amount: hadir,
      color: COLORS.status.hadir,
    },
    {
      name: "Izin",
      amount: izin,
      color: COLORS.status.izin,
    },
    {
      name: "Terlambat",
      amount: telat,
      color: COLORS.status.telat,
    },
    {
      name: "Alpa",
      amount: alpa,
      color: COLORS.status.alpa,
    },
  ];

  const dataChart = {
    data: {
      labels: ["Hadir", "Izin", "Terlambat", "Alpa"],
      datasets: [
        {
          label: "Hadir",
          data: [hadir, izin, telat, alpa],
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

  function summerize() {
    let hadirCounter = 0;
    let alpaCounter = 0;
    let izinCounter = 0;
    let telatCounter = 0;

    for (let key in data) {

      switch (data[key].status) {
        case "hadir": hadirCounter++; break;
        case "izin": izinCounter++; break;
        case "alpa": alpaCounter++; break;
        case "telat": telatCounter++; break;
        default: break;
      }
    }

    setHadir(hadirCounter)
    setIzin(izinCounter)
    setAlpa(alpaCounter)
    setTelat(telatCounter)
  }

  return (
    <Grid container component={Paper} style={{ padding: "1.3em"}}>
      <Grid item container xs={12} justify='center' alignContent='center' alignItems='center'>
        <Doughnut
           height={180}
          data={dataChart.data}
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
      <Grid item container xs={12}>
        {summary.map((key, index) => (
          <Grid
            container
            item
            justify="center"
            direction="column"
            xs={6}
            key={index}
            component={Paper}
            //   square
              // spacing={3}
              style={{ padding: "1em 0" }}
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
