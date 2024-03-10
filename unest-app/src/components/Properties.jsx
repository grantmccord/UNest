import React, { useState } from "react";
import "./Properties.css";
import Property from "./Property.jsx";
import axios from "axios";

import Grid from '@mui/material/Grid';

export const Properties = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetchListingData();
    }, []);

    const fetchListingData = async () => {
        try {
            const response = await axios.get('/listings'); // Fetch data from the server route
            setListings(response.data); // Assuming response contains listing data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Grid data-testid="propertyGrid" container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={4} columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Grid item role="item">
                <Property />
            </Grid>
            <Grid item role="item">
                <Property />
            </Grid>
            <Grid item role="item">
                <Property />
            </Grid>
            <Grid item role="item">
                <Property />
            </Grid>
        </Grid >
    );
};

export default Properties;