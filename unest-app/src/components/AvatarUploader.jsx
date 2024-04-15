import React, { useState, useEffect } from 'react';
import { Button, Avatar, Dialog, DialogTitle, DialogActions, IconButton } from '@mui/material';
import defaultProfileImg from "../Assets/pic_of_me3.jpeg";

const AvatarUploader = ({ disabled, profilePic, onSave }) => {
    // open is the state for the dialog
    const [open, setOpen] = useState(false);
    //has the name of the selected file
    const [selectedFile, setSelectedFile] = useState(null);
    const profilePicUrl = 'http://localhost:4000' + profilePic;
    //creates a url based on the selected file to display on the profile page
    console.log("'http://localhost:4000' + profilePic", 'http://localhost:4000' + profilePic)
    const [avatarUrl, setAvatarUrl] = useState(profilePicUrl); // Default avatar URL

    useEffect(() => {
        const profilePicUrl = 'http://localhost:4000' + profilePic;
        setAvatarUrl(profilePicUrl || defaultProfileImg);
    }, [profilePic]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     setAboutMeText(userData.description || initialAboutMeText);
    //     setEditedAboutMeText(userData.description || initialAboutMeText);
    // }, [userData.description]);

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log("file in handleFileChange: ", file)
            setSelectedFile(file);
            //replaces the current avatar pic image with the one that the user selects
            //converts to url
            onSave(file);

            const imageUrl = URL.createObjectURL(file);
            console.log("imageUrl", imageUrl);
            setAvatarUrl(imageUrl);
            // setAvatarUrl('http://localhost:4000' + file);
            //send selectedFile to the user profile page to be uploaded to the database

            //close the dialog
            setOpen(false);
        }
    };

    return (
        <>
            <IconButton disabled={disabled} onClick={handleOpen}>
                <Avatar alt="Profile Image" src={avatarUrl} sx={{ width: 200, height: 200, alignItems: 'center' }} />
            </IconButton >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose Profile Picture</DialogTitle>
                {/* type=file allows the user to look their file explorer to select a profile image */}
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </Dialog>
            {/* <p>
                {avatarUrl}
            </p> */}

            {/* <Avatar alt="Profile Image" src={'blob:http://localhost:3000/29a60a88-a592-44de-8c1f-fb9cffb116e0'} sx={{ width: 200, height: 200, alignItems: 'center' }} /> */}

            {/* <img src="<%= profilePicUrl %>" alt="Profile Picture"></img> */}
        </>
    );
};

export default AvatarUploader;
