import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./Card";
import { Grid, Paper } from "@material-ui/core";
import { splitToChunk } from "./../../../utils/utility";

function SlideCarousel({ listData,id }) {
  return (
    <Grid item container spacing={1}>
      {listData.map((data, index) => (
        <Card key={index} data={data}/>
      ))}
    </Grid>
  );
}

export default function ListWaktu({ data, sizeData }) {
  const dataChunk = splitToChunk(data, sizeData, 9);

  return (
    <Grid container item spacing={3}>
      <Carousel autoPlay={false}>
        {/* <Grid container> */}
          {dataChunk.map((data, index) => (
              <SlideCarousel key={index} listData={data} />
          ))}
        {/* </Grid> */}
      </Carousel>
    </Grid>
  );
}
