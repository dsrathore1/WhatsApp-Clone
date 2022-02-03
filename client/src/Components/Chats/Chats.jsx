import { React, useState, useEffect } from 'react';

//! Import CSS files
import '../Chats/Chats.css'

//! Import Material UI things
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, MoreVert, AttachFile } from '@material-ui/icons/'

function Chats() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random * 5000));
    }, []);

    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_header_info">
                    <h3>Room No.</h3>
                    <p>Last Seen...</p>
                </div>

                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat_body"></div>
            <div className="chat_footer"></div>
        </div>
    );
}

export default Chats;
