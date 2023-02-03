import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
           <div className="topleft">
                <span className="logo">CyberHen</span>
           </div>
           <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>   
                </div>
                <div className="topbarIconContainer">
                    <Settings/>   
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1KLrINTZ8b6dAWfWcpEIlR-xtg3FRyVxHJ1eG29j2g&s" alt="" className="topAvatar" />
            </div> 
        </div> 
    </div>
  )
}
