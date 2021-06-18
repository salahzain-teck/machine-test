import React from 'react'
import './Funnel.css'
import CallMadeIcon from '@material-ui/icons/CallMade';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';



function Funnel() {

   
    return (
        <div className='funnel'>
            <div className='funnel_header'>
               <p>SALES FUNNEL</p>
               <div className='icons'>
                <CallMadeIcon/>
                < DeleteSharpIcon/>
               </div>
             
            </div>
            <hr/>
           <div className='funnel_content'>
           <div id="chartdiv"></div>

           <div className='funnel_marker'>
            <div className='marker_items'>
            <span id='one'/>
            <p>New Lead</p>
            </div>
            <div className='marker_items'>
            <span id='two'/>
            <p>Qualified</p>
            </div>
            <div className='marker_items'>
            <span id='three'/>
            <p>Quotation Sent</p>
            </div>
            <div className='marker_items'>
            <span id='four' />
            <p>In progress</p>
            </div>
            <div className='marker_items'>
            <span id='five' />
            <p>Won</p>
            </div>
           
        
              
             
           </div>
           </div>
          

        </div>
    )
}

export default Funnel

