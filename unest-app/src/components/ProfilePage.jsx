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
    const [aboutMeText, setAboutMeText] = useState("This is about me description!");
    const [editedAboutMeText, setEditedAboutMeText] = useState("This is about me description!");

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
            <Typography variant="h3" sx={{ textAlign: "center", pt: 3 }} gutterBottom>
                Profile Page
            </Typography>
            <Grid container sx={{ justifyContent: 'space-around', py: 6, px: 8 }} rowSpacing={5} columnSpacing={12}>
                <Grid item md={3}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="10vh"
                    >
                        <Stack spacing={2} direction="column">
                            <Avatar alt="Profile Image" src={profileImg} sx={{ width: 200, height: 200, alignItems: 'center' }} />
                        </Stack>
                    </Box>

                    {/* <Typography variant="h4" gutterBottom>
                        Nivedha Kumar
                    </Typography> */}
                </Grid>
                <Grid item md={9}>
                    <div className='aboutMeTitle'>
                        <Typography variant="h4" gutterBottom>
                            About Me
                        </Typography>
                        <ModeEditIcon fontSize="small" color="black" sx={{ marginLeft: 1 }} onClick={() => handleAboutMeEdit()}></ModeEditIcon>
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

                </Grid>
                <Grid item md={3}>
                    <Box
                        display="flex"
                        flexDirection='column'
                        justifyContent="center"
                        alignItems="center"
                        minHeight="10vh"
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
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

                <Grid item md={9}>
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
        </div >



    );
};

export default ProfilePage;