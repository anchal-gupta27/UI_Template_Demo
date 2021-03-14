import React, {useState} from 'react';
import * as VscIcons from 'react-icons/vsc';
import * as FcIcons from 'react-icons/fc';
import * as GrIcons from 'react-icons/gr';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import usaflag from '../images/usaflag.jpg';
import profile from '../images/profile.png';
import './Navbar.css'

//Sidebar and topbar 
 const Navbar = () => {
    
    return(
        <>
        
        <div className="navbar">
           
            <Link to = "#" className='menu-bars'>
                <FcIcons.FcMenu  />
            </Link>
           
            <div style= {{marginLeft: 20}}>
                <p><strong>Help: +050 8888 938</strong></p>
                
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
            <img src={usaflag} alt="usaflag" className="usa-image"></img><strong style={{marginTop:25}}> English</strong>
            </div>
            <div> 
                        <input type="text" placeholder="Search here" className="input-style"></input>                
            </div>
            <div style={{marginLeft:500}}>
                <Badge badgeContent = {5} color="secondary">
                <GrIcons.GrNotification />
                </Badge>
            </div>
            <div style={{marginLeft:10}}>
                <Badge badgeContent = {2} max={999} color="secondary">
                <GrIcons.GrMailOption />
                </Badge>
            </div>
            <div style={{marginLeft:20}}> 
                 < img src={profile} alt="profile" className="profile" />
            </div>
        </div>
        <nav className= 'nav-menu active nav-menu'>
            <div className='nav-menu-items' >
            <div className="staradmin"><h2>Staradmin</h2></div>
                <div className="box">
                < img src={profile} alt="profile" className="account" />
              
                
                <p style={{color: "white"}}><strong>Allen Moreno</strong><br/>Premium user</p>
                </div>
                
                {SidebarData.map((item, index) => {
                    return (
                        <div key ={index} className={item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span> {item.title} </span>
                               
                            </Link>
                            <div >
                                {item.ricon} 
                             </div>
                        </div>
                    )
                })}
                </div>
            </nav> 
    
        </>
    )
}

export default Navbar;

