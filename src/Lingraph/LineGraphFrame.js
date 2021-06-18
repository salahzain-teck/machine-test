import React from 'react'
import './LinGraphFrame.css'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LineGrah from './LineGraph';

function LineGraphFrame() { 
    return (
        <div className='salesPlan'>
           <div className='funnel_header'>
               <p>SALES BY PLAN 24 MONTHS</p>
               <div className='icons'>
                <CallMadeIcon/>
                < DeleteSharpIcon/>
                < ArrowDropDownIcon/> 
               </div>
            </div> 
            <hr/>
            <div className='sales_graph'>
               <LineGrah/>
            </div>
            
        </div>
    )  
}

export default LineGraphFrame
