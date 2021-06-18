import React from 'react'
import './Navbar.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForwardIcon from '@material-ui/icons/Forward';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';


function Navbar() {
    return (
        <div className = 'navbar'>
            <div className='left'>

             
      < MenuIcon />  
     
             
             <div className='input_div'>
                 
                 <p>Search</p>
                 < SearchIcon/>

             </div>
            
             
            </div>
            <div className='right'>
                <div className='name_div'>
                <p className='name_p'>MIKE PETORSEN</p>
           
                <p className='caption_p'>XYZ Sales & Marketing</p>
                 </div>
               
             <Avatar src='https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg'/>
             <SettingsIcon/>
             < NotificationsIcon/>
             <ForwardIcon/>
             <div className='help'>
                 <h5>?</h5>
                 <p>HELP</p>
             </div>
            </div>
        </div>
    )
}

export default Navbar
