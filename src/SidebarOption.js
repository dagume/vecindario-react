import React from 'react'
import { Link } from 'react-router-dom';
import "./SidebarOption.css"
function SidebarOption({path, text, Icon}) {
  return (
    <div className="sidebarOption">
        <Icon />
      <Link className="link_opcion" to={path}>
        <h2>{text}</h2>
      </Link>
    </div>
  )
}

export default SidebarOption
