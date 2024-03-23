// import {
//     useNavigate,
//   } from "react-router-dom";

// const OwnerProfile = () => {
//     const navigate = useNavigate();
//     const navigateToOwner = () => {
//         navigate('/messageOwner', {replace: true})
//     } 
//     return (
//         <div>
//         <div>
//         <h1>Owner Profile</h1>
//         </div>
//         <div>
//             <button onClick={navigateToOwner} style={{position: "relative", top: "-65px", left: "1100px", width: "100px", height: "50px"}}>Message</button>
//         </div>
//         </div>

//     );
// };

// export default OwnerProfile;


import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';

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

function App() {
    const [displayText, setDisplayText] = useState("Click me to edit!");

    const handleTextChange = (newText) => {
        setDisplayText(newText);
    };

    return (
        <div className="App">
            <h1>Editable Text Demo</h1>
            <EditableText initialText={displayText} onTextChange={handleTextChange} />
        </div>
    );
}

export default App;