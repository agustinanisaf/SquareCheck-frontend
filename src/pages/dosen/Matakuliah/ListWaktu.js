import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { splitToChunk } from "./../../../utils/utility";

function SlideCarousel({ listData }) {
  return (
    <Grid item container justify="center" alignItems="center" alignContent="center" spacing={2}>
      {listData.map((data, index) => (
        <Card key={index} data={data}/>
      ))}
    </Grid>
  );
}

export default function ListWaktu({ data, sizeData }) {
  const dataChunk = splitToChunk(data, 9);

  return (
    <Grid container item>
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
