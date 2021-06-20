import React, { useState } from 'react'
import './LinGraphFrame.css'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LineGrah from './LineGraph';
import ChartDropDown from '../components/ChartDropDown';
function LineGraphFrame() { 
    const [state, setstate] = useState(false);
    const [delet , setDelete] = useState(false)

    return (
        
       <>
       {!delet && 
        <div className='salesPlan'>
        <div className='funnel_header'>
            <p>SALES BY PLAN 24 MONTHS</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon onClick={()=> setDelete(true)} />
             < ArrowDropDownIcon onClick={()=>setstate(!state)} /> 
           
            </div>
         </div> 
         <hr/>
         <div className='sales_graph'>
             <div>
             {state &&   <ChartDropDown/>}
            
             </div>
            <div >
            <LineGrah/>
            </div>
          
         </div>
         
     </div>
       }
       </>
    )  
}

export default LineGraphFrame
