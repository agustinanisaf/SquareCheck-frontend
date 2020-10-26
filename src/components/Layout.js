import React from 'react';
import {Grid} from '@material-ui/core'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
    return (
        <Grid
            container
            spacing={0}
        >
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Grid item container xs={10}>
                huiwae
            </Grid>
        </Grid>
    );
}

export default Layout;
