import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import classes from "./ListMataKuliah.module.scss";
import MataKuliahCard from "./Card";
import { api } from "../../../utils/api";
import Carousel from "react-material-ui-carousel";
import { splitToChunk } from "../../../utils/utility";

const SlideCarousel = ({ subjects }) => {
  return (
    <Grid container spacing={2} className={classes.ListMataKuliah}>
      {subjects.map((subject) => 
          
            <MataKuliahCard key={subject.id} subject={subject} />
          
      )}
    </Grid>
  );
};

const ListMataKuliah = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [subjects, setSubjects] = useState();

  useEffect(() => {
    setIsLoading(true);
    api
      // TODO: Check if subjects correct with Authorization
      .get(`subjects`)
      .then((res) => {
        const dataChunk = splitToChunk(res.data.data, 9);
        setSubjects(dataChunk);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    // TODO: Change Loading Center Page
    <Grid container item justify="center" alignContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  ) : !isError && subjects ? (
      <Grid container justify="center" alignContent="center" alignItems="center" style={{height: "100%"}}>
        <Carousel
          autoPlay={false}
          >
            {subjects.map((data, index) => (
              <SlideCarousel key={index} subjects={data} />
            ))}
        </Carousel>
      </Grid>
  ) : (
    // TODO: Change Error Page
    <Grid>
      <Typography variant="h3">Error</Typography>
    </Grid>
  );
};

export default ListMataKuliah;
