import React, { useState, useEffect } from 'react';
import { Button, Avatar, Dialog, DialogTitle, DialogActions, IconButton } from '@mui/material';
import defaultProfileImg from "../Assets/defaultProfileIcon.jpeg";

const AvatarUploader = ({ disabled, profilePic, onSave }) => {
    // open is the state for the dialog
    const [open, setOpen] = useState(false);
    //has the name of the selected file
    let profilePicUrl = ''
    //console.log("profilePic: ", profilePic);
    if (profilePic) {
        //console.log("profilepic is NOT null");
        profilePicUrl = 'http://localhost:4000' + profilePic;
    } else {
        //console.log("profilepic is null");
        profilePicUrl = defaultProfileImg;
    }

    //creates a url based on the selected file to display on the profile page
    console.log("'http://localhost:4000' + profilePic", 'http://localhost:4000' + profilePic)
    console.log("profilePicUrl", profilePicUrl);
    const [avatarUrl, setAvatarUrl] = useState(profilePicUrl); // Default avatar URL

    useEffect(() => {
        if (profilePic) {
            const profilePicUrl = 'http://localhost:4000' + profilePic;
            setAvatarUrl(profilePicUrl || defaultProfileImg);
        }
    }, [profilePic]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log("file in handleFileChange: ", file)
            onSave(file);

            // const imageUrl = URL.createObjectURL(file);
            // console.log("imageUrl", imageUrl);
            // setAvatarUrl(imageUrl);

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
        </>
    );
};

export default AvatarUploader;
