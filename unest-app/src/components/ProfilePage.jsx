import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

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
                    <div className='aboutMe'>
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
                                />
                                <Button onClick={handleAboutMeSave}>Save</Button>
                                <Button onClick={handleAboutMeCancel}>Cancel</Button>
                            </div>
                        ) : (
                            <Typography variant="body1" gutterBottom>{aboutMeText}</Typography>
                        )}
                    </div>

                </Grid>
                <Grid item md={6}>
                    <div>
                        <Typography variant="h4" gutterBottom>
                            Basic Info
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            21/Female
                        </Typography>
                        <Button variant="contained" my={3} fullWidth={false}>Message</Button>
                        <Button variant="outlined" my={3} >Properties Viewed</Button>
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
        </div >



    );
};

export default ProfilePage;