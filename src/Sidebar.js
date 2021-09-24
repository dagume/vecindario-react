import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Link } from 'react-router-dom';

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
      <Link to="/">
      <HomeWorkIcon className="sidebar__icon"/>
      </Link>
      {/* Icon */}
      
      <SidebarOption path="/post" Icon={PostAddIcon} text="Publicar post"/>
      <SidebarOption path="#" Icon={PersonIcon} text="Mi perfil"/>
      <SidebarOption path="#" Icon={MessageIcon} text="Mensaje"/>
      <SidebarOption path="#" Icon={GroupIcon} text="Grupos"/>
      {/* SidebarOption */}


      {/* Botton */}
      {/* <Button variant="outlined" className="sidebar__post" fullWidth>Post</Button> */}
    </div>
  )
}

export default Sidebar;

