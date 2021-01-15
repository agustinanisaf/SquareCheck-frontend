import React from 'react'
import {Grid, Typography} from '@material-ui/core'

export default function profileComponent(props) {
    return (
      <Grid xs={6} sm={4} md item container justify="center" direction='row'>
        <Grid item  
          style={{
            borderRadius: "50%",
            height: "7.5em",
            width: "7.5em",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={props.image}
            style={{
              display: "inline",
              margin: "0 auto",
              height: "auto",
              width: "100%",
            }}
          />
            </Grid>
            <Grid item xs={12} justify='center' align='center'>

        <Typography style={{ paddingTop: "1.4em" }}>{props.name}</Typography>
            </Grid>
      </Grid>
    );
}
