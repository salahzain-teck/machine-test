import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Total.css'
function Total() {
    return (
        <div className='total'>
             <div className='salesPlan'>
        <div className='funnel_header'>
            <p>SALED CLOSED THIS MONTH</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon/>
             < ArrowDropDownIcon/>
            </div>
         </div> 

        
         <hr/> 
         <div className='total_content'>
             <h1>$38,700</h1>
         </div>
         </div>
        </div>
       
    )
}

export default Total
