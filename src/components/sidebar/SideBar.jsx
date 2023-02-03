import React from 'react'
import "./sidebar.css"
import { FolderOpenTwoTone, BugReportTwoTone } from '@material-ui/icons'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
               <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <FolderOpenTwoTone />
                            Projects
                        </li>
                        <li className="sidebarListItem">
                            <BugReportTwoTone />
                            Vulnerabilities
                        </li>
                    </ul>
                    
                </div> 
        </div>  
    </div>
  )
}
