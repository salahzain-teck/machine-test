import React, { useState } from 'react'
import './BarGraphFrame.css'
import BarGraph from './BarGraph'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChartDropDown from '../components/ChartDropDown';

function BarGraphFrame() {
    const [state, setstate] = useState(false)
    const [delet , setDelete] = useState(false)
    return (
        <>
        {!delet &&
        
        <div className='barGraph'>
        <div className='salesPlan'>
     <div className='funnel_header'>
         <p>ACTIVITY SINCE JAN 2019</p>
         <div className='icons'>
          <CallMadeIcon/>
          < DeleteSharpIcon onClick={()=> setDelete(true)} />
          < ArrowDropDownIcon onClick={()=>setstate(!state)} />
         </div>
      </div> 
      <hr/>
      <div className='bar_graph'>
          {state && <ChartDropDown/>}

       <BarGraph/>
      </div>
      
  </div>
     </div>
        
        }
         
        </>
      
      
    )
}

export default BarGraphFrame
