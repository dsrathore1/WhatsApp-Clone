import React from 'react';

//! Imports the Files from different folder
import '../Sidebar/Sidebar.css';
import SidebarChat from '../SidebarChat/SidebarChat.jsx';

//! Material UI Core Imports
import { Avatar, IconButton } from '@material-ui/core';

//! Material UI Icons Imports 
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar />
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_search_container">
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
            <input type="text" placeholder='Search or start new chat' />
          </div>
        </div>
        <div className="sidebarChats">
          <SidebarChat addNewChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
