import React, { useState } from "react";
import "./Properties.css";
import Property from "../Property/Property.jsx";

import Grid from '@mui/material/Grid';

const Properties = () => {
    return (
        <Grid container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={4} columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Grid item>
                <Property />
            </Grid>
            <Grid item>
                <Property />
            </Grid>
            <Grid item>
                <Property />
            </Grid>
            <Grid item>
                <Property />
            </Grid>
        </Grid >
    );
};

export default Properties;