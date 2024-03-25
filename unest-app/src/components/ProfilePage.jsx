import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { sizing } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { createTheme } from '@mui/material/styles';

import profileImg from "../Assets/pic_of_me3.jpeg";
import "./ProfilePage.css";


// function EditDetailTextField(props) {
//     const [isEditingMe, setIsEditing] = useState(false);
//     const [text, setText] = useState("");
//     const [editedText, setEditedText] = useState("");

//     const handleEdit = () => {
//         console.log("setIsEditing is set to true");
//         setIsEditing(true);
//     };

//     const handleSave = () => {
//         setIsEditing(false);
//         setAboutMeText(editedAboutMeText);
//     };

//     const handleCancel = () => {
//         setIsEditing(false);
//         setEditedAboutMeText(aboutMeText);
//     };

//     const handleChange = (e) => {
//         setEditedText(e.target.value);
//     };
// }




const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        console.log("setIsEditing is set to true");
        setIsEditing(true);
    };

    //about me section

    const initialAboutMeText = "I am an 18 year-old visual artist and I strive to make a difference in our world. I have developed artworks in which constant reflection has led to my unique and heartfelt expression of my thoughts on society. Education: In 5th grade, I started taking classes with my art teacher and mentor, Mrs. Pallavi Sharma. Since then, I have developed my technical skills and ability to integrate important societal thoughts in my artwork. Now, I am taking AP Art in high school and I hope to pursue art throughout my life."
    const [aboutMeText, setAboutMeText] = useState(initialAboutMeText);
    const [editedAboutMeText, setEditedAboutMeText] = useState(initialAboutMeText);

    const handleAboutMeChange = (e) => {
        setEditedAboutMeText(e.target.value);
    };

    //form values in details section
    const initialValues = {
        Class: "",
        Major: "",
        Minor: "",
        Hobbies: "",
        Interests: "",
        IdealRent: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [editedFormValues, setEditedFormValues] = useState(initialValues);

    const handleFormValuesChange = (event) => {
        const { name, value } = event.target;
        setEditedFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("inside handlechange function for event: ", event);
    };

    //basic info section

    const basicInfoValues = {
        Age: "",
        Gender: "",
        Pronouns: "",
        University: ""
    };

    const [basicInfo, setBasicInfo] = useState(basicInfoValues);
    const [editedBasicInfo, setEditedBasicInfo] = useState(basicInfoValues);

    const handleBasicInfoChange = (event) => {
        const { name, value } = event.target;
        setEditedBasicInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("inside handlebasicinfochange function for event: ", event);
    };

    //save and cancel buttons

    const handleSave = () => {
        setIsEditing(false);

        //needed to add back in following line
        setAboutMeText(editedAboutMeText);
        //updating about me paragraph description
        console.log("editedAboutMeText: ", editedAboutMeText);

        //updating form values in detail section
        setFormValues(editedFormValues);
        console.log("Updated form values:", formValues);

        //updating basic info section with new values
        setBasicInfo(editedBasicInfo);
        console.log("Updated basic info:", basicInfo);
    };

    const handleCancel = () => {
        setIsEditing(false);

        setEditedAboutMeText(aboutMeText);

        //canceling changes to form values in detail section
        setEditedFormValues(formValues);

        //canceling changes to basic info
        setEditedBasicInfo(basicInfo);
    };

    return (
        <div>
            <Box display="flex" flexDirection='row' sx={{ pt: 2.5 }}>
                <div>
                    {isEditing ? (
                        <div>
                            <Box sx={{ pl: 15, pb: 2 }}>
                                <div className='aboutMeEditButtons'>
                                    <Button variant="contained" sx={{ width: 50, height: 40, boxShadow: 3, backgroundColor: "#21b6ae" }} onClick={handleSave}>Save</Button>
                                    <Button variant="outlined" sx={{ width: 80, marginLeft: 5, height: 40, boxShadow: 3, color: "#21b6ae" }} onClick={handleCancel}>Cancel</Button>
                                </div>
                            </Box>

                        </div>
                    ) : (
                        <>
                        </>
                    )}
                </div>

                <Box sx={{ width: "80%", pl: 47 }} display="flex" flexDirection='row' >
                    <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }} gutterBottom>
                        Profile Page
                    </Typography>
                    <ModeEditIcon fontSize="small" color="black" sx={{ marginLeft: 1 }} onClick={() => handleEdit()}></ModeEditIcon>
                </Box>


                <Box display="flex" flexDirection='row' sx={{ justifyContent: 'space-around' }}>
                    <Button variant="contained" width="10%" sx={{ boxShadow: 3, backgroundColor: "#21b6ae" }}>Add Listing</Button>
                    <Box sx={{ width: 50 }}></Box>
                    <EmailOutlinedIcon style={{ fontSize: '50px' }}></EmailOutlinedIcon>
                    <Box sx={{ width: 50 }}></Box>
                    <Avatar alt="Profile Image" src={profileImg} sx={{ width: 40, height: 40, pl: 5 }} />
                </Box>


            </Box>

            <Grid container sx={{ justifyContent: 'space-around', pt: 3, pb: 6, px: 8 }} rowSpacing={5} columnSpacing={12}>
                <Grid item md={3}>
                    <Box display="flex"
                        flexDirection='column'
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar alt="Profile Image" src={profileImg} sx={{ width: 200, height: 200, alignItems: 'center' }} />

                        <div>
                            {isEditing ? (
                                <div>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3 }} gutterBottom>
                                        Nivedha Kumar
                                    </Typography>
                                    <Grid container>
                                        <Box
                                            display="flex"
                                            flexDirection='column'
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            {Object.entries(editedBasicInfo).map(([key, value]) => (
                                                <Grid item xs={7} key={key}>
                                                    <TextField variant="standard" size="small"
                                                        sx={{
                                                            '& .MuiInputLabel-root': {
                                                                fontSize: '0.8rem'
                                                            },
                                                            '& .MuiInputBase-root': {
                                                                height: '20px'
                                                            },
                                                            pb: 0.8
                                                        }}

                                                        name={key}
                                                        label={key}
                                                        value={value}
                                                        onChange={handleBasicInfoChange}
                                                    />
                                                </Grid>
                                            ))}
                                        </Box>
                                    </Grid>

                                </div>
                            ) : (
                                <>

                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3 }} gutterBottom>
                                        Nivedha Kumar
                                    </Typography>

                                    <Grid>
                                        <Box
                                            display="flex"
                                            flexDirection='column'
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            {
                                                Object.entries(basicInfo).map(([key, value]) => (
                                                    <Typography key={key} variant="h6" sx={{ color: "#606060" }} gutterBottom>{value}</Typography>
                                                ))
                                            }
                                        </Box>
                                    </Grid>

                                </>
                            )}
                        </div>
                        <div className='basicInfoButtons'>
                            <Stack spacing={2} direction="column" sx={{ pt: 2 }}>
                                <Button variant="contained" sx={{ boxShadow: 3, backgroundColor: "#21b6ae" }}>Message</Button>
                                <Button variant="outlined" sx={{ boxShadow: 3, color: "#21b6ae", outlineColor: "#21b6ae" }}>Properties Viewed</Button>
                            </Stack>
                        </div>
                    </Box>
                </Grid>


                <Grid item md={6}>
                    <Box sx={{
                        borderRight: 1,
                    }}>
                        <Box display="flex"
                            flexDirection='column'
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                paddingRight: 4
                            }}
                        >
                            <div className='aboutMeTitle'>
                                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                                    About Me
                                </Typography>
                            </div>

                            <div>
                                {isEditing ? (
                                    <div>
                                        <TextField
                                            value={editedAboutMeText}
                                            onChange={handleAboutMeChange}
                                            autoFocus
                                            multiline
                                            placeholder="Description"
                                            size="medium"
                                            sx={{ width: 550, height: 180 }}
                                        />

                                    </div>
                                ) : (
                                    <Typography variant="body1" gutterBottom>{aboutMeText}</Typography>
                                )}
                            </div>
                        </Box>

                        <Box
                            sx={{ paddingLeft: 12 }}
                        >
                            <Typography variant="h5" mt={7} sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                                Details
                            </Typography>
                        </Box>



                        <Box sx={{ paddingLeft: 12 }}>
                            <div>
                                {isEditing ? (
                                    <Grid container>
                                        {Object.entries(editedFormValues).map(([key, value]) => (
                                            <Grid item xs={7} key={key}>
                                                <TextField variant="standard" size="small"
                                                    sx={{
                                                        '& .MuiInputLabel-root': {
                                                            fontSize: '0.8rem'
                                                        },
                                                        '& .MuiInputBase-root': {
                                                            height: '20px'
                                                        },
                                                        pb: 0.8
                                                    }}

                                                    name={key}
                                                    label={key}
                                                    value={value}
                                                    onChange={handleFormValuesChange}
                                                />
                                            </Grid>
                                        ))}

                                    </Grid>
                                ) : (
                                    <Grid>
                                        {
                                            Object.entries(formValues).map(([key, value]) => (
                                                <Typography key={key} sx={{ pt: 1.0 }} variant="body1" gutterBottom>{key}: {value}</Typography>
                                            ))
                                        }
                                    </Grid>
                                )}
                            </div>

                            {/* InputLabelProps={{
                                    sx: {
                                        color: "#518eb9",
                                        fontSize: "28px",
                                        fontWeight: 1000,
                                        "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" }
                                    } */}
                            {/* sx={{ "& .MuiInputBase-input": { fontSize: 17, height: 5, padding: 1.2 } }} */}

                            {/* <div>
                                    <TextField label="Major" variant="standard" size="small" sx={{ "& .MuiInputBase-input": { fontSize: 12, height: 5, padding: 1.2 } }} InputLabelProps={{
                                        sx: {
                                            fontSize: "12px",
                                            fontWeight: 30,
                                            padding: 1
                                        }

                                    }} />
                                </div> */}

                        </Box>
                    </Box>

                </Grid>

                <Grid item md={3}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                        Personal Habits
                    </Typography>
                    <Typography variant="h5" mt={30} sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                        Roommate Preferences
                    </Typography>
                </Grid>

                {/* <Box display="flex" flexDirection='row' sx={{ pt: 1 }}>
                    <div className='aboutMeEditButtons'>
                        <Button variant="contained" sx={{ width: 50 }} onClick={handleSave}>Save</Button>
                        <Button variant="outlined" sx={{ width: 80, marginLeft: 5 }} onClick={handleCancel}>Cancel</Button>
                    </div>
                </Box> */}

            </Grid >
        </div >



    );
};

export default ProfilePage;