import React, { useState } from 'react'
import './Sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';

function Sidebar() {

    const [classes, setClasses] = useState({dashboard : true})
    return (
        <div className='sidebar'>
            <div className='header_box'>

            </div>
            <div className='sales'>
               
                <h4 >SALES</h4>
            </div>
            <div onClick={ ()=> setClasses  ({dashboard:true})}  className={`items ${classes.dashboard ? 'active' : ''}`}>
                <DashboardIcon className='icons'/>
                <h4>DashBoard</h4>
            </div>
            <div onClick={ ()=> setClasses  ({accounts:true})}  className={`items ${classes.accounts ? 'active' : ''}`}>
                <AccountBoxIcon className='icons'/>
                <h4>Accounts</h4>
            </div>
            <div onClick={ ()=> setClasses  ({contacts:true})}  className={`items ${classes.contacts ? 'active' : ''}`}>
                <ContactsIcon className='icons'/>
                <h4>Contacts</h4>
            </div>
            <div onClick={ ()=> setClasses  ({opportunities:true})}  className={`items ${classes.opportunities ? 'active' : ''}`}>
                <EmojiObjectsTwoToneIcon className='icons'/>
                <h4>Opportunities</h4>
            </div>
            <div onClick={ ()=> setClasses  ({tasks:true})}  className={`items ${classes.tasks ? 'active' : ''}`}>
                <AssignmentTurnedInTwoToneIcon className='icons'/>
                <h4>Tasks</h4>
            </div>
            <div onClick={ ()=> setClasses  ({reports:true})}  className={`items ${classes.reports ? 'active' : ''}`}>
                <FileCopyTwoToneIcon className='icons'/>
                <h4>Reports</h4>
            </div>
   
            <div onClick={ ()=> setClasses  ({marketing:true})}  className={`outer_box ${classes.marketing ? 'active' : ''}`}>
                <h4>MARKETING</h4>
            </div>
            <div  onClick={ ()=> setClasses  ({service:true})}  className={`outer_box ${classes.service ? 'active' : ''}`}>
                <h4>SERVICE & SUPPORT</h4>
            </div>
            <div  onClick={ ()=> setClasses  ({history:true})}  className={` outer_box ${classes.history ? 'active' : ''}`}>
                <ArrowRightTwoToneIcon className='arrow_icon'/>
                <h4 >HISTORY</h4>
            </div>
            

            
    
        </div>
    )
}

export default Sidebar
