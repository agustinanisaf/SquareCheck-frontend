import React, { useState } from "react";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import Table from "./../../../components/Table";
import CardInfo from "./CardInfo";
import { useParams } from "react-router-dom";
import { api } from "./../../../utils/api";
import moment from "moment";

export default function DetailMatakuliah() {
  const { date, id } = useParams();
  const [dataTable, setDataTable] = useState([]);
  const [subject, setSubject] = useState();
  const [time, setTime] = useState();
  const [slug, setSlug] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    api
      .get(`schedules/${date}`)
      .then((res) => {
        console.log(res.data.data);
        setSubject(res.data.data.subject.name);
        setTime(res.data.data.time);
        setSlug(res.data.data.subject.classroom.slug);
        return api.get(`schedules/${date}/attendances`);
      })
      .then((res) => {
        console.log(res.data.data);
        setDataTable(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let view = loading ? (
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
      container
      spacing={3}
      xs={12}
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <div>
        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              {subject}
            </Typography>
            <Typography>
              {slug} - {moment(time).format("DD MMM YY")}
            </Typography>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Grid item>
              <Button size="small" variant="contained" color="primary">
                Export PDF
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item container sm={12} xs={12} md={4}>
            <CardInfo data={dataTable} />
          </Grid>
          <Grid item container sm={12} xs={12} md={8}>
            <Table data={dataTable} />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );

  if (date === "presensi") view = null;

  return <div>{view}</div>;
}
