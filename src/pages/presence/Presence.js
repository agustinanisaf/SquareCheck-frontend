import React from "react";
import classes from "./Presence.module.scss";
import { Grid, Typography, Button, Table} from "@material-ui/core";
import Tables from './Tables';
import Chart from './Chart';

const characters = [
    {
        nrp: 2110181006,
        name: 'Agustin Anisa',
        time: '08:00'
    },
    {
        nrp: 2110181008,
        name: 'Mohamad Akbar Fadlika',
        time: '08:15'
    },
    {
        nrp: 2110181013,
        name: 'Muhammad Nisar',
        time: '08:05'
    },
    {
        nrp: 2110181026,
        name: 'Muhammad Riza Bachtiar',
        time: '08:02'
    },
]
const Presence = () => {
    return (

        <Grid container>
            <Grid container>
                <Grid item sm={6}>
                    <Typography
                        variant="h5"
                    >
                        Mobile Programming
                        
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        3 D4 IT A - 31 Oktober 2020
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Export PDF
                    </Button>
                </Grid>
            </Grid>
            <Grid item sm={4}></Grid>
            <Grid item sm={8}>
                <Tables characterData={characters}/>
            </Grid>
        </Grid>
        // <Grid
        //     container direction="row"
        //     spacing={0}
        //     className={classes.Presence}
        // >
        //     <Typography
        //         variant="h4"
        //     >
        //         Mobile Programming
        //         <br/>
        //     </Typography>
        //     <Typography
        //         variant="h6"
        //     >
        //         3 D4 Informatika A - 20 Sep 2020
        //     </Typography>
        //     <Button
        //         color="primary"
        //         variant="contained"
        //     >
        //         Export PDF
        //     </Button>
        //     <Grid
        //         item
        //         xs={4}
        //         container
        //         justify="center"
        //         direction="column"
        //         className={classes.Diagram}
        //     >
                
        //         <Typography
        //             variant="h3"
        //         >
        //             18 / 30
        //             <br/>
        //         </Typography>
        //         <Typography
        //             variant="h1"
        //         >
        //             Hadir
        //         </Typography>
        //         <Button
        //             color="primary"
        //             variant="contained"
        //         >
        //             TUTUP ABSENSI
        //         </Button>
        //     </Grid>
        //     <Grid
        //         item
        //         xs={8}
        //         container
        //         justify="center"
        //         direction="column"
        //         className={classes.Table}
        //     >
        //         <Tables characterData={characters} />
        //     </Grid>
        // </Grid>
    );
};

export default Presence;