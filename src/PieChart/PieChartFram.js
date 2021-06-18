import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PieChart from './PieChart'
function PieChartFram() {
    return (
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
          <PieChart/>
         </div>
           
        </div>
    )
}

export default PieChartFram
