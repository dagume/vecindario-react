import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
// Icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <HomeWorkIcon className="sidebar__icon"/>
      {/* Icon */}
      
      <SidebarOption Icon={PostAddIcon} text="Publicar post"/>
      <SidebarOption Icon={PersonIcon} text="Mi perfil"/>
      <SidebarOption Icon={MessageIcon} text="Mensaje"/>
      <SidebarOption Icon={GroupIcon} text="Grupos"/>
      {/* SidebarOption */}


      {/* Botton */}
      <Button variant="outlined" className="sidebar__post" fullWidth>Post</Button>
    </div>
  )
}

export default Sidebar;

