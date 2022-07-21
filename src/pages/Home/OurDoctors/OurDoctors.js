import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const OurDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://lit-waters-26265.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Box 
        sx={{ flexGrow: 1 }}
        >
        <Container>
        <Typography sx={{ fontWeight: 600, textAlign:'center', m: 10, color:'#90E0EF' }} variant="h4" component="div">
            OUR DOCTORS
        </Typography>
            <Grid container spacing={{ xs: 2}} columns={{ xs: 16, sm: 16, md: 16, lg:16 }}>
            {
                doctors.map(doctor=> <Doctor
                    doctor={doctor}
                /> )
            }
            </Grid>
        </Container>
        </Box>
    );
};

export default OurDoctors;