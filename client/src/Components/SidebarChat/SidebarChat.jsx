import { React, useEffect, useState } from 'react';


//! Import CSS file
import '../SidebarChat/SidebarChat.css'

//! Import Material UI icon
import { Avatar } from '@material-ui/core'


function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
// something interesting
        }
    }

    return !addNewChat ? (
        <div className="sidebar_chats">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar_chats_info">
                <h2>Room Name</h2>
                <p>Last Message ...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebar_chats">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;
