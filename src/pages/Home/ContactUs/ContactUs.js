import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactUs = () => {
    return (
        <Container>
            
                <Typography
                varient="h6"
                sx={{textAlign:"center", mt:"30px", fontWeight:"bold", fontSize:"30px", color:"#445760"}}
                >
                CONTACT US
                </Typography>
            
                <Box 
                sx={{border:'1px solid light-gray',  height:'80vh', m:'20px auto', backgroundColor:'#41485C'}}
                >
                   <Grid container direction="column" alignItems="center" justify="center">
                <TextField
                    variant="outlined"
                    label="Email"
                    fullWidth
                    style={{ marginBottom: "2em",marginTop:'5em', width:"50%", backgroundColor:'#ffffff', borderRadius:'5px' }}
                />
                <TextField
                    variant="outlined"
                    label="Subject"
                    fullWidth
                    style={{ marginBottom: "2em",  width:"50%", backgroundColor:'#ffffff', borderRadius:'5px'  }}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Text"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ marginBottom: "2em",  width:"50%", backgroundColor:'#ffffff', borderRadius:'5px'  }}
                />
                <Button size="large" variant="contained" 
                sx={{backgroundColor:'#11CFE2'}}
                >
                    <Typography sx={{color:'#ffffff'}}>
                     SEND
                    </Typography>
                </Button>
                </Grid>
                </Box>
        </Container>
    );
};

export default ContactUs;