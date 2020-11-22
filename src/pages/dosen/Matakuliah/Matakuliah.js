import React, {useState, useEffect} from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import {api} from "./../../../utils/api"
import Charts from "./Charts/Charts";
import ListWaktu from './ListWaktu'
import { useParams, Link, useHistory } from 'react-router-dom'

export default function DetailMatakuliah() {
  const { id } = useParams()
  const history = useHistory()
  const [subject, setSubject] = useState();
  const [slug, setSlug] = useState();
  const [listWaktu, setListWaktu] = useState([]);

  useEffect(() => {
    api
      .get(`subjects/${id}`)
      .then((res) => {
        setSubject(res.data.data.name);
        setSlug(res.data.data.classroom.slug);
        return api.get(`subjects/${id}/schedules`, {
          params: {
            limit: 100
          }
        });
      })
      .then((res) => {
        console.log(res.data.data)
        setListWaktu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onPresensiClicked = (e) => {
    e.preventDefault()

    api.post(`schedules/${id}/open`)
      .then(res => {
        history.push(`/matakuliah/${id}/presensi`)
      })
      .catch(err => {
      console.log(err)
    })
  }

  return (
    <Grid item container spacing={5}>
      {/* Judul dan tombol export */}
      <Grid container item spacing={2}>
        <Grid item sm={8} md={8} xs={6}>
          <Typography variant="h5">{subject}</Typography>
          <Typography>{slug}</Typography>
        </Grid>
        <Grid container item xs={6} sm={4} md={4} justify="flex-end">
          <Grid item>
            <Button size="small" variant="contained" color="primary" onClick={onPresensiClicked} >
              Buka Presensi
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Chart */}
      <Grid container item spacing={2}>
        <Charts />
      </Grid>

      {/* List Hari matakuliah */}
      {/* <Grid container item> */}
      <ListWaktu
        data={listWaktu}
        id={id}
        sizeData={listWaktu.length}
      />
      {/* </Grid> */}
    </Grid>
  );
}
