import React, { useState } from "react";
import "./Property.css";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import dormroom1 from "../Assets/dorm-room1.jpg";

const Property = () => {
    return (
        <Card sx={{ width: 325, height: 325, boxShadow: 7 }} className="card">
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
                        <Typography gutterBottom variant="subtitle1" component="div" overflow="hidden" textOverflow="ellipsis" width='rem' sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical'
                        }}>
                            2 Bed Room at Granite Apartments
                        </Typography>
                        <Typography variant="body1" mt={1} ml={3} color="text.secondary">
                            $849/month
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Jan 7th - May 4th 2024
                    </Typography>

                    <Typography variant="body2" mt={1} mb={1} color="text.secondary">
                        0.1 miles away
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

export default Property;
