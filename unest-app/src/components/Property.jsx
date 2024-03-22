import React, { useState } from "react";
import "./Property.css";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import moment from 'moment';

import dormroom1 from "../Assets/dorm-room1.jpg";
import dormroom2 from "../Assets/triple_bed.jpeg";

export const Property = ({ listing }) => {
    const { name, price, start_date, end_date, miles_from_campus } = listing;

    return (
        <Card sx={{ width: 325, height: 365, boxShadow: 7 }} className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={dormroom1}
                    alt="property"
                />
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            whiteSpace: 'normal'
                        }}
                    >
                        <Typography role="name" gutterBottom variant="subtitle1" component="div" overflow="hidden" textOverflow="ellipsis" width='11rem' sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical'
                        }}>
                            {name}
                        </Typography>
                        <Typography role="price" variant="body1" mt={1} ml={3} color="text.secondary">
                            ${price}/month
                        </Typography>
                    </Box>

                    <Typography role="date" variant="body2" color="text.secondary">
                        {moment(start_date).format('MM/DD/YYYY')} - {moment(end_date).format('MM/DD/YYYY')}
                    </Typography>

                    <Typography role="milesFromCampus" variant="body2" mt={1} mb={1} color="text.secondary">
                        {miles_from_campus} miles away
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

export default Property;
