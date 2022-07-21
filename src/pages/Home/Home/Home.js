import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Doctor from '../../../images/doctor.png';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    marginTop:'90px',
    height:'500px'
}
const Home = () => {
    return (
        <Container 
        sx={{ flexGrow: 1 }}
        >
            <Grid container spacing={{ xs: 2, md: 1 }}  columns={{ xs: 16, sm: 16, md: 16, lg:16 }}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={16} sm={16} md={8} lg={8} >
                    <Box>
                        <Typography variant="h3"
                        sx={{fontWeight:'normal', color:'#00d2d3'}}
                        >
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        Good oral hygiene is necessary to keep teeth and gums healthy. It involves habits such as brushing twice a day and having regular dental checkups.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}><Link to="/appointment"
                        style={{textDecoration:'none'}} >Get Appointment</Link></Button>
                    </Box>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8}  style={verticalCenter} >
                    <img style={{ width: '350px', height:'300px' }} src={Doctor} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Home;