import React, { useState } from 'react';
import { Button, Avatar, Dialog, DialogTitle, DialogActions, IconButton } from '@mui/material';
import defaultProfileImg from "../Assets/pic_of_me3.jpeg";

const AvatarUploader = ({ profilePic, onSave }) => {
    // open is the state for the dialog
    const [open, setOpen] = useState(false);
    //has the name of the selected file
    const [selectedFile, setSelectedFile] = useState(null);
    //creates a url based on the selected file to display on the profile page
    const [avatarUrl, setAvatarUrl] = useState(defaultProfileImg); // Default avatar URL

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
            const imageUrl = URL.createObjectURL(file);
            setAvatarUrl(imageUrl);
            // setAvatarUrl('http://localhost:4000' + file);
            //send selectedFile to the user profile page to be uploaded to the database
            onSave(file);
            //close the dialog
            setOpen(false);
        }
    };

    const profilePicUrl = 'http://localhost:4000' + profilePic;

    return (
        <>
            <IconButton onClick={handleOpen}>
                <Avatar alt="Profile Image" src={profilePicUrl} sx={{ width: 200, height: 200, alignItems: 'center' }} />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose Profile Picture</DialogTitle>
                {/* type=file allows the user to look their file explorer to select a profile image */}
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </Dialog>
            {/* <img src="<%= profilePicUrl %>" alt="Profile Picture"></img> */}
        </>
    );
};

export default AvatarUploader;
