import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import classes from "./ListMataKuliah.module.scss";
import MataKuliahCard from "./Card";
import { api } from "../../../utils/api";
import Carousel from "react-material-ui-carousel";

const SlideCarousel = ({ subjects }) => {
  return (
    <Grid container className={classes.ListMataKuliah}>
      {subjects.map((subject) => {
        return (
          <Grid key={subject.id} md={4} sm={6} item className={classes.Card}>
            <MataKuliahCard key={subject.id} subject={subject} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const ListMataKuliah = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [subjects, setSubjects] = useState();
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      // TODO: Check if subjects correct with Authorization
      .get(`subjects`, { params: { page: page } })
      .then((res) => {
        setHasNext(res.data.links.next);
        setHasPrev(res.data.links.prev);
        setSubjects(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [page]);

  return isLoading ? (
    // TODO: Change Loading Center Page
    <Grid container justify="center">
      <CircularProgress />
    </Grid>
  ) : !isError && subjects ? (
    <Carousel
      autoPlay={false}
      next={() => (hasNext ? setPage(page + 1) : null)}
      prev={() => (hasPrev ? setPage(page - 1) : null)}
    >
      <SlideCarousel subjects={subjects} />
    </Carousel>
  ) : (
    // TODO: Change Error Page
    <Grid>
      <Typography variant="h3">Error</Typography>
    </Grid>
  );
};

export default ListMataKuliah;
