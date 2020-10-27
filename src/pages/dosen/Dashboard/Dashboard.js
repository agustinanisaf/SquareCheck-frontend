import React from 'react';
import { Grid, Paper, Card, Typography } from '@material-ui/core'
import classes from './Dashboard.module.scss'
import CardComponent from './Card' 

const fakeData = [
  {
    name: "Hadir",
    amount: 100,
    color: "hadir",
  },
  {
    name: "Izin",
    amount: 8,
    color: "izin",
  },
  {
    name: "Terlambat",
    amount: 12,
    color: "terlambat",
  },
  {
    name: "Alpa",
    amount: 2,
    color: "alpa",
  },
];

const Dashboard = () => {
    return (
        <Grid container className={classes.Dashboard}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Grid key={i} md={4} sm={6} item className={classes.Card}>
                    <CardComponent data={fakeData}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Dashboard;
