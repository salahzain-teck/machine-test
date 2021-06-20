import React, { useState } from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PieChart from './PieChart'
import ChartDropDown from '../components/ChartDropDown';
function PieChartFram() {
    const [state, setState] = useState(false)
    const [delet , setDelete] = useState(false)


  return (
       <>
       {!delet &&
        <div className='salesPlan'>
        <div className='funnel_header'>
         <p>ACTIVITY SINCE JAN 2019</p>
         <div className='icons'>
          <CallMadeIcon/>
          < DeleteSharpIcon onClick={()=> setDelete(true)} />
          < ArrowDropDownIcon onClick={()=> setState(!state)} />
         </div>
      </div> 
      <hr/>
      <div className='bar_graph'>
       {state && <ChartDropDown/>}
       <PieChart/>
      </div>
        
     </div>
       }
       </>
    )
}

export default PieChartFram
