import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { sizing } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import "./ProfilePage.css";
import Box from '@mui/material/Box';

import profileImg from "../Assets/dorm-room1.jpg";


function EditableText(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.initialText);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        // Here you might want to save the edited text, for example by calling a function passed as a prop
        if (props.onTextChange) {
            props.onTextChange(text);
        }
    };

    return (
        <div>
            {isEditing ? (
                <TextField
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <Typography variant="body1" onDoubleClick={handleDoubleClick}>{text}</Typography>
            )}
        </div>
    );
}


const ProfilePage = () => {
    const [isEditingAboutMe, setIsEditingAboutMe] = useState(false);
    const initialText = "I am an 18 year-old visual artist and I strive to make a difference in our world. I have developed artworks in which constant reflection has led to my unique and heartfelt expression of my thoughts on society. Education: In 5th grade, I started taking classes with my art teacher and mentor, Mrs. Pallavi Sharma. Since then, I have developed my technical skills and ability to integrate important societal thoughts in my artwork. Now, I am taking AP Art in high school and I hope to pursue art throughout my life."
    const [aboutMeText, setAboutMeText] = useState(initialText);
    const [editedAboutMeText, setEditedAboutMeText] = useState(initialText);

    const handleAboutMeEdit = () => {
        console.log("setIsEditingAboutMe is set to true");
        setIsEditingAboutMe(true);
    };

    const handleAboutMeSave = () => {
        setIsEditingAboutMe(false);
        setAboutMeText(editedAboutMeText);
    };

    const handleAboutMeCancel = () => {
        setIsEditingAboutMe(false);
        setEditedAboutMeText(aboutMeText);
    };

    const handleAboutMeChange = (e) => {
        setEditedAboutMeText(e.target.value);
    };

    // const [dialog, setDialog] = useState(false);
    // const [userImage, setUserImage] = useState(null);

    // const toggle = () => {
    //     setDialog(!dialog)
    // }

    return (
        <div>
            <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", pt: 3 }} gutterBottom>
                Profile Page
            </Typography>
            <Grid container sx={{ justifyContent: 'space-around', pt: 3, pb: 6, px: 8 }} rowSpacing={5} columnSpacing={12}>
                <Grid item md={3}>
                    <Box
                        display="flex"
                        flexDirection='column'
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar alt="Profile Image" src={profileImg} sx={{ width: 200, height: 200, alignItems: 'center' }} />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 3 }} gutterBottom>
                            Nivedha Kumar
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            21/Female
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            she/her
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Purdue
                        </Typography>
                        <Typography variant="h6" mb={3} gutterBottom>
                            Computer Science
                        </Typography>
                        <div className='basicInfoButtons'>
                            <Stack spacing={2} direction="column">
                                <Button variant="contained">Message</Button>
                                <Button variant="outlined">Properties Viewed</Button>
                            </Stack>
                        </div>
                    </Box>

                </Grid>
                <Grid item md={6}>
                    <Box display="flex"
                        flexDirection='column'
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            borderRight: 1,
                            paddingRight: 4
                        }}
                    >
                        <div className='aboutMeTitle'>
                            <Box
                                display="flex"
                                flexDirection='row'
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
                                    About Me
                                </Typography>
                                <ModeEditIcon fontSize="small" color="black" sx={{ marginLeft: 1 }} onClick={() => handleAboutMeEdit()}></ModeEditIcon>
                            </Box>

                        </div>
                        <div>
                            {isEditingAboutMe ? (
                                <div>
                                    <TextField
                                        value={editedAboutMeText}
                                        onChange={handleAboutMeChange}
                                        autoFocus
                                        multiline
                                        placeholder="Description"
                                        size="medium"
                                        sx={{ width: 500, maxHeight: 200 }}
                                    />
                                    <div className='aboutMeEditButtons'>
                                        <Button variant="contained" sx={{ width: 50 }} onClick={handleAboutMeSave}>Save</Button>
                                        <Button variant="outlined" sx={{ width: 80, marginLeft: 5 }} onClick={handleAboutMeCancel}>Cancel</Button>
                                    </div>

                                </div>
                            ) : (
                                <Typography variant="body1" gutterBottom>{aboutMeText}</Typography>
                            )}
                        </div>

                        <Typography variant="h5" mt={5} sx={{ fontWeight: "bold" }} gutterBottom>
                            Details
                        </Typography>
                        <div className='column'>
                            <div>
                                <TextField label="Class" variant="standard" />
                            </div>
                            <div>
                                <TextField label="Major" variant="standard" />
                            </div>
                            <div>
                                <TextField label="Minor" variant="standard" />
                            </div>
                            <div>
                                <TextField label="Hobbies" variant="standard" />
                            </div>
                            <div>
                                <TextField label="Interests" variant="standard" />
                            </div>
                            <div>
                                <TextField label="Ideal Rent" variant="standard" />
                            </div>

                        </div>
                    </Box>


                </Grid>

                <Grid item md={3}>
                    <Typography variant="h5" gutterBottom>
                        Personal Habits
                    </Typography>
                    <Typography variant="h5" mt={17} gutterBottom>
                        Roommate Preferences
                    </Typography>
                </Grid>
            </Grid>
        </div >



    );
};

export default ProfilePage;