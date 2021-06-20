import React, { useState } from 'react'
import MixedBarGraph from './MixedBarGraph';
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChartDropDown from '../components/ChartDropDown';
function MixedBarGraphFrame() {
    const [state, setState] = useState(false)
    const [delet , setDelete] = useState(false)
    return (
       <>
       {!delet &&
       
       <div className='salesPlan'>
       <div className='funnel_header'>
           <p>NEW CUSTOMERS YEAR ON YEAR</p>
           <div className='icons'>
            <CallMadeIcon/>
            < DeleteSharpIcon onClick={()=> setDelete(true)} />
            < ArrowDropDownIcon onClick={()=> setState(!state)} />
           </div>
        </div> 
        <hr/>
        <div className='bar_graph'>
        {state && <ChartDropDown/>}
            <MixedBarGraph/>
        </div>
        
    </div>}
       </>
    )
}

export default MixedBarGraphFrame
