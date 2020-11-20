import React, {useState} from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "./../../../constants";
import { Link, useHistory } from "react-router-dom";
import { api } from "./../../../utils/api";

const CardInfo = ({ id }) => {
  const history = useHistory();
  const [hadir, setHadir] = useState(12)
  const [tidakHadir, setTidakHadir] = useState(18)

  React.useEffect(() => {}, []);

  const onCloseClick = (e) => {
    api
      .post(`schedules/${id}/close`)
      .then((res) => {
        console.log(res);
        history.push(`/matakuliah/${id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataSet = {
    data: {
      labels: ["Hadir", "Tidak Hadir"],
      datasets: [
        {
          label: "Hadir",
          data: [hadir, tidakHadir],
          backgroundColor: [COLORS.secondaryLight, COLORS.secondaryDark],
        },
      ],
    },
  };

  return (
    <Grid
      container
      component={Paper}
      style={{ padding: "2em", paddingTop: "0" }}
    >
      <Grid
        item
        container
        xs={12}
        justify="center"
        alignContent="center"
        alignItems="center"
      >
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
      <Grid
        item
        alignContent="center"
        alignItems="center"
        justify="center"
        container
        xs={12}
      >
        <Grid
          item
          alignContent="center"
          alignItems="center"
          justify="center"
          container
          xs={12}
        >
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: "700", paddingBottom: ".15em" }}
          >
            {hadir} / {hadir + tidakHadir}
          </Typography>
        </Grid>
        <Grid
          item
          alignContent="center"
          alignItems="center"
          justify="center"
          container
          xs={12}
        >
          <Typography
            gutterBottom
            variant="body1"
            style={{ fontWeight: "600", paddingBottom: "1.2em" }}
          >
            Hadir
          </Typography>
        </Grid>
        <Grid
          item
          alignContent="center"
          alignItems="center"
          justify="center"
          container
          xs={12}
        >
          <Link to="/matakuliah/1" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="small" >
              Tutup Presensi
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardInfo;
