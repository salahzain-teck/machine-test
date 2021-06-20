import React, { useState } from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Total.css'
import ChartDropDown from '../components/ChartDropDown';
function Total() {
    const [state, setState] = useState(false)
    const [delet , setDelete] = useState(false)
    return (
        <>
         {!delet && 
             <div className='total'>
             <div className='salesPlan'>
        <div className='funnel_header'>
            <p>SALED CLOSED THIS MONTH</p>
            <div className='icons'>
             <CallMadeIcon/>
             < DeleteSharpIcon onClick={()=> setDelete(true)} />
             < ArrowDropDownIcon onClick={()=> setState(!state)} />
            </div>
         </div> 

        
         <hr/> 
         <div className='total_content'>
         {state && <ChartDropDown/>}
             <h1>$38,700</h1>
         </div>
         </div>
        </div>
         }
        </>
       
       
    )
}

export default Total
