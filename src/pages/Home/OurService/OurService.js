import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const OurService = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{textAlign:'center'}} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{textAlign:'center'}} variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default OurService;