import React, { useState } from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Gauge from './Gauge';
import ChartDropDown from '../components/ChartDropDown';
function GaugeFrame() {
    const [delet , setDelete] = useState(false)
    const [state, setstate] = useState(false)
    return (


        <>
        {!delet &&
        
        <div className='salesPlan'>
        <div className='funnel_header'>
            <p>SALES TARGET CAUGE</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon onClick={()=> setDelete(true)} />
             < ArrowDropDownIcon onClick={()=> setstate(!state)} />
            </div>
         </div> 
         <hr/>
         {state && <ChartDropDown/>}
         <div className='bar_graph'>
          
           <Gauge/>
         </div>
         
     </div>}
        </>
    )
}

export default GaugeFrame
