import { Card, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => {
    return (
        <Container
         sx={{ flexGrow: 1, mt:'25px' }} 
        >
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg:12 }}>
            <Grid item xs={12} sm={12} md={4} lg={4}
            sx={{}}
            >
            <Card sx={{backgroundColor:"#5CE7ED"}}>
                <CardContent>
                    <Container  sx={{ flexGrow: 1, mt:'15px' }}>
                        <Grid container spacing={{ xs: 2, md: 1 }}>
                            <Grid>
                                <AccessTimeIcon sx={{height:'60px', width:'70px', color:'#ffffff'}} />
                            </Grid>
                            <Grid>
                                <Typography
                                variant='h6'
                                sx={{color:'#ffffff'}}
                                >
                                Opening hour
                                </Typography>
                                <Typography
                                sx={{color:'#ffffff'}}
                                >
                               8:00 AM Everyday
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ backgroundColor:'#3A4256' }}>
                <CardContent>
                <Container  sx={{ flexGrow: 1, mt:'15px' }}>
                        <Grid container spacing={{ xs: 2, md: 1 }}>
                            <Grid>
                                <LocationOnIcon sx={{height:'50px', width:'60px', color:'#ffffff'}} />
                            </Grid>
                            <Grid>
                                <Typography
                                variant='h6'
                                sx={{color:'#ffffff'}}
                                >
                                Visit Our Location
                                </Typography>
                                <Typography
                                sx={{color:'#ffffff'}}
                                >
                                Gulshan, DK, Bangladesh 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{  backgroundColor:"#5CE7ED" }}>
                <CardContent>
                <Container  sx={{ flexGrow: 1, mt:'15px' }}>
                        <Grid container spacing={{ xs: 2, md: 1 }}>
                            <Grid>
                                <LocalPhoneIcon sx={{height:'60px', width:'70px', color:'#ffffff'}} />
                            </Grid>
                            <Grid>
                                <Typography
                                variant='h6'
                                sx={{color:'#ffffff'}}
                                >
                                Contact Us
                                </Typography>
                                <Typography
                                sx={{color:'#ffffff'}}
                                >
                                +00-012516587
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card> 
            </Grid>
            </Grid>
    </Container>
    );
};

export default Header;