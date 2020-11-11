import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./Card";
import { Grid, Paper } from "@material-ui/core";
import { splitToChunk } from "./../../../utils/utility";

function SlideCarousel({ listData,id }) {
  return (
    <Grid component={Paper} xs={12} item container spacing={4}>
      {listData.map(() => (
        <Card id={id} />
      ))}
    </Grid>
  );
}

export default function ListWaktu({ data, sizeData }) {
  const dataChunk = splitToChunk(data, sizeData, 9);
  React.useState(() => {
    console.log(dataChunk);
  }, []);

  return (
    // <Grid container>
      <Carousel autoPlay={false}>
        {dataChunk.map((data, index) => (
          <Grid container item xs={12}>
            <SlideCarousel key={index} listData={data} />
          </Grid>
        ))}
      </Carousel>
    // </Grid>
  );
}
