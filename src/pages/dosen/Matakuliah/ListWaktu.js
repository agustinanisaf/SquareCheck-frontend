import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./Card";
import { Grid, Paper } from "@material-ui/core";
import { splitToChunk } from "./../../../utils/utility";

function SlideCarousel({ listData,id }) {
  return (
    <Grid xs={12} item container spacing={4}>
      {listData.map(() => (
        <Card id={id} />
      ))}
    </Grid>
  );
}

export default function ListWaktu({ data, sizeData }) {
  const dataChunk = splitToChunk(data, sizeData, 9);

  return (
    // <Grid container>
      <Carousel autoPlay={false}>
        {dataChunk.map((data, index) => (
            <SlideCarousel key={index} listData={data} />
        ))}
      </Carousel>
    // </Grid>
  );
}
