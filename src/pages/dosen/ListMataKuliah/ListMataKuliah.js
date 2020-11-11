import React from 'react';
import { Grid, Paper, Card, Typography } from '@material-ui/core'
import classes from './ListMataKuliah.module.scss'
import CardComponent from './Card' 
import {COLORS} from './../../../constants'

const ListMataKuliah = () => {
    return (
        <Grid container className={classes.ListMataKuliah}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Grid key={i} md={4} sm={6} item className={classes.Card}>
                    <CardComponent />
                </Grid>
            ))}
        </Grid>
    );
}

export default ListMataKuliah;
