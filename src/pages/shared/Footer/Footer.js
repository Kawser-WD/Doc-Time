import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box } from '@mui/system';


const Footer = () => {
    return (
        <Container
         sx={{ flexGrow: 1, mt:'40px', height:'80vh' }} 
        >
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 16, sm: 16, md: 16, lg:16 }}>
            <Grid item xs={8} sm={8} md={4} lg={4}
             sx={{mt:'50px'}}
            >
                <Typography
                varient="h6" 
                sx={{fontWeight:"bold", fontSize:"18px", color:"#6ACECE"}}
                >
                About Us
                </Typography>
                <Typography
                sx={{mb:"1em",mt:"2em", color:"#B2B2B2"}}
                >
                Honesty is our passion
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                Quality service is our main goal
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                We ensure every patient to get quality service
                </Typography>
                <Typography
                sx={{ color:"#B2B2B2"}}
                >
                We feel every patient and stuff is our Doc-Time family member
                </Typography>
                
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={4}
            sx={{mt:'50px'}}
            >
            <Typography
                varient="h6" 
                sx={{fontWeight:"bold", fontSize:"18px", color:"#6ACECE"}}
                >
                Services
                </Typography>
                <Typography
                sx={{mb:"1em",mt:"2em", color:"#B2B2B2"}}
                >
                Honesty is our passion
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                Quality service is our main goal
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                We ensure every patient to get quality service
                </Typography>
                <Typography
                sx={{ color:"#B2B2B2"}}
                >
                We feel every patient and stuff is our Doc-Time family member
                </Typography>
                
            </Grid>
            <Grid item  xs={8} sm={8} md={4} lg={4}
            sx={{mt:'50px'}}
            >
            <Typography
                varient="h6" 
                sx={{fontWeight:"bold", fontSize:"18px", color:"#6ACECE"}}
                >
                Quick Links
                </Typography>
                <Typography
                sx={{mb:"1em",mt:"2em", color:"#B2B2B2"}}
                >
                Visit Our Blogs
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                Our Insituational Photo Gallery
                </Typography>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                Annual Activities
                </Typography>
                <Typography
                sx={{ color:"#B2B2B2"}}
                >
                Our Patients Feedback
                </Typography>
                
            </Grid>
            <Grid item  xs={8} sm={8} md={4} lg={4}
            sx={{mt:'50px'}}
            >
            <Typography
                varient="h6" 
                sx={{fontWeight:"bold", fontSize:"18px", color:"#6ACECE"}}
                >
                Contact
                </Typography>
                <Typography
                sx={{mb:"1em",mt:"2em", color:"#B2B2B2", fontWeight:'normal'}}
                >
                Mymensingh Sadar, 1210
                Mymensigh
                </Typography>
                <Box
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                <FacebookIcon sx={{color:'#90E0EF'}} /> <TwitterIcon/> <GoogleIcon sx={{color:'#557C55'}} />
                </Box>
                <Typography
                sx={{mb:"1em", color:"#B2B2B2"}}
                >
                Call Us
                </Typography>
                <Typography
                sx={{ color:"#B2B2B2"}}
                >
                <PhoneInTalkIcon sx={{color:'#90E0EF'}} /> +888 01325555
                </Typography>
                
            </Grid>
            </Grid>
                <Typography
                sx={{textAlign:"center", mt:'7em', color:"#B2B2B2", fontSize:'15px'}}
                >
                Copyright @ 2022 All Rights Reserved
                </Typography>
    </Container>
    );
};

export default Footer;