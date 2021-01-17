import React, { useEffect, useState } from "react";
import CardChart from "./CardChart";
import { Grid, Hidden } from "@material-ui/core";
import { COLORS } from "./../../../../constants";
import Carousel from "react-material-ui-carousel";
import { api } from "./../../../../utils/api";

const rand = () => {
  return Math.random();
};

export default function Charts({ id }) {
  const [data, setData] = useState();
  const [hadir, setHadir] = useState();
  const [izin, setIzin] = useState();
  const [alpa, setAlpa] = useState();
  const [terlambat, setTerlambat] = useState();
  const [weeks, setWeeks] = useState();

  function weekList() {
    const array = [];
    for (let i = 1; i <= 16; i++) array.push(i);
    return array;
  }

  const listChart = [
    {
      name: "Hadir",
      data: {
        labels: weeks,
        datasets: [
          {
            label: "Hadir",
            data: hadir,
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
        labels: weeks,
        datasets: [
          {
            label: "Hadir",
            data: izin,
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
        labels: weeks,
        datasets: [
          {
            label: "Hadir",
            data: terlambat,
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
        labels: weeks,
        datasets: [
          {
            label: "Hadir",
            data: alpa,
            borderColor: "white",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      color: COLORS.status.alpa,
    },
  ];

  useEffect(() => {
    setWeeks(weekList());
    api
      .get(`subjects/${id}/attendances`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .then((res) => {
        loadData();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const loadData = () => {
    let jumlahHadir;
    let jumlahAlpa;
    let jumlahIzin;
    let jumlahTerlambat;
    const listHadir = [];
    const listAlpa = [];
    const listIzin = [];
    const listTerlambat = [];

    for (let week in data) {
      jumlahHadir = 0;
      jumlahAlpa = 0;
      jumlahIzin = 0;
      jumlahTerlambat = 0;
      for (let student in week.attendance) {
        if (student.status === "hadir") jumlahHadir++;
        else if (student.status === "alpa") jumlahAlpa++;
        else if (student.status === "izin") jumlahIzin++;
        else if (student.status === "telat") jumlahTerlambat++;
      }

      listHadir.push(jumlahHadir);
      listAlpa.push(jumlahAlpa);
      listIzin.push(jumlahIzin);
      listTerlambat.push(jumlahTerlambat);
    }

    setHadir(listHadir);
    setAlpa(listAlpa);
    setIzin(listIzin);
    setTerlambat(listTerlambat);
  };

  return (
    <Grid container spacing={2}>
      {console.log(hadir)}
      {console.log(alpa)}
      {console.log(terlambat)}
      {console.log(izin)}
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
