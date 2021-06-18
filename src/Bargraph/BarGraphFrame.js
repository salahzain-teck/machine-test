import React from 'react'
import './BarGraphFrame.css'
import BarGraph from './BarGraph'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import BarChart from './Funnelchart'

function BarGraphFrame() {
    return (
        <div className='barGraph'>
           <div className='salesPlan'>
        <div className='funnel_header'>
            <p>ACTIVITY SINCE JAN 2019</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon/>
             < ArrowDropDownIcon/>
            </div>
         </div> 
         <hr/>
         <div className='bar_graph'>
          <BarGraph/>
         </div>
         
     </div>
        </div>
      
    )
}

export default BarGraphFrame
