import React from 'react'
import MixedBarGraph from './MixedBarGraph';
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function MixedBarGraphFrame() {
    return (
        <div className='salesPlan'>
        <div className='funnel_header'>
            <p>NEW CUSTOMERS YEAR ON YEAR</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon/>
             < ArrowDropDownIcon/>
            </div>
         </div> 
         <hr/>
         <div className='bar_graph'>
             <MixedBarGraph/>
         </div>
         
     </div>
    )
}

export default MixedBarGraphFrame
