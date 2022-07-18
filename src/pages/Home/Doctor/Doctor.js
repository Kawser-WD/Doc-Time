import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Fade, Grid, Typography } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Doctor = (props) => {
    const {name, image, phone} = props.doctor;
    let [active, setActive] = useState(false);
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
       <Grid item xs={8} sm={8} md={4} lg={4} data-aos="fade-up" >
        <Card sx={{ border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                image={`data:image/png;base64,${image}`}
            />
            <CardContent>
                <Typography 
                sx={{textAlign:'center', fontWeight:'bold', color:'#203239'}} 
                variant="h5" 
                component="div"
                >
                    {name}
                </Typography>
                <Typography 
                sx={{textAlign:'center', color:'#203239'}} 
                variant="h5" 
                component="div"
                >
                  <LocalPhoneIcon/>  {phone}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default Doctor;