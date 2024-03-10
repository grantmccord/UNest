import React, { useState, useEffect } from "react";
import "./Properties.css";
import Property from "./Property.jsx";
import axios from "axios";

import Grid from '@mui/material/Grid';

export const Properties = () => {
    // const [listings, setListings] = useState([]);

    // useEffect(() => {
    //     fetchListingData();
    // }, []);

    // const specificListings = [
    //     { "_id": { "$oid": "65c95c0270d91fbd7c84bbf1" }, "name": "2 Bed Room at Granite", "price": { "$numberInt": "849" }, "start_date": { "$date": { "$numberLong": "1704585600000" } }, "end_date": { "$date": { "$numberLong": "1714780800000" } }, "miles_from_campus": { "$numberDecimal": "0.1" }, "time": { "$date": { "$numberLong": "1707609600000" } }, "address": "Granite Student Living, 225 Northwestern Ave, West Lafayette, IN 47906", "university": "Purdue University", "rating": { "$numberDecimal": "4.3" }, "description": "An amazing place to stay.", "num_rooms": { "$numberDecimal": "0.5" }, "num_baths": { "$numberDecimal": "0.5" }, "total_rooms": { "$numberInt": "2" }, "total_baths": { "$numberInt": "2" }, "amenities": ["In-Unit Laundry", "Garage Parking", "Gym"], "roommate_group": ["65c96fe2b2fe68c739c569ac"] }]
    // setListings(specificListings);

    // const fetchListingData = async () => {
    //     try {
    //         const response = await axios.get('/listings'); // Fetch data from the server route
    //         console.log(response)
    //         setListings(response.data); // Assuming response contains listing data
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
    //const listings = [{ "_id": { "$oid": "65c95c0270d91fbd7c84bbf1" }, "name": "2 Bed Room at Granite", "price": { "$numberInt": "849" }, "start_date": { "$date": { "$numberLong": "1704585600000" } }, "end_date": { "$date": { "$numberLong": "1714780800000" } }, "miles_from_campus": { "$numberDecimal": "0.1" }, "time": { "$date": { "$numberLong": "1707609600000" } }, "address": "Granite Student Living, 225 Northwestern Ave, West Lafayette, IN 47906", "university": "Purdue University", "rating": { "$numberDecimal": "4.3" }, "description": "An amazing place to stay.", "num_rooms": { "$numberDecimal": "0.5" }, "num_baths": { "$numberDecimal": "0.5" }, "total_rooms": { "$numberInt": "2" }, "total_baths": { "$numberInt": "2" }, "amenities": ["In-Unit Laundry", "Garage Parking", "Gym"], "roommate_group": ["65c96fe2b2fe68c739c569ac"] }]
    const listings = [{ "name": "2 Bed Room at Granite", "price": 849, startDate: "1/2/2003", endDate: "1/3/2003", "milesFromCampus": 0.1 }, { "name": "Aspire", "price": 1000, startDate: "2/2/2003", endDate: "2/3/2003", "milesFromCampus": 0.5 }]

    return (
        // <Grid data-testid="propertyGrid" container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={4} columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        //     <Grid item role="item">
        //         <Property />
        //     </Grid>
        //     <Grid item role="item">
        //         <Property />
        //     </Grid>
        //     <Grid item role="item">
        //         <Property />
        //     </Grid>
        //     <Grid item role="item">
        //         <Property />
        //     </Grid>
        // </Grid >

        <Grid data-testid="propertyGrid" container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={4} columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            {listings.map((listing, index) => (
                <Grid item role="item">
                    <Property key={index} listing={listing} />
                </Grid>
            ))}
        </Grid >

    );
};

export default Properties;