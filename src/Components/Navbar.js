import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'


 const Navbar = () => {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(sidebar)
    return (
        <>
        
        <div className="navbar">
           
            <Link to = "#" className='menu-bars'>
                <FaIcons.FaBars onClick = {showSidebar} />
            </Link>
            <div style={{marginLeft:250}}>
                <FaIcons.FaBars />
            </div>
            <div style= {{marginLeft: 20}}>
                <p><strong>Help: +050 8888 938</strong></p>
                
            </div>
            <div style= {{marginLeft: 10}}>
            <GiIcons.GiUsaFlag /> <strong> English</strong>
            </div>
            <div>
                <form>
                    <label>  
                        <input type="text" placeholder="Search here"></input>
                    </label>
                </form>
            </div>
            <div style={{marginLeft: 425}}>
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
                <VscIcons.VscAccount />
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <div className='nav-menu-items'  onClick = {showSidebar}>
            <div className="staradmin"><h2>Staradmin</h2></div>
                <div className="box">
                < VscIcons.VscAccount className="account" />
              
                
                <p style={{color: "white"}}><strong>Allen Moreno</strong><br/>Premium user</p>
                </div>
                
                {SidebarData.map((item, index) => {
                    return (
                        <div key ={index} className={item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span> {item.title} </span>
                                <div> {item.ricon} </div> 
                            </Link>
                        </div>
                    )
                })}
                </div>
            </nav> 
    
        </>
    )
}

export default Navbar;

