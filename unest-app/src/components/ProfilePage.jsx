import React, { useState, useEffect } from 'react';
import AvatarUploader from './AvatarUploader';
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
import IconButton from '@mui/material/IconButton';
import { createTheme } from '@mui/material/styles';
import axios from "axios";

import defaultProfileImg from "../Assets/pic_of_me3.jpeg";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
    //fetching user profile data
    const [userData, setUserData] = useState([]);

    const id = '65c9686f70d91fbd7c84bbf5';

    useEffect(() => {
        if (!id) {
            return;
        }
        fetchUserData();
    }, []);

    //get user data for a specific user from the database
    //TODO: see if I can fetch anytime there is a change in the database (not just when the page is mounted)

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`/api/users/${id}`); // Fetch data from the server route
            //const response = await axios.get(`/profile`);
            console.log("fetchUserData: ", response.data);
            setUserData(response.data); // Assuming response contains listing data
            console.log("userData.basic_info: ", userData.basic_info)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/myplaces/new';
        navigate(path);
    }


    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        console.log("setIsEditing is set to true");
        setIsEditing(true);
    };

    //about me section

    const initialAboutMeText = "Tell Us More About Yourself"
    const [aboutMeText, setAboutMeText] = useState(initialAboutMeText);
    const [editedAboutMeText, setEditedAboutMeText] = useState(initialAboutMeText);

    useEffect(() => {
        setAboutMeText(userData.description || initialAboutMeText);
        setEditedAboutMeText(userData.description || initialAboutMeText);
    }, [userData.description]);

    const handleAboutMeChange = (e) => {
        setEditedAboutMeText(e.target.value);
    };

    //form values in details section
    const initialValues = {
        year: "",
        major: "",
        minor: "",
        hobbies: "",
        interests: "",
        ideal_rent: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [editedFormValues, setEditedFormValues] = useState(initialValues);

    useEffect(() => {
        setFormValues(userData.details || initialValues);
        setEditedFormValues(userData.details || initialValues);
    }, [userData.details]);

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
        age: "",
        gender: "",
        pronouns: "",
        university: ""
    };

    const [basicInfo, setBasicInfo] = useState(basicInfoValues);
    const [editedBasicInfo, setEditedBasicInfo] = useState(basicInfoValues);

    useEffect(() => {
        setBasicInfo(userData.basic_info || basicInfoValues);
        setEditedBasicInfo(userData.basic_info || basicInfoValues);
    }, [userData.basic_info]);

    const handleBasicInfoChange = (event) => {
        const { name, value } = event.target;
        setEditedBasicInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("inside handlebasicinfochange function for event: ", event);
    };

    //personal habits section
    const initialHabits = {
        smoking: "",
        drinking: "",
        vegetarian: "",
        sleeping: ""
    };

    const [habits, setHabits] = useState(initialHabits);
    const [editedHabits, setEditedHabits] = useState(initialHabits);

    useEffect(() => {
        setHabits(userData.personal_habits || initialHabits);
        setEditedHabits(userData.personal_habits || initialHabits);
    }, [userData.personal_habits]);

    const handleHabitsChange = (event) => {
        const { name, value } = event.target;
        setEditedHabits(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("inside handlechange function for event: ", event);
    };


    //roommate preferences section
    const initialRoommatePref = {
        gender: "",
        smoking: "",
        drinking: "",
        vegetarian: "",
        sleeping: "",
    };

    const [roommatePref, setRoommatePref] = useState(initialRoommatePref);
    const [editedRoommatePref, setEditedRoommatePref] = useState(initialRoommatePref);

    useEffect(() => {
        setRoommatePref(userData.roommate_preferences || initialRoommatePref);
        setEditedRoommatePref(userData.roommate_preferences || initialRoommatePref);
    }, [userData.roommate_preferences]);

    const handleRoommatePrefChange = (event) => {
        const { name, value } = event.target;
        setEditedRoommatePref(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("inside handlechange function for event: ", event);
    };

    //profile image

    const [profileImg, setProfileImg] = useState(defaultProfileImg);
    const [editedProfileImg, setEditedProfileImg] = useState(defaultProfileImg);

    useEffect(() => {
        setProfileImg(userData.profile_pic || defaultProfileImg);
        setEditedProfileImg(userData.profile_pic || defaultProfileImg);
    }, [userData.profile_pic]);

    const [imgFile, setImgFile] = useState('')

    const handleAvatarPicSave = async (file) => {
        setImgFile(file)
        console.log("inside handleAvatarPicSave")
        console.log("file: ", file)
        setEditedProfileImg('/uploads/' + file.name)
        addPicToUploads(file)
        console.log("file.name", file.name)
        console.log('/uploads/' + file.name)
        console.log("editedProfileImg: ", editedProfileImg)
        console.log("PROFILEIMG: ", profileImg)
    };

    async function addPicToUploads(imgFile) {
        try {
            if (!imgFile) {
                console.error('No file provided');
                return;
            }

            const formData = new FormData();
            formData.append('avatar', imgFile);

            const response = await axios.put(`/api/users/profile-pic`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Avatar uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading avatar:', error);
        }
    }

    async function updatePic() {
        try {
            if (!imgFile) {
                console.error('No file provided');
                return;
            }

            const formData = new FormData();
            formData.append('avatar', imgFile);

            const response = await axios.put(`/api/users/${id}/profile-pic`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Avatar uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading avatar:', error);
        }
    }



    //save and cancel buttons

    const handleSave = () => {
        setIsEditing(false);

        //needed to add back in following line
        setAboutMeText(editedAboutMeText);
        //updating about me paragraph description

        //updating form values in detail section
        setFormValues(editedFormValues);

        // Update basic info section with new values
        setBasicInfo(editedBasicInfo);

        setHabits(editedHabits);

        setRoommatePref(editedRoommatePref);

        setProfileImg(editedProfileImg)

        updateUser()
        updatePic()
    };



    async function updateUser() {
        try {
            const updatedUserData = {
                id: id,
                basic_info: {
                    ...editedBasicInfo
                },
                details: {
                    ...editedFormValues
                },
                personal_habits: {
                    ...editedHabits
                },
                roommate_preferences: {
                    ...editedRoommatePref
                },
                description: editedAboutMeText
            };

            console.log("basic_info in updateUser(): ", updatedUserData.basic_info);
            console.log("details in updateUser(): ", updatedUserData.details);
            console.log("personal_habits in updateUser(): ", updatedUserData.personal_habits);
            console.log("roommate_preferences in updateUser(): ", updatedUserData.roommate_preferences);
            await axios.put(`/profile`, updatedUserData); // Assuming you need to include the user ID in the request URL
            alert('User profile has been successfully updated!');
        } catch (error) {
            console.error('Error updating user profile:', error);
            alert('Oops! User profile failed to update. Please try again.');
        }
    }

    useEffect(() => {
        // This effect will run after formValues has been updated
        // userData.basic_info = basicInfo;
        // userData.details = formValues;
        // userData.description = aboutMeText;
        console.log("aboutMeText: ", aboutMeText);
        console.log("Updated form values:", formValues);
        console.log("Updated basic info:", basicInfo);
        console.log("Updated personal habits:", habits);
        console.log("Updated roommmate preferences:", roommatePref);
    }, [aboutMeText, formValues, basicInfo, habits, roommatePref]);

    const handleCancel = () => {
        setIsEditing(false);

        setEditedAboutMeText(aboutMeText);

        //canceling changes to form values in detail section
        setEditedFormValues(formValues);

        //canceling changes to basic info
        setEditedBasicInfo(basicInfo);

        //canceling changes to personal habits section
        setEditedHabits(habits);

        //canceling changes to roommate preferences section
        setEditedRoommatePref(roommatePref);

        setEditedProfileImg(profileImg);
    };



    //Field names redefined for the different sections below

    //basic info section

    // Mapping object to customize display labels for fields
    const fieldBasicInfoDisplayLabels = {
        age: 'Age',
        gender: 'Gender',
        pronouns: 'Pronouns',
        university: 'University',
    };

    // Function to get the display label for a field
    const getBasicInfoFieldDisplayLabel = (fieldName) => {
        return fieldBasicInfoDisplayLabels[fieldName] || fieldName;
    };

    //details section

    const fieldDetailsDisplayLabels = {
        year: 'Year',
        minor: 'Minors',
        hobbies: 'Hobbies',
        interests: 'Interest',
        major: 'Major',
        ideal_rent: 'Ideal Rent',
    };

    const getDetailsFieldDisplayLabel = (fieldName) => {
        return fieldDetailsDisplayLabels[fieldName] || fieldName;
    };

    //personal habits

    const fieldHabitsLabels = {
        smoking: "Smoking",
        drinking: "Drinking",
        vegetarian: "Vegetarian",
        sleeping: "Sleeping Type"
    };

    const getHabitsLabel = (fieldName) => {
        return fieldHabitsLabels[fieldName] || fieldName;
    };


    //roommate preferences

    const fieldRoommatePrefLabels = {
        gender: "Gender",
        smoking: "Smoking",
        drinking: "Drinking",
        vegetarian: "Vegetarian",
        sleeping: "Sleeping Type"
    };

    const getRoommatePrefLabel = (fieldName) => {
        return fieldRoommatePrefLabels[fieldName] || fieldName;
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

                <Box sx={{ width: "80%", pl: 47, display: "flex", flexDirection: 'row' }} >
                    <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }} gutterBottom>
                        Profile Page
                    </Typography>
                    <ModeEditIcon fontSize="small" color="black" sx={{ marginLeft: 1 }} onClick={() => handleEdit()}></ModeEditIcon>
                </Box>


                <Box display="flex" flexDirection='row' sx={{ justifyContent: 'space-around' }}>
                    <Button onClick={routeChange} variant="contained" width="10%" sx={{ boxShadow: 3, backgroundColor: "#21b6ae" }}>Add Listing</Button>
                    <Box sx={{ width: 50 }}></Box>
                    <EmailOutlinedIcon style={{ fontSize: '50px' }}></EmailOutlinedIcon>
                    <Box sx={{ width: 50, pl: 6 }}></Box>
                    {/* <Avatar alt="Profile Image" src={profileImg} sx={{ width: 40, height: 40 }} /> */}
                </Box>


            </Box>

            <Grid container sx={{ justifyContent: 'space-around', pt: 3, pb: 6, px: 8 }} rowSpacing={5} columnSpacing={12}>
                <Grid item md={3}>
                    <Box display="flex"
                        flexDirection='column'
                        justifyContent="center"
                        alignItems="center"
                    >

                        <div>
                            {isEditing ? (
                                <div>
                                    <Box sx={{ mt: 10 }}>
                                        <AvatarUploader disabled={false} profilePic={editedProfileImg} onSave={handleAvatarPicSave} />
                                    </Box>
                                    <Grid container>
                                        <Box
                                            display="flex"
                                            flexDirection='column'
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 12 }} gutterBottom>
                                                {userData.first_name} {userData.last_name}
                                            </Typography>
                                            {Object.entries(editedBasicInfo).map(([key, value]) => (
                                                <Grid item xs={12} key={key}>
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
                                                        label={getBasicInfoFieldDisplayLabel(key)}
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
                                    <Box sx={{ mt: 10 }}>
                                        <AvatarUploader disabled={true} profilePic={editedProfileImg} onSave={handleAvatarPicSave} />
                                    </Box>
                                    <Grid>
                                        <Box
                                            display="flex"
                                            flexDirection='column'
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 12 }} gutterBottom>
                                                {userData.first_name} {userData.last_name}
                                            </Typography>
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
                                paddingRight: 10
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
                                        {Object.entries(editedFormValues).map(([fieldName, value]) => (
                                            <Grid item xs={12} key={fieldName}>
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

                                                    name={fieldName}
                                                    label={getDetailsFieldDisplayLabel(fieldName)}
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
                                                <Typography key={key} sx={{ pt: 1.0 }} variant="body1" gutterBottom>{getDetailsFieldDisplayLabel(key)}: {value}</Typography>
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

                    <Box>
                        <Typography variant="h6" mt={1} sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                            Personal Habits
                        </Typography>
                    </Box>

                    <Box>
                        <div>
                            {isEditing ? (
                                <Grid container>
                                    {Object.entries(editedHabits).map(([fieldName, value]) => (
                                        <Grid item xs={12} key={fieldName}>
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

                                                name={fieldName}
                                                label={getHabitsLabel(fieldName)}
                                                value={value}
                                                onChange={handleHabitsChange}
                                            />
                                        </Grid>
                                    ))}

                                </Grid>
                            ) : (
                                <Grid>
                                    {
                                        Object.entries(habits).map(([key, value]) => (
                                            <Typography key={key} sx={{ pt: 1.0 }} variant="body1" gutterBottom>{getHabitsLabel(key)}: {value}</Typography>
                                        ))
                                    }
                                </Grid>
                            )}
                        </div>
                    </Box>


                    <Box>
                        <Typography variant="h6" mt={8} sx={{ fontWeight: "bold", color: "#FA4A4A" }} gutterBottom>
                            Roommate Preferences
                        </Typography>
                    </Box>

                    <Box>
                        <div>
                            {isEditing ? (
                                <Grid container>
                                    {Object.entries(editedRoommatePref).map(([fieldName, value]) => (
                                        <Grid item xs={12} key={fieldName}>
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

                                                name={fieldName}
                                                label={getRoommatePrefLabel(fieldName)}
                                                value={value}
                                                onChange={handleRoommatePrefChange}
                                            />
                                        </Grid>
                                    ))}

                                </Grid>
                            ) : (
                                <Grid>
                                    {
                                        Object.entries(roommatePref).map(([key, value]) => (
                                            <Typography key={key} sx={{ pt: 1.0 }} variant="body1" gutterBottom>{getRoommatePrefLabel(key)}: {value}</Typography>
                                        ))
                                    }
                                </Grid>
                            )}
                        </div>
                    </Box>
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