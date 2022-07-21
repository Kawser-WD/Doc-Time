import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Doctor from '../../../images/doc-team.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init()



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
}
const AboutUs = () => {
    return (
        <Container 
        sx={{ flexGrow: 1, marginTop:'100px'}}
        >
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 16, sm: 16, md: 16, lg:16 }}>
                <Grid item style={{ ...verticalCenter }} xs={8} md={8} lg={8} sm={8}>
                    <Box>
                        <Typography variant="h3"
                        sx={{fontWeight:'normal', fontSize:'30px', color:'#372929'}}
                        >
                            Honesty and Quality Service is our main goal
                        </Typography>
                        <Typography variant="h6" 
                        sx={{ my: 3, fontSize: 15, fontWeight: 'normal', color: 'gray', textAlign:'justify' }}
                        >
                       Healthcare has become extraordinarily complex — the balance of quality against cost, and of technology against humanity, are placing ever-increasing demands on clinicians.  These challenges require extraordinary leaders. Doctors were once viewed as ill-prepared for leadership roles because their selection and training led them to become “heroic lone healers.”  But this is changing.  The emphasis on patient-centered care and efficiency in the delivery of clinical outcomes means that physicians are now being prepared for leadership.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8} md={8} lg={8} sm={8} style={verticalCenter} 
                data-aos="fade-left"
                data-aos-duration="2000"
                >
                    <img className='img-fluid' style={{width:'300px'}} src={Doctor} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutUs;