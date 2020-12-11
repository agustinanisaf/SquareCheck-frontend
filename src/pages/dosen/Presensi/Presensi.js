import React, { useState } from "react";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import Table from "./../../../components/Table";
import CardInfo from "./CardInfo";
import { useParams, useHistory } from "react-router-dom";
import { api } from "./../../../utils/api";
import {logout} from "./../../../utils/auth"
import moment from "moment";

export default function Presensi() {
  const { id } = useParams();
  const [listData, setListData] = useState([]);
  const [subject, setSubject] = useState();
  const [slug, setSlug] = useState();
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  React.useEffect(() => {
    api
      .get(`schedules/${id}`)
      .then((res) => {
        setSubject(res.data.data.subject.name);
        setSlug(res.data.data.subject.classroom.slug);
        setTime(res.data.data.time);
        return api.get(`schedules/${id}/attendances`);
      })
      .then((res) => {
        console.log(res.data.data);
        setListData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          logout();
          history.push("/login");
        }
      });
  }, []);

  return loading ? (
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
    <Grid container spacing={3} xs={12}>
      <Grid container item spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {subject}
          </Typography>
          <Typography>
            {slug} - {moment(time).format("DD MMM YY")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item container sm={12} xs={12} md={4}>
          <CardInfo id={id} data={listData} />
        </Grid>
        <Grid item container sm={12} xs={12} md={8}>
          <Table data={listData} />
        </Grid>
      </Grid>
    </Grid>
  );
}
