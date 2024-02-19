import './MessagesButton.css';
import React from 'react';

import email_icon from '../Assets/email.png';

const MessagesButton = () => {
    return(
      <div className='btn'>
        <button>
            <img src = {email_icon} alt = ""/>
        </button>
      </div>
    );
}

export default MessagesButton