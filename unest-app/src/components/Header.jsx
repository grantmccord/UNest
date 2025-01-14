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

    return (
        <div className="sticky top-0">
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    {/* <Button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">name</Button> */}
                    <h1 className="font-oswald text-primary-800 mb-4 text-4xl font-medium">UNest</h1>
                    <SearchBar />
                    <div className="flex space-x-5">
                        {/* <button onClick={navigateToMessages} className="bg-red-200 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <img src={email} width={25} height={25} alt="" />
                            <div>Messages</div>
                        </button>
                        <button onClick={navigateToPostPage} className="bg-red-400 hover:bg-red-500 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <div>Create Post</div>
                        </button> */}

                        <Avatar alt="Profile Image" src={profileImg} sx={{ width: 80, height: 80, alignItems: 'center' }} />


                    </div>

                </nav>
            </header>

        </div >
    );
}
export default Header;