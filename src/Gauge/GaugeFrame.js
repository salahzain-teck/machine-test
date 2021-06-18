import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Gauge from './Gauge';
function GaugeFrame() {
    return (
<div className='salesPlan'>
        <div className='funnel_header'>
            <p>SALES TARGET CAUGE</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon/>
             < ArrowDropDownIcon/>
            </div>
         </div> 
         <hr/>
         <div className='bar_graph'>
           <Gauge/>
         </div>
         
     </div>
    )
}

export default GaugeFrame
