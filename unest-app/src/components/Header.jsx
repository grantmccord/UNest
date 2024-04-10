import SearchBar from "./SearchBar.jsx";
import email from "../Assets/email.png";
import bird from "../Assets/bird.jpg";
import {
    useNavigate,
} from "react-router-dom";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import profileImg from "../Assets/pic_of_me3.jpeg";
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';



const Header = () => {
    const navigate = useNavigate();

    const navigateToMessages = () => {
        navigate('/messages', { replace: true });
    };

    const navigateToPostPage = () => {
        navigate('/post', { replace: true });
    };

    // const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div className="sticky top-0">
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    {/* <Button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">name</Button> */}
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                    <div className="flex space-x-5">
                        <button onClick={navigateToMessages} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <img src={email} width={25} height={25} alt="" />
                            <div>Messages</div>
                        </button>
                        <button onClick={navigateToPostPage} className="bg-red-400 hover:bg-red-500 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <div>Create Post</div>
                        </button>
                        {/* <React.Fragment>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar alt="Profile Image" src={profileImg} sx={{ width: 80, height: 80, alignItems: 'center' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    View My Profile
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    Logout
                                </MenuItem>


                            </Menu>
                        </React.Fragment> */}

                        <Avatar alt="Profile Image" src={profileImg} sx={{ width: 80, height: 80, alignItems: 'center' }} />


                    </div>

                </nav>
            </header>

        </div >
    );
}
export default Header;

