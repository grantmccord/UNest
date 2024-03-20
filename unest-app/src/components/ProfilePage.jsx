import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const ProfilePage = () => {
    return (
        <div>
            <Typography variant="h3" sx={{ textAlign: "center", pt: 3 }} gutterBottom>
                Profile Page
            </Typography>
            <Grid container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={5} columnSpacing={12}>
                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom>
                        Nivedha Kumar
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        This is about me description
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <Typography variant="h4" gutterBottom>
                            Basic Info
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            21/Female
                        </Typography>
                        <Button variant="contained">Message</Button>
                        <Button variant="outlined">Properties Viewed</Button>
                    </div>
                </Grid>

                <Grid item md={6}>
                    <Typography variant="h4" gutterBottom>
                        Details
                    </Typography>
                    <div className='column'>
                        <div>
                            <TextField id="standard-basic" label="Class" variant="standard" />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Major" variant="standard" />
                        </div>

                    </div>

                </Grid>
            </Grid>
        </div>



    );
};

export default ProfilePage;