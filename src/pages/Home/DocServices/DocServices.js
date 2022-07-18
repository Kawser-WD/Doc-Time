import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Box } from '@mui/system';
import OurService from '../OurService/OurService';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'For more than 70 years, most of the tap water in America has contained small amounts of fluoride to reduce tooth decay. The Centers for Disease Control and Prevention (CDC) say that fluoridated water has reduced tooth decay by about 25 percentTrusted Source',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'The most common use of tooth fillings is to fill a cavity in the tooth. But tooth fillings also can be used to repair damage to teeth caused by teeth grinding (bruxism) or to replace part of a broken tooth.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
        img: whitening
    }
]



const DocServices = () => {
    return (

        <Box 
        sx={{ flexGrow: 1 }}
        >
        <Container>
        <Typography sx={{ fontWeight: 600, textAlign:'center', m: 10 }} variant="h4" component="div">
            Services We Provide
        </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg:12 }}>
            {
                services.map(service=> <OurService
                service={service}
                /> )
            }
            </Grid>
        </Container>
        </Box>
    );
};

export default DocServices;